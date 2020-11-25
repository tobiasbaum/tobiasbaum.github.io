(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ich/mrnOnline/src/main.ts */"zUnb");


/***/ }),

/***/ "3Hr+":
/*!******************************************************!*\
  !*** ./src/app/self-player/self-player.component.ts ***!
  \******************************************************/
/*! exports provided: SelfPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelfPlayerComponent", function() { return SelfPlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _game_field_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game-field-store.service */ "c3lu");
/* harmony import */ var _card_collection_card_collection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card-collection/card-collection.component */ "DBil");




class SelfPlayerComponent {
    constructor(field, cdr) {
        this.field = field;
        this.cdr = cdr;
        field.subscribe((f) => f.myself.subscribeForUpdate(() => cdr.markForCheck()));
    }
    ngOnInit() {
    }
    get name() {
        return this.field.gameField.myself.name;
    }
    get id() {
        return this.field.gameField.myself.id;
    }
    get gameField() {
        return this.field.gameField;
    }
    librarySize() {
        return this.field.gameField.myself.library.size;
    }
    get lifes() {
        return this.field.gameField.myself.lifes;
    }
    get hand() {
        return this.field.gameField.myself.hand;
    }
    get table() {
        return this.field.gameField.myself.table;
    }
    get graveyard() {
        return this.field.gameField.myself.graveyard;
    }
    drawCard() {
        this.field.gameField.drawCard();
    }
    decreaseLifes() {
        this.field.gameField.decreaseLifes();
    }
    increaseLifes() {
        this.field.gameField.increaseLifes();
    }
    multiLifeDecrease() {
        let count = prompt('Anzahl verlorener Leben');
        if (count) {
            this.field.gameField.myself.changeLifeCount(-Number.parseInt(count));
        }
    }
    multiLifeIncrease() {
        let count = prompt('Anzahl zusätzlicher Leben');
        if (count) {
            this.field.gameField.myself.changeLifeCount(Number.parseInt(count));
        }
    }
    isCurrentPlayer() {
        return this.field.gameField.currentPlayerName === this.field.gameField.myself.name;
    }
}
SelfPlayerComponent.ɵfac = function SelfPlayerComponent_Factory(t) { return new (t || SelfPlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_field_store_service__WEBPACK_IMPORTED_MODULE_1__["GameFieldStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
SelfPlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelfPlayerComponent, selectors: [["mrn-self-player"]], decls: 22, vars: 13, consts: [["name", "Hand", 3, "collection", "act"], ["name", "Ausgelegt", 3, "collection", "act"], [3, "click"], ["name", "Friedhof", 3, "collection", "act", "collapsed"]], template: function SelfPlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mrn-card-collection", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mrn-card-collection", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelfPlayerComponent_Template_button_click_9_listener() { return ctx.drawCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Karte ziehen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mrn-card-collection", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelfPlayerComponent_Template_button_click_14_listener() { return ctx.increaseLifes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelfPlayerComponent_Template_button_click_16_listener() { return ctx.decreaseLifes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelfPlayerComponent_Template_button_click_18_listener() { return ctx.multiLifeIncrease(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "+X ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelfPlayerComponent_Template_button_click_20_listener() { return ctx.multiLifeDecrease(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "-X ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("turn", ctx.isCurrentPlayer());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (ID: ", ctx.id, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collection", ctx.hand)("act", "PL,PT,GR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collection", ctx.table)("act", "TA,UT,GR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Bibliothek: ", ctx.librarySize(), " Karten. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collection", ctx.graveyard)("act", "PL,PT")("collapsed", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Lebenspunkte: ", ctx.lifes, " ");
    } }, directives: [_card_collection_card_collection_component__WEBPACK_IMPORTED_MODULE_2__["CardCollectionComponent"]], styles: ["legend.turn[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlbGYtcGxheWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKIiwiZmlsZSI6InNlbGYtcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGVnZW5kLnR1cm4ge1xuICAgIGNvbG9yOiByZWQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelfPlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mrn-self-player',
                templateUrl: './self-player.component.html',
                styleUrls: ['./self-player.component.scss']
            }]
    }], function () { return [{ type: _game_field_store_service__WEBPACK_IMPORTED_MODULE_1__["GameFieldStoreService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "8Yrd":
/*!************************************************!*\
  !*** ./src/app/chat-box/chat-box.component.ts ***!
  \************************************************/
/*! exports provided: ChatBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatBoxComponent", function() { return ChatBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _game_field_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game-field-store.service */ "c3lu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ChatBoxComponent_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const m_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", m_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r1.tc);
} }
function ChatBoxComponent_div_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const m_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", m_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", m_r1.tc, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", m_r1.tr, " ");
} }
function ChatBoxComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatBoxComponent_div_6_ng_container_1_Template, 3, 3, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatBoxComponent_div_6_ng_container_2_Template, 4, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", m_r1.tr === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", m_r1.tr !== "");
} }
class ChatBoxComponent {
    constructor(field, cdr) {
        this.field = field;
        this.cdr = cdr;
        this.messages = [];
        field.subscribe(gf => gf.registerMessageHandler((id, msg) => this.handleAddedMessage(msg)));
    }
    ngOnInit() {
    }
    handleAddedMessage(msg) {
        this.messages.push(msg);
        this.cdr.detectChanges();
        this.scrollToBottom();
    }
    scrollToBottom() {
        let elem = document.getElementById('chatbox');
        if (elem) {
            elem.scrollTop = elem.scrollHeight;
        }
    }
    sendMessage() {
        var message = prompt('Nachricht');
        if (message) {
            window.mrnOnline.gameField.sendMessage(message);
        }
    }
}
ChatBoxComponent.ɵfac = function ChatBoxComponent_Factory(t) { return new (t || ChatBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_field_store_service__WEBPACK_IMPORTED_MODULE_1__["GameFieldStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ChatBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatBoxComponent, selectors: [["mrn-chat-box"]], decls: 7, vars: 1, consts: [[3, "click"], ["id", "chatbox", 1, "chatbox"], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function ChatBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_button_click_3_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Schreiben ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatBoxComponent_div_6_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["div.chatbox[_ngcontent-%COMP%] {\n  height: 150px;\n  overflow: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NoYXQtYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoiY2hhdC1ib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY2hhdGJveCB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mrn-chat-box',
                templateUrl: './chat-box.component.html',
                styleUrls: ['./chat-box.component.scss']
            }]
    }], function () { return [{ type: _game_field_store_service__WEBPACK_IMPORTED_MODULE_1__["GameFieldStoreService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuRQ":
/*!**************************************!*\
  !*** ./src/app/domain/game-field.ts ***!
  \**************************************/
/*! exports provided: CardCollection, CardStash, CardBag, OtherPlayer, GameField, Card, CardType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardCollection", function() { return CardCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardStash", function() { return CardStash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBag", function() { return CardBag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherPlayer", function() { return OtherPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameField", function() { return GameField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardType", function() { return CardType; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _distributed_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./distributed-database */ "JjPw");


class CardType {
    constructor(name, img) {
        this.name = name;
        this.img = img;
    }
    toDto() {
        return {
            name: this.name,
            img: this.img
        };
    }
}
function cardTypeFromDto(dto) {
    return new CardType(dto.name, dto.img);
}
var cardCnt = 0;
class Card {
    constructor(type, id, tapped) {
        this.type = type;
        if (typeof id === 'undefined') {
            this.id = Math.floor(Math.random() * 10000) * 1000 + cardCnt++;
        }
        else {
            this.id = id;
        }
        if (typeof tapped === 'undefined') {
            this.tapped = false;
        }
        else {
            this.tapped = tapped;
        }
    }
    tap() {
        this.tapped = true;
    }
    untap() {
        this.tapped = false;
    }
    get name() {
        return this.type.name;
    }
    get img() {
        return this.type.img;
    }
    toDto() {
        return {
            id: this.id,
            type: this.type.toDto(),
            tapped: this.tapped
        };
    }
}
function cardFromDto(dto) {
    return new Card(cardTypeFromDto(dto.type), dto.id, dto.tapped);
}
class CardCollection {
    constructor(cards) {
        this.cards = cards;
    }
    [Symbol.iterator]() {
        return this.cards[Symbol.iterator]();
    }
    contains(cardId) {
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].id === cardId) {
                return true;
            }
        }
        return false;
    }
    getById(cardId) {
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].id === cardId) {
                return this.cards[i];
            }
        }
        return null;
    }
    remove(cardId) {
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].id === cardId) {
                let card = this.cards[i];
                this.cards.splice(i, 1);
                return card;
            }
        }
        return null;
    }
    get size() {
        return this.cards.length;
    }
    toDto() {
        return this.cards.map(x => x.toDto());
    }
}
class CardStash extends CardCollection {
    constructor(cards) {
        super(cards);
    }
    add(card) {
        this.cards.push(card);
    }
    shuffle() {
        var currentIndex = this.cards.length;
        var temporaryValue;
        var randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = this.cards[currentIndex];
            this.cards[currentIndex] = this.cards[randomIndex];
            this.cards[randomIndex] = temporaryValue;
        }
    }
    draw() {
        return this.cards.shift();
    }
}
class CardBag extends CardCollection {
    constructor(cards) {
        super(cards);
    }
    add(card) {
        let idx = this.cards.findIndex(x => x.type.name === card.type.name);
        if (idx < 0) {
            this.cards.push(card);
        }
        else {
            this.cards.splice(idx, 0, card);
        }
    }
}
class SelfPlayer {
    constructor(id, name, deck, db) {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.id = id;
        this.name = name;
        this.db = db;
        this.library = new CardStash(deck);
        this.library.shuffle();
        this.hand = new CardBag([]);
        this.table = new CardBag([]);
        this.graveyard = new CardStash([]);
        this.db.put('graveyards', this.id, this.graveyard.toDto());
        this.lifes = 20;
        this.db.put('lifes', this.id, this.lifes);
        this.color = 'hsl(' + (Math.floor(Math.random() * 72) * 5) + ',90%,40%)';
    }
    subscribeForUpdate(arg0) {
        this.subject.subscribe(arg0);
    }
    makeColored(tc, tr) {
        return {
            color: this.color,
            tc: tc,
            tr: tr
        };
    }
    drawCard() {
        let c = this.library.draw();
        if (!c) {
            this.sendNotification('kann nicht ziehen');
            return;
        }
        this.hand.add(c);
        this.sendNotification('zieht eine Karte');
        this.subject.next();
    }
    changeLifeCount(diff) {
        this.lifes += diff;
        this.db.put('lifes', this.id, this.lifes);
        if (diff > 0) {
            this.sendNotification('erhöht Lebenspunkte um ' + diff + ' auf ' + this.lifes);
        }
        else {
            this.sendNotification('verringert Lebenspunkte um ' + -diff + ' auf ' + this.lifes);
        }
        this.subject.next();
    }
    putToGraveyard(cardId) {
        let coll = this.getContainingCollection(cardId);
        let card = this.removeFromCollection(coll, cardId);
        card.untap();
        this.graveyard.add(card);
        this.db.put('graveyards', this.id, this.graveyard.toDto());
        this.sendNotification('legt ' + card.name + ' auf Friedhof');
        this.subject.next();
    }
    putIntoPlay(cardId) {
        let coll = this.getContainingCollection(cardId);
        let card = this.removeFromCollection(coll, cardId);
        this.addToTable(card);
        this.sendNotification('spielt ' + card.name + ' aus');
        this.subject.next();
    }
    putIntoPlayTapped(cardId) {
        let collData = this.getContainingCollection(cardId);
        let card = this.removeFromCollection(collData, cardId);
        card.tap();
        this.addToTable(card);
        this.sendNotification('spielt ' + card.name + ' getappt aus');
        this.subject.next();
    }
    removeFromCollection(collData, cardId) {
        let card = collData.obj.remove(cardId);
        if (collData.countOnly) {
            this.db.put(collData.name, this.id, collData.obj.size);
        }
        else {
            this.db.put(collData.name, this.id, collData.obj.toDto());
        }
        return card;
    }
    addToTable(card) {
        this.table.add(card);
        this.db.put('tables', this.id, this.table.toDto());
        this.subject.next();
    }
    getContainingCollection(cardId) {
        if (this.hand.contains(cardId)) {
            return { obj: this.hand, name: 'handSizes', countOnly: true };
        }
        if (this.table.contains(cardId)) {
            return { obj: this.table, name: 'tables', countOnly: false };
        }
        if (this.graveyard.contains(cardId)) {
            return { obj: this.graveyard, name: 'graveyards', countOnly: false };
        }
        if (this.library.contains(cardId)) {
            return { obj: this.library, name: 'librarySizes', countOnly: true };
        }
        return null;
    }
    tap(cardId) {
        let card = this.table.getById(cardId);
        if (!card) {
            return;
        }
        card.tap();
        this.db.put('tables', this.id, this.table.toDto());
        this.sendNotification('tappt ' + card.name);
        this.subject.next();
    }
    untap(cardId) {
        let card = this.table.getById(cardId);
        if (!card) {
            return;
        }
        card.untap();
        this.db.put('tables', this.id, this.table.toDto());
        this.sendNotification('enttappt ' + card.name);
        this.subject.next();
    }
    sendNotification(msg) {
        this.db.add('messages', this.makeColored(new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }) + ' ' + this.name + ' ' + msg, ''));
    }
}
class OtherPlayer {
    constructor(id, db) {
        this.id = id;
        this.db = db;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    get name() {
        return this.db.get('playerNames', this.id);
    }
    get lifes() {
        return this.db.get('lifes', this.id);
    }
    get graveyard() {
        return this.getCardStash('graveyards');
    }
    get table() {
        return this.getCardStash('tables');
    }
    getCardStash(stashId) {
        let g = this.db.get(stashId, this.id);
        if (!g) {
            g = [];
        }
        return new CardStash(g.map(x => cardFromDto(x)));
    }
    notifyUpdate() {
        console.log('notify update ' + this.id);
        this.subject.next();
    }
    subscribeForUpdate(arg0) {
        this.subject.subscribe(arg0);
    }
}
class GameField {
    constructor(peer, ownId, ownName) {
        this.others = [];
        this.db = new _distributed_database__WEBPACK_IMPORTED_MODULE_1__["DistributedDatabaseSystem"](peer, ownId);
        this.db.on('add', 'playerNames', (id, name) => this.updatePlayer(id));
        this.db.on('update', 'playerNames', (id, name) => this.updatePlayer(id));
        this.db.on('update', 'lifes', (id, cnt) => this.updatePlayer(id));
        this.db.on('update', 'graveyards', (id, cards) => this.updatePlayer(id));
        this.db.on('update', 'tables', (id, cards) => this.updatePlayer(id));
        this.myself = new SelfPlayer(ownId, ownName, window.mrnOnline.deck, this.db);
        this.db.put('playerNames', ownId, ownName);
    }
    registerMessageHandler(handler) {
        this.db.on('add', 'messages', handler);
    }
    registerPlayerChangeHandler(handler) {
        this.db.on('add', 'currentPlayer', handler);
        this.db.on('update', 'currentPlayer', handler);
    }
    connectToOtherPlayer(id) {
        this.db.connectToNode(id);
        this.others.push(new OtherPlayer(id, this.db));
        //this.updatePlayers();
    }
    addOtherPlayer(conn) {
        this.db.addNode(conn);
        this.others.push(new OtherPlayer(conn.peer, this.db));
        //this.updatePlayers();
    }
    get currentPlayerName() {
        return this.db.get('currentPlayer', 'name');
    }
    shuffleStartPlayer() {
        let idx = Math.floor(Math.random() * (this.others.length + 1));
        if (idx === 0) {
            this.setCurrentPlayer(this.myself.name);
        }
        else {
            this.setCurrentPlayer(this.others[idx - 1].name);
        }
    }
    nextPlayer() {
        if (this.others.length === 0) {
            this.setCurrentPlayer(this.myself.name);
        }
        else {
            this.setCurrentPlayer(this.others[0].name);
        }
    }
    setCurrentPlayer(name) {
        this.db.put('currentPlayer', 'name', name);
        this.sendMessageRaw({ color: 'black', tc: name + ' ist am Zug', tr: '' });
    }
    updatePlayer(id) {
        var _a;
        (_a = this.others.find(p => p.id === id)) === null || _a === void 0 ? void 0 : _a.notifyUpdate();
    }
    sendMessage(msg) {
        this.sendMessageRaw(this.myself.makeColored(new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }) + ' ' + this.myself.name, msg));
    }
    sendMessageRaw(msg) {
        this.db.add('messages', msg);
    }
    drawCard() {
        this.myself.drawCard();
    }
    increaseLifes() {
        this.myself.changeLifeCount(1);
    }
    decreaseLifes() {
        this.myself.changeLifeCount(-1);
    }
    putToGraveyard(cardId) {
        this.myself.putToGraveyard(cardId);
    }
    tap(cardId) {
        this.myself.tap(cardId);
    }
    untap(cardId) {
        this.myself.untap(cardId);
    }
    putIntoPlay(cardId) {
        this.myself.putIntoPlay(cardId);
    }
    putIntoPlayTapped(cardId) {
        this.myself.putIntoPlayTapped(cardId);
    }
}



/***/ }),

/***/ "DBil":
/*!**************************************************************!*\
  !*** ./src/app/card-collection/card-collection.component.ts ***!
  \**************************************************************/
/*! exports provided: CardCollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardCollectionComponent", function() { return CardCollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card/card.component */ "mJ8H");




function CardCollectionComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.cardString(), " ");
} }
function CardCollectionComponent_ng_container_4_mrn_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mrn-card", 3);
} if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", c_r4)("act", ctx_r2.act);
} }
function CardCollectionComponent_ng_container_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function CardCollectionComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardCollectionComponent_ng_container_4_mrn_card_2_Template, 1, 2, "mrn-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardCollectionComponent_ng_container_4_ng_container_3_Template, 3, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.collection);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.collection.size === 0);
} }
class CardCollectionComponent {
    constructor() {
        this.name = 'coll';
        this.act = '';
        this.collapsed = false;
    }
    ngOnInit() {
    }
    cardString() {
        let counts = new Map();
        this.collection.cards.forEach(c => {
            if (counts.has(c.name)) {
                counts.set(c.name, counts.get(c.name) + 1);
            }
            else {
                counts.set(c.name, 1);
            }
        });
        let names = [];
        this.collection.cards.forEach(c => {
            if (names.indexOf(c.name) < 0) {
                names.push(c.name);
            }
        });
        return names
            .map(n => {
            if (counts.get(n) > 1) {
                return n + ' (x' + counts.get(n) + ')';
            }
            else {
                return n;
            }
        })
            .join(", ");
    }
}
CardCollectionComponent.ɵfac = function CardCollectionComponent_Factory(t) { return new (t || CardCollectionComponent)(); };
CardCollectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardCollectionComponent, selectors: [["mrn-card-collection"]], inputs: { name: "name", collection: "collection", act: "act", collapsed: "collapsed" }, decls: 5, vars: 4, consts: [[3, "click"], [4, "ngIf"], [3, "card", "act", 4, "ngFor", "ngForOf"], [3, "card", "act"]], template: function CardCollectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardCollectionComponent_Template_span_click_1_listener() { return ctx.collapsed = !ctx.collapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardCollectionComponent_ng_container_3_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardCollectionComponent_ng_container_4_Template, 4, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.name, ": ", ctx.collection.size, " Karten.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.collapsed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLWNvbGxlY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardCollectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mrn-card-collection',
                templateUrl: './card-collection.component.html',
                styleUrls: ['./card-collection.component.scss']
            }]
    }], function () { return []; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], collection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], act: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], collapsed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "JjPw":
/*!************************************************!*\
  !*** ./src/app/domain/distributed-database.ts ***!
  \************************************************/
/*! exports provided: DistributedDatabaseSystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributedDatabaseSystem", function() { return DistributedDatabaseSystem; });
class Database {
    constructor() {
        this.times = {};
        this.data = {};
    }
    put(time, id, data) {
        if (id in this.times) {
            let lastTime = this.times[id];
            if (lastTime < time) {
                this.times[id] = time;
                this.data[id] = data;
                return 'update';
            }
            else {
                return 'ignore';
            }
        }
        else {
            this.times[id] = time;
            this.data[id] = data;
            return 'add';
        }
    }
    get(id) {
        return this.data[id];
    }
    dumpEntries(conn, databaseName, sender, knownReceivers) {
        let _this = this;
        Object.keys(this.times).forEach(function (id) {
            let packet = {
                src: sender,
                t: _this.times[id],
                rcv: knownReceivers,
                db: databaseName,
                id: id,
                dta: _this.data[id]
            };
            conn.send(packet);
            console.log('dump ' + JSON.stringify(packet) + ' to ' + conn.peer);
        });
    }
}
class DistributedDatabaseSystem {
    constructor(peer, ownName) {
        this.peer = peer;
        this.ownName = ownName;
        this.time = 0;
        this.otherNames = [];
        this.others = [];
        this.callbacks = { add: {}, update: {}, ignore: {} };
        this.databases = {};
    }
    connectToNode(id) {
        var conn = this.peer.connect(id, { reliable: true });
        this.addNode(conn);
    }
    addNode(conn) {
        this.otherNames.push(conn.peer);
        this.others.push(conn);
        var _this = this;
        conn.on('data', function (d) {
            _this.handleData(d);
        });
        conn.on('open', function (d) {
            _this.dumpDatabasesTo(conn);
        });
    }
    dumpDatabasesTo(conn) {
        for (let [name, db] of Object.entries(this.databases)) {
            db.dumpEntries(conn, name, this.ownName, this.otherNames);
        }
    }
    handleData(d) {
        console.log('received: ' + JSON.stringify(d));
        this.time = Math.max(this.time, d.t);
        this.ensureDbExists(d.db);
        let eventType = this.databases[d.db].put(d.t, d.id, d.dta);
        if (this.callbacks[eventType][d.db]) {
            this.callbacks[eventType][d.db](d.id, d.dta);
        }
        if (eventType != 'ignore') {
            this.forwardToFurtherReceivers(d);
        }
        this.establishConnectionToUnknownNodes(d);
    }
    ensureDbExists(dbName) {
        if (!this.databases[dbName]) {
            this.databases[dbName] = new Database();
        }
    }
    forwardToFurtherReceivers(packet) {
        let furtherReceivers = [];
        let existingSet = new Set(packet.rcv);
        existingSet.add(this.ownName);
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
        let _this = this;
        let nameSet = new Set(this.otherNames);
        nameSet.add(this.ownName);
        packet.rcv.filter((x) => !nameSet.has(x)).forEach(function (x) {
            _this.connectToNode(x);
        });
        if (!nameSet.has(packet.src)) {
            this.connectToNode(packet.src);
        }
    }
    add(listDb, data) {
        this.put(listDb, this.ownName + this.time, data);
    }
    put(database, id, data) {
        var packet = {
            src: this.ownName,
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
    get(database, id) {
        if (!this.databases[database]) {
            return undefined;
        }
        return this.databases[database].get(id);
    }
    on(eventType, database, action) {
        this.callbacks[eventType][database] = action;
    }
}


/***/ }),

/***/ "OGS3":
/*!********************************************************!*\
  !*** ./src/app/other-player/other-player.component.ts ***!
  \********************************************************/
/*! exports provided: OtherPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherPlayerComponent", function() { return OtherPlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _game_field_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game-field-store.service */ "c3lu");
/* harmony import */ var _card_collection_card_collection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card-collection/card-collection.component */ "DBil");




class OtherPlayerComponent {
    constructor(field, cdr) {
        this.field = field;
        this.cdr = cdr;
    }
    ngOnInit() {
        this.me.subscribeForUpdate(() => this.cdr.detectChanges());
    }
    get name() {
        return this.me.name;
    }
    get id() {
        return this.me.id;
    }
    get lifes() {
        return this.me.lifes;
    }
    get table() {
        return this.me.table;
    }
    get graveyard() {
        return this.me.graveyard;
    }
    isCurrentPlayer() {
        return this.field.gameField.currentPlayerName === this.me.name;
    }
}
OtherPlayerComponent.ɵfac = function OtherPlayerComponent_Factory(t) { return new (t || OtherPlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_field_store_service__WEBPACK_IMPORTED_MODULE_1__["GameFieldStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
OtherPlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OtherPlayerComponent, selectors: [["mrn-other-player"]], inputs: { me: "me" }, decls: 7, vars: 8, consts: [["name", "Ausgelegt", 3, "collection"], ["name", "Friedhof", 3, "collection", "collapsed"]], template: function OtherPlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mrn-card-collection", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mrn-card-collection", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("turn", ctx.isCurrentPlayer());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.name, " (", ctx.id, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lifes, " Lebenspunkte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collection", ctx.table);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collection", ctx.graveyard)("collapsed", true);
    } }, directives: [_card_collection_card_collection_component__WEBPACK_IMPORTED_MODULE_2__["CardCollectionComponent"]], styles: ["legend.turn[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL290aGVyLXBsYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUFDSiIsImZpbGUiOiJvdGhlci1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsZWdlbmQudHVybiB7XG4gICAgY29sb3I6IHJlZDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtherPlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mrn-other-player',
                templateUrl: './other-player.component.html',
                styleUrls: ['./other-player.component.scss']
            }]
    }], function () { return [{ type: _game_field_store_service__WEBPACK_IMPORTED_MODULE_1__["GameFieldStoreService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { me: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _domain_game_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domain/game-field */ "BuRQ");
/* harmony import */ var _game_field_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-field-store.service */ "c3lu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _self_player_self_player_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./self-player/self-player.component */ "3Hr+");
/* harmony import */ var _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-box/chat-box.component */ "8Yrd");
/* harmony import */ var _other_player_other_player_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./other-player/other-player.component */ "OGS3");








function AppComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.start(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Start ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AppComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.waitForOthers(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Neues Spiel starten");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.join(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Existierendem Spiel beitreten ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AppComponent_ng_container_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_2_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.fieldService.gameField.shuffleStartPlayer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zuf\u00E4lligen Startspieler w\u00E4hlen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_container_2_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_2_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.fieldService.gameField.nextPlayer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zug beenden");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_container_2_mrn_other_player_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mrn-other-player", 4);
} if (rf & 2) {
    const p_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("me", p_r15);
} }
function AppComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_2_button_1_Template, 2, 0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ng_container_2_button_2_Template, 2, 0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mrn-self-player");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.dice(6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "W\u00FCrfel 6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_2_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.dice(10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "W\u00FCrfel 10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_2_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.dice(20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "W\u00FCrfel 20");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_ng_container_2_mrn_other_player_10_Template, 1, 1, "mrn-other-player", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mrn-chat-box");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.fieldService.gameField.currentPlayerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isOwnTurn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.otherPlayers);
} }
class AppComponent {
    constructor(fieldService, cdr) {
        this.fieldService = fieldService;
        this.title = 'mrnOnline';
        this.state = 'initial';
        fieldService.subscribe(f => f.registerPlayerChangeHandler(() => { console.log('hallo'); cdr.detectChanges(); }));
    }
    createPeer(name) {
        if (window.mrnOnline.gameField) {
            return;
        }
        //var peer = new Peer(undefined, {host: 'localhost', port: 9000, key: 'peerjs', debug: 2});
        var peer = new Peer(undefined, {});
        peer.on('error', (err) => {
            console.log(err);
            alert('' + err);
        });
        peer.on('open', (id) => {
            //alert('My peer ID is: ' + id);
            window.mrnOnline.gameField = new _domain_game_field__WEBPACK_IMPORTED_MODULE_1__["GameField"](peer, id, name);
            this.fieldService.init(window.mrnOnline.gameField);
            this.state = 'started';
        });
        peer.on('connection', (conn) => {
            //alert('Got connection ' + conn);
            window.mrnOnline.gameField.addOtherPlayer(conn);
        });
    }
    start() {
        this.mapDecksAndCards();
        let def = localStorage.getItem('mrnUserName');
        let name = prompt('Name', def !== null ? def : undefined);
        if (name) {
            localStorage.setItem('mrnUserName', name);
            this.createPeer(name);
        }
    }
    mapDecksAndCards() {
        let mi = {
            cards: [],
            deck: [],
            gameField: undefined
        };
        window.mrnOnline = mi;
        for (let i = 0; i < window.mrnData.cards.length; i++) {
            let card = window.mrnData.cards[i];
            window.mrnOnline.cards[card.name] = new _domain_game_field__WEBPACK_IMPORTED_MODULE_1__["CardType"](card.name, card.img);
        }
        let d = window.mrnData.decks[0].cards;
        window.mrnOnline.deck = [];
        for (let i = 0; i < d.length; i++) {
            let card = d[i];
            window.mrnOnline.deck.push(new _domain_game_field__WEBPACK_IMPORTED_MODULE_1__["Card"](window.mrnOnline.cards[card]));
        }
    }
    join() {
        var other = prompt('ID des Mitspielers');
        if (other) {
            window.mrnOnline.gameField.connectToOtherPlayer(other);
            this.state = 'joined';
        }
    }
    waitForOthers() {
        this.state = 'joined';
    }
    dice(sides) {
        let n = Math.floor(Math.random() * sides) + 1;
        this.fieldService.gameField.myself.sendNotification('würfelt ' + n + ' (von ' + sides + ')');
    }
    isOwnTurn() {
        return this.fieldService.gameField.currentPlayerName === this.fieldService.gameField.myself.name;
    }
    get otherPlayers() {
        return this.fieldService.gameField.others;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_field_store_service__WEBPACK_IMPORTED_MODULE_2__["GameFieldStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 3, consts: [[4, "ngIf"], [3, "click"], [3, "click", 4, "ngIf"], [3, "me", 4, "ngFor", "ngForOf"], [3, "me"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_ng_container_0_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_1_Template, 5, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ng_container_2_Template, 12, 3, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state === "initial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state === "started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state === "joined");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _self_player_self_player_component__WEBPACK_IMPORTED_MODULE_4__["SelfPlayerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_5__["ChatBoxComponent"], _other_player_other_player_component__WEBPACK_IMPORTED_MODULE_6__["OtherPlayerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _game_field_store_service__WEBPACK_IMPORTED_MODULE_2__["GameFieldStoreService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat-box/chat-box.component */ "8Yrd");
/* harmony import */ var _self_player_self_player_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./self-player/self-player.component */ "3Hr+");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card/card.component */ "mJ8H");
/* harmony import */ var _other_player_other_player_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./other-player/other-player.component */ "OGS3");
/* harmony import */ var _card_collection_card_collection_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card-collection/card-collection.component */ "DBil");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_4__["ChatBoxComponent"],
        _self_player_self_player_component__WEBPACK_IMPORTED_MODULE_5__["SelfPlayerComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"],
        _other_player_other_player_component__WEBPACK_IMPORTED_MODULE_7__["OtherPlayerComponent"],
        _card_collection_card_collection_component__WEBPACK_IMPORTED_MODULE_8__["CardCollectionComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_4__["ChatBoxComponent"],
                    _self_player_self_player_component__WEBPACK_IMPORTED_MODULE_5__["SelfPlayerComponent"],
                    _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"],
                    _other_player_other_player_component__WEBPACK_IMPORTED_MODULE_7__["OtherPlayerComponent"],
                    _card_collection_card_collection_component__WEBPACK_IMPORTED_MODULE_8__["CardCollectionComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "c3lu":
/*!*********************************************!*\
  !*** ./src/app/game-field-store.service.ts ***!
  \*********************************************/
/*! exports provided: GameFieldStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameFieldStoreService", function() { return GameFieldStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class GameFieldStoreService {
    constructor() {
        this.store = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
    }
    get gameField() {
        return this.store.getValue();
    }
    init(f) {
        this.store.next(f);
    }
    subscribe(handler) {
        this.store.subscribe(x => {
            if (x) {
                handler(x);
            }
        });
    }
}
GameFieldStoreService.ɵfac = function GameFieldStoreService_Factory(t) { return new (t || GameFieldStoreService)(); };
GameFieldStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameFieldStoreService, factory: GameFieldStoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameFieldStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mJ8H":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _game_field_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game-field-store.service */ "c3lu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CardComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.gameField.tap(ctx_r5.card.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tappen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.gameField.untap(ctx_r7.card.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "enttappen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.gameField.putIntoPlay(ctx_r9.card.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ins Spiel bringen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_a_6_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.gameField.putIntoPlayTapped(ctx_r11.card.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "getappt ins Spiel bringen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.gameField.putToGraveyard(ctx_r13.card.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "auf Friedhof legen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CardComponent {
    constructor(field) {
        this.field = field;
        this.act = '';
        this.large = false;
    }
    ngOnInit() {
    }
    get gameField() {
        return this.field.gameField;
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_field_store_service__WEBPACK_IMPORTED_MODULE_1__["GameFieldStoreService"])); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["mrn-card"]], inputs: { card: "card", act: "act" }, decls: 8, vars: 10, consts: [[1, "dropdown"], [1, "card", 3, "src", "click"], [1, "dropdown-content"], [3, "click", 4, "ngIf"], [3, "click"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_img_click_1_listener() { return ctx.large = !ctx.large; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardComponent_a_3_Template, 2, 0, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardComponent_a_4_Template, 2, 0, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardComponent_a_5_Template, 2, 0, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardComponent_a_6_Template, 2, 0, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CardComponent_a_7_Template, 2, 0, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tapped", ctx.card.tapped)("large", ctx.large);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.card.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.act.includes("TA") && !ctx.card.tapped);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.act.includes("UT") && ctx.card.tapped);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.act.includes("PL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.act.includes("PT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.act.includes("GR"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".tapped[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n\nimg.card[_ngcontent-%COMP%] {\n  width: 120px;\n}\n\nimg.card.large[_ngcontent-%COMP%] {\n  width: 240px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKIiwiZmlsZSI6ImNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFwcGVkIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbmltZy5jYXJkIHtcbiAgICB3aWR0aDogMTIwcHg7XG59XG5cbmltZy5jYXJkLmxhcmdlIHtcbiAgICB3aWR0aDogMjQwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mrn-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss']
            }]
    }], function () { return [{ type: _game_field_store_service__WEBPACK_IMPORTED_MODULE_1__["GameFieldStoreService"] }]; }, { card: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], act: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map