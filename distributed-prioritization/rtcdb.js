/*
    Copyright 2021 Tobias Baum.
    
    This file is part of RTCDB.

    RTCDB is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Foobar is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with RTCDB.  If not, see <http://www.gnu.org/licenses/>.
*/
class Database {
    constructor(storage, name) {
        this.storage = storage;
        this.name = name;
        let storedData = storage.getItem(name);
        if (storedData) {
            console.log('loading db ' + name + ' from local storage');
            let obj = JSON.parse(storedData);
            this.times = obj.times;
            this.data = obj.data;
        }
        else {
            this.times = {};
            this.data = {};
        }
    }
    put(time, id, data) {
        if (id in this.times) {
            let lastTime = this.times[id];
            if (lastTime < time) {
                this.times[id] = time;
                this.data[id] = data;
                this.saveToStorage();
                return 'update';
            }
            else {
                return 'ignore';
            }
        }
        else {
            this.times[id] = time;
            this.data[id] = data;
            this.saveToStorage();
            return 'add';
        }
    }
    saveToStorage() {
        let obj = {
            times: this.times,
            data: this.data
        };
        this.storage.setItem(this.name, JSON.stringify(obj));
    }
    get(id) {
        return this.data[id];
    }
    dumpEntries(conn, databaseName, sender, knownReceivers) {
        Object.keys(this.times).forEach(id => {
            let packet = {
                src: sender,
                t: this.times[id],
                rcv: knownReceivers,
                db: databaseName,
                id: id,
                dta: this.data[id]
            };
            conn.send(packet);
            console.log('dump ' + JSON.stringify(packet) + ' to ' + conn.peer);
        });
    }
    forEach(f) {
        Object.keys(this.times).forEach(id => f(id, this.data[id]));
    }
}
/**
 * A simple peer-to-peer database based on WebRTC/PeerJS.
 * Each node replicates all the data and changes are eagerly replicated to all other nodes.
 * For huge databases or numbers of peers, this will not scale well.
 */
export class RTCDB {
    /**
     * Constructs a new database system.
     * @param systemName An ID to distinguish it from other DBs on the same site.
     * @param peer The PeerJS peer of the current local instance.
     * @param clean true iff all existing local data should be wiped, false otherwise.
     * @param storage The storage system to use. Defaults to localStorage, other values are mainly useful for tests.
     */
    constructor(systemName, peer, clean, storage = localStorage) {
        this.systemName = systemName;
        this.peer = peer;
        this.storage = storage;
        this.ownPeerId = peer.id;
        this.time = 0;
        this.otherNames = [];
        this.onceOpened = [];
        this.others = [];
        this.callbacks = { add: {}, update: {}, ignore: {} };
        this.databases = {};
        if (clean) {
            this.clear();
        }
        else {
            this.loadStoredData();
            this.connectToKnownPeers();
        }
        peer.on('connection', (conn) => this.addNode(conn));
    }
    clear() {
        let knownDatabases = this.getStoredDatabaseNames();
        knownDatabases.forEach(key => this.storage.removeItem(this.systemName + '.' + key));
        this.storage.removeItem(this.systemName + '.meta.knownDatabases');
        this.storage.removeItem(this.systemName + '.meta.knownPeerIds');
    }
    loadStoredData() {
        let databaseNames = this.getStoredDatabaseNames();
        databaseNames.forEach(dbName => this.openDb(dbName));
    }
    getStoredDatabaseNames() {
        let dbs = this.storage.getItem(this.systemName + '.meta.knownDatabases');
        if (!dbs) {
            return [];
        }
        return JSON.parse(dbs);
    }
    connectToKnownPeers() {
        let knownPeers = this.getStoredPeers();
        knownPeers.forEach(id => this.connectToNode(id));
    }
    getStoredPeers() {
        let peers = this.storage.getItem(this.systemName + '.meta.knownPeerIds');
        if (!peers) {
            return [];
        }
        return JSON.parse(peers);
    }
    /**
     * Connects to a peer with the given Peer-ID and combines the peer networks and databases
     * of the new peer and the current object.
     */
    connectToNode(id) {
        console.log(this.ownPeerId + ' connects to ' + id);
        this.reconnectIfDisconnected();
        var conn = this.peer.connect(id, { reliable: true });
        this.addNode(conn);
    }
    reconnectIfDisconnected() {
        if (this.peer.disconnected) {
            console.log(this.ownPeerId + ' was disconnected and tries to reconnect');
            this.peer.reconnect();
        }
    }
    checkConnections() {
        let aliveConns = this.others.filter(conn => conn.open || !this.onceOpened.includes(conn.peer));
        if (aliveConns.length != this.others.length) {
            console.log('connections were closed, cleaning up');
            this.others = aliveConns;
            this.otherNames = aliveConns.map(conn => conn.peer);
        }
        if (this.others.length == 0 && this.onceOpened.length > 0) {
            // if all connections were lost, try a random one that once worked
            this.connectToNode(this.onceOpened[Math.floor(Math.random() * this.onceOpened.length)]);
        }
    }
    addNode(conn) {
        if (this.others.indexOf(conn) >= 0) {
            return;
        }
        console.log('node added to ' + this.ownPeerId + ': ' + conn.peer);
        this.otherNames.push(conn.peer);
        this.others.push(conn);
        this.storage.setItem(this.systemName + '.meta.knownPeerIds', JSON.stringify(this.otherNames));
        conn.on('data', (d) => this.handleData(d));
        conn.on('open', () => {
            this.markConnectionOpeningEnded(conn.peer);
            this.dumpDatabasesTo(conn);
        });
        conn.on('error', (d) => this.markConnectionOpeningEnded(conn.peer));
    }
    markConnectionOpeningEnded(peerId) {
        if (!this.onceOpened.includes(peerId)) {
            this.onceOpened.push(peerId);
        }
    }
    dumpDatabasesTo(conn) {
        for (let [name, db] of Object.entries(this.databases)) {
            db.dumpEntries(conn, name, this.ownPeerId, this.otherNames);
        }
    }
    handleData(d) {
        console.log(this.ownPeerId + ' received: ' + JSON.stringify(d));
        this.time = Math.max(this.time, d.t);
        this.ensureDbExists(d.db);
        let eventType = this.databases[d.db].put(d.t, d.id, d.dta);
        if (this.callbacks[eventType][d.db]) {
            this.callbacks[eventType][d.db].forEach((f) => f(d.id, d.dta));
        }
        if (eventType != 'ignore') {
            this.forwardToFurtherReceivers(d);
        }
        this.establishConnectionToUnknownNodes(d);
    }
    ensureDbExists(dbName) {
        if (!this.databases[dbName]) {
            this.openDb(dbName);
            let knownDatabases = this.getStoredDatabaseNames();
            knownDatabases.push(dbName);
            this.storage.setItem(this.systemName + '.meta.knownDatabases', JSON.stringify(knownDatabases));
        }
    }
    openDb(dbName) {
        this.databases[dbName] = new Database(this.storage, this.systemName + '.' + dbName);
    }
    forwardToFurtherReceivers(packet) {
        let furtherReceivers = [];
        let existingSet = new Set(packet.rcv);
        existingSet.add(this.ownPeerId);
        existingSet.add(packet.src);
        this.otherNames.forEach(function (x) {
            if (!existingSet.has(x)) {
                furtherReceivers.push(x);
            }
        });
        packet.rcv.push(...furtherReceivers);
        let _this = this;
        furtherReceivers.forEach(function (id) {
            let index = _this.otherNames.indexOf(id);
            let conn = _this.others[index];
            conn.send(packet);
        });
    }
    establishConnectionToUnknownNodes(packet) {
        let nameSet = new Set(this.otherNames);
        nameSet.add(this.ownPeerId);
        packet.rcv
            .filter((x) => !nameSet.has(x))
            .forEach((x) => this.connectToNode(x));
        if (!nameSet.has(packet.src)) {
            this.connectToNode(packet.src);
        }
    }
    /**
     * Adds an entry with an autogenerated new id to the given database.
     */
    add(listDb, data) {
        this.put(listDb, this.ownPeerId + this.time, data);
    }
    /**
     * Inserts an entry into the database. If another entry with the same id already
     * exists, it is overwritten.
     */
    put(database, id, data) {
        this.reconnectIfDisconnected();
        this.checkConnections();
        var packet = {
            src: this.ownPeerId,
            t: this.time++,
            rcv: this.otherNames,
            db: database,
            id: id,
            dta: data
        };
        this.others.forEach(function (x) {
            x.send(packet);
        });
        this.handleData(packet);
    }
    /**
     * Get the value of the given entry from the given database.
     * If the entry or the database does not exist, undefined is returned.
     */
    get(database, id) {
        if (!this.databases[database]) {
            return undefined;
        }
        return this.databases[database].get(id);
    }
    /**
     * Register an action that is executed when a certain event happens.
     * @param eventType 'add' to be called when a locally not yet known entry is added, 'update' to be called when the value of an existing entry changes.
     * @param database The name of the database.
     * @param provideInitialData iff true, the callback will be immediately called for all existing entries.
     * @param action The callback to be registered.
     */
    on(eventType, database, provideInitialData, action) {
        if (typeof eventType !== 'string') {
            eventType.forEach(x => this.on(x, database, provideInitialData, action));
        }
        else {
            if (this.callbacks[eventType][database]) {
                this.callbacks[eventType][database].push(action);
            }
            else {
                this.callbacks[eventType][database] = [action];
            }
            if (provideInitialData) {
                let db = this.databases[database];
                if (db) {
                    db.forEach(action);
                }
            }
        }
    }
    /**
     * Iterate over each entry in the given database and call the callback per entry.
     * If the database does not exist, no iteration happens.
     */
    forEach(database, callback) {
        let db = this.databases[database];
        if (db) {
            db.forEach(callback);
        }
    }
}
