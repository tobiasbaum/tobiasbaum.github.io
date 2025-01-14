import * as PJS from "./peerjs.min.js";
import {RTCDB} from "./rtcdb.js";

var missingComparisons;
var currentSortFunction;
var showResultsSorted = true;
var localClockCount = 0;
var localId;
var db;

function handleLoad() {
	const q = window.location.hash;
	console.log("q=" + 1);
	if (q && q.startsWith("#join=")) {
		$("#input").hide();
		let otherId = q.substring(6);
		const peer = createPeer();
		peer.once('open', (id) => {
			localId = id;
			initJoinLink();
			doJoin(peer, otherId);
		});
	}
}

function doJoin(peer, otherId) {
	db = new RTCDB("prio", peer, false);
	db.on('add', 'cmp', true, updateRecent);
	db.on('add', 'base', true, initAfterJoin);
	db.connectToNode(otherId);
}

function initAfterJoin() {
	if (baseFullyLoaded() && !currentSortFunction) {
		initSortFunction();
		missingComparisons = [];
		continueRanking();
	}
}

function baseFullyLoaded() {
	return db.get("base", "items") && db.get("base", "rankFunction");
}

function startRanking(rankFunction) {
	const peer = createPeer();
    peer.once('open', (id) => {
		localId = id;
		initJoinLink();
        startRankingFurther(rankFunction, peer);
    });
}

function createPeer() {
	const peer = new Peer(undefined, {});
    peer.on('error', (err) => {
        console.log(err);
        alert('' + err);
    });
	return peer;
}

function initJoinLink() {
	$("#joinLink").text(window.location.origin + window.location.pathname + "#join=" + localId);
}

function startRankingFurther(rankFunction, peer) {
	db = new RTCDB("prio", peer, true);
	db.on('add', 'cmp', true, updateRecent);
	var text = $("#itemInput").val();
	var itemsRaw = text.split("\n");
	
	let items = [];
	for (var i = 0; i < itemsRaw.length; i++) {
		var tr = itemsRaw[i].trim();
		
		if (tr != "" && !items.includes(tr)) {
			items.push(tr);
		}
	}
	storeBase(items, 
		$("#aiTemplate").val(),
		rankFunction);
	initSortFunction();
	clearComparisons();
	missingComparisons = [];
	$("#input").hide();
	continueRanking();
}

function initSortFunction() {
	let rf = db.get("base", "rankFunction");
	currentSortFunction = rf == "do" ? doubleOutSort : fullSort;
}

function updateRecent(k, v) {
	let old = $("#recent").text();
	let lines = old.split("\n");
	let id = k.split("\n")[2];
	let time = v.split("\n")[1];
	let newText = new Date(Number(time)).toLocaleTimeString() + ": " + id + " voted\n"
	let max = lines.length > 5 ? 5 : lines.length;
	for (let i = 0; i < max; i++) {
		newText += lines[i] + "\n";
	}
	$("#recent").text(newText);
}

function storeBase(items, aiTemplate, rankFunction) {
	db.put("base", "items", JSON.stringify(items));
	db.put("base", "aiTemplate", aiTemplate);
	db.put("base", "rankFunction", rankFunction);
}

function loadItems() {
	return JSON.parse(db.get("base", "items"));
}

function getAiTemplate() {
	return db.get("base", "aiTemplate");
}

function clearComparisons() {
	for (let i = localStorage.length - 1; i >= 0; i--) {
		let k = localStorage.key(i);
		if (k.startsWith("prio.cmp")) {
			localStorage.removeItem(k);
		}
	}
}

function storeComparison(key, result) {
	unreserve(key);
	db.put("cmp",
			key + "\n" + localId + "\n" + localClockCount,
			result + "\n" + Date.now());
	localClockCount++;
}

function reserve(key) {
	db.put("reserved", key, "true");
}

function unreserve(key) {
	db.put("reserved", key, "false");
}

function isReserved(key) {
	return db.get("reserved", key) === "true";
}

function getComparisonResult(key) {
	const kp = key + "\n";
	let pro = 0;
	let con = 0;
	db.forEach("cmp", (k, v) => {
		if (k.startsWith(kp)) {
			let parts = v.split("\n");
			if (parts[0] == "1") {
				pro++;
			} else if (parts[0] == "-1") {
				con++;
			}
		}
	});
	if (pro == con) {
		return undefined;
	}
	return pro > con ? 1 : -1;
}

function getComparisonCount(key) {
	const kp = key + "\n";
	let count = 0;
	db.forEach("cmp", (k, v) => {
		if (k.startsWith(kp)) {
			count++;
		}
	});
	return count;
}

function getOwnComparisonCount(key) {
	const kp = key + "\n" + localId + "\n";
	let count = 0;
	db.forEach("cmp", (k, v) => {
		if (k.startsWith(kp)) {
			count++;
		}
	});
	return count;
}

function continueRanking() {
	let failedEarly = true;
	var copy;
	missingComparisons = [];
	try {
		copy = currentSortFunction(loadItems(), cmp);
		failedEarly = false;
	} catch (err) {
	}
	if (failedEarly || missingComparisons.length > 0) {
		askForNextComparison();
	} else {
		showResults(copy);
	}
}

function showResults(sortedItems) {
	var res;
	if (showResultsSorted) {
		res = formatResultsSorted(sortedItems);
	} else {
		res = formatResultsWithRank(sortedItems);
	}
	$("#comparison").hide();
	$("#itemOutput").text(res);
	$("#output").show();
}

function formatResultsSorted(sortedItems) {
	var res = "";
	for (var i = 0; i < sortedItems.length; i++) {
		res += sortedItems[i] + "\n";
	}
	return res;
}

function formatResultsWithRank(sortedItems) {
	var res = "";
	let items = loadItems();
	for (var i = 0; i < items.length; i++) {
		res += items[i] + ";" + (sortedItems.indexOf(items[i]) + 1) + "\n";
	}
	return res;
}

function toggleDisplay() {
	showResultsSorted = !showResultsSorted;
	continueRanking();
}

function askForNextComparison() {
	$("#comparison").show();
	console.log(missingComparisons);
	var key = findNextComparison();
	reserve(key);
	const cc = getComparisonCount(key);
	$("#aiField").hide();
	if (cc > 0) {
		$("#askAI").show();
	} else {
		$("#askAI").hide();
	}
	if (cc < 3) {
		$("#skip").show();
	} else {
		$("#skip").hide();
	}
	var parts = fromKey(key);
	$("#cmp1").text(parts[0]);
	$("#cmp2").text(parts[1]);
}

function findNextComparison() {
	let missingAndNew = [];
	let missingNewAndUnreserved = [];
	for (let i = 0; i < missingComparisons.length; i++) {
		if (getOwnComparisonCount(missingComparisons[i]) == 0) {
			missingAndNew.push(missingComparisons[i]);
			if (!isReserved(missingComparisons[i])) {
				missingNewAndUnreserved.push(missingComparisons[i]);
			}
		}
	}
	console.log("missingComparisons = " + missingComparisons);
	console.log("missingAndNew = " + missingAndNew);
	console.log("missingNewAndUnreserved = " + missingNewAndUnreserved);
	const lh = hash(localId);
	if (missingNewAndUnreserved.length > 0) {
		return missingNewAndUnreserved[lh % missingNewAndUnreserved.length];
	} else if (missingAndNew.length > 0) {
		return missingAndNew[lh % missingAndNew.length];
	} else {
		return missingComparisons[lh % missingComparisons.length];
	}
}

function choseCmp(adjustment) {
	var t1 = $("#cmp1").text();
	var t2 = $("#cmp2").text();
	if (t1 < t2) {
		storeComparison(t1 + "\n" + t2, -1 * adjustment);
	} else {
		storeComparison(t2 + "\n" + t1, 1 * adjustment);
	}
	continueRanking();
}

function choseSkip() {
	var t1 = $("#cmp1").text();
	var t2 = $("#cmp2").text();
	storeComparison(toKey(t1, t2).k, '?');
	continueRanking();
}

function askAI() {
	var tpl = getAiTemplate();
	var t1 = $("#cmp1").text();
	var t2 = $("#cmp2").text();
	const formattedPrompt = tpl.replace("$1", t1).replace("$2", t2);
	$("#aiPrompt").text(formattedPrompt);
	navigator.clipboard.writeText(formattedPrompt);
	$("#aiField").show();
}

function cmp(a, b) {
	if (a == b) {
		return 0;
	}
	var key = toKey(a, b);
	let knownResult = getComparisonResult(key.k);
	if (knownResult) {
		return key.m * knownResult;
	}
	// Abbrechen, sobald ein Item mehrfach vorkommt
	for (let i = 0; i < missingComparisons.length; i++) {
		let parts = fromKey(missingComparisons[i]);
		if (parts[0] == a || parts[0] == b || parts[1] == a || parts[1] == b) {
			throw "comparison missing";
		}
	}
	if (!missingComparisons.includes(key.k)) {
		missingComparisons.push(key.k);
	}
	return hash(key.k) % 2 == 0 ? -1 : 1;
}

function hash(s) {
	if (s.length == 0) {
		return 42;
	}
	return s.charCodeAt(0) + s.length + s.charCodeAt(s.length - 1);
}

function toKey(a, b) {
	if (a < b) {
		return {k: a + "\n" + b, m: 1};
	} else {
		return {k: b + "\n" + a, m: -1};
	}
}

function fromKey(key) {
	return key.split("\n");
}

function fullSort(arr, comparator) {
	var copy = loadItems();
	copy.sort(comparator);
	return copy;
}

function doubleOutSort(arr, comparator) {
    if (arr.length == 0) {
		return [];
	}
	console.log("start double out " + arr);
    var currentWinnerBracket = arr.slice();
	var currentLoserBracket = [];
	var result = [];
	while (currentWinnerBracket.length > 1) {
		console.log("new round " + currentWinnerBracket + "; " + currentLoserBracket);
		var nextWinnerBracket = [];
		var nextLoserBracket = [];
		
		playMatches(currentWinnerBracket, comparator, nextWinnerBracket, nextLoserBracket);
		console.log("after winner bracket " + nextWinnerBracket + "; " + nextLoserBracket);
		currentWinnerBracket = nextWinnerBracket;

		var outInCurrentRound = [];
		do {
			playMatches(currentLoserBracket, comparator, nextLoserBracket, outInCurrentRound);
			console.log("after loser bracket " + nextWinnerBracket + "; " + nextLoserBracket);
			currentLoserBracket = nextLoserBracket;
			nextLoserBracket = [];
		} while (currentLoserBracket.length > currentWinnerBracket.length);
		
		//sort shall be stable, therefore select items in order of input array
		for (var i = arr.length - 1; i >= 0; i--) {
			if (outInCurrentRound.includes(arr[i])) {
				result.unshift(arr[i]);
			}
		}
	}
    if (currentLoserBracket.length == 0) {
		result.unshift(currentWinnerBracket[0]);
	} else {
		if (comparator(currentWinnerBracket[0], currentLoserBracket[0]) < 0) {
			result.unshift(currentLoserBracket[0]);
			result.unshift(currentWinnerBracket[0]);
		} else {
			result.unshift(currentWinnerBracket[0]);
			result.unshift(currentLoserBracket[0]);
		}
	}
	return result;
}

function playMatches(arr, comparator, winnerBuffer, loserBuffer) {
    if (arr.length % 2 == 0) {
	    for (var i = 0; i < arr.length / 2; i++) {
			playMatch(arr[i], arr[arr.length - i - 1], comparator, winnerBuffer, loserBuffer);
		}
	} else {
	    for (var i = 1; i <= arr.length / 2; i++) {
			playMatch(arr[i], arr[arr.length - i], comparator, winnerBuffer, loserBuffer);
		}
		winnerBuffer.push(arr[0]);
	}
}

function playMatch(a, b, comparator, winnerBuffer, loserBuffer) {
	console.log("playing " + a + " vs " + b);
	if (comparator(a, b) <= 0) {
		winnerBuffer.push(a);
		loserBuffer.push(b);
	} else {
		winnerBuffer.push(b);
		loserBuffer.push(a);
	}
}

window.handleLoad = handleLoad
window.startRanking = startRanking
window.doubleOutSort = doubleOutSort
window.fullSort = fullSort
window.choseCmp = choseCmp
window.choseSkip = choseSkip
window.askAI = askAI
window.toggleDisplay = toggleDisplay