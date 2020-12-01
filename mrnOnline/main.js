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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _game_field_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game-field-store.service */ "c3lu");
/* harmony import */ var _modal_card_collection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal-card-collection.service */ "F95V");
/* harmony import */ var _card_collection_card_collection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../card-collection/card-collection.component */ "DBil");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function SelfPlayerComponent_mrn_card_collection_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mrn-card-collection", 6);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collection", ctx_r0.exile)("act", "GR")("collapsed", true);
} }
class SelfPlayerComponent {
    constructor(field, cdr, mcc) {
        this.field = field;
        this.cdr = cdr;
        this.mcc = mcc;
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        field.subscribe((f) => f.myself.subscribeForUpdate(() => cdr.markForCheck()), this.destroy);
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.destroy.next();
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
    get exile() {
        return this.field.gameField.myself.exile;
    }
    untapAll() {
        this.field.gameField.myself.untapAll();
    }
    drawCard() {
        this.field.gameField.myself.drawCard();
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
    openLibrary() {
        this.gameField.myself.sendNotification('öffnet die Bibliothek');
        let subscr = this.mcc.closed.subscribe(() => {
            this.gameField.myself.sendNotification('schließt die Bibliothek');
            subscr.unsubscribe();
        });
        this.mcc.show(this.gameField.myself.library, 'Bibliothek', 'DR,PL,PT,GR');
    }
    shuffleLibrary() {
        this.gameField.myself.shuffleLibrary();
    }
    createToken() {
        let lastName = localStorage.getItem('lastTokenName');
        let name = prompt('Name', lastName ? lastName : undefined);
        if (name) {
            localStorage.setItem('lastTokenName', name);
            this.gameField.myself.createToken(name);
        }
    }
}
SelfPlayerComponent.ɵfac = function SelfPlayerComponent_Factory(t) { return new (t || SelfPlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_field_store_service__WEBPACK_IMPORTED_MODULE_2__["GameFieldStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modal_card_collection_service__WEBPACK_IMPORTED_MODULE_3__["ModalCardCollectionService"])); };
SelfPlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelfPlayerComponent, selectors: [["mrn-self-player"]], decls: 31, vars: 15, consts: [[3, "id"], ["name", "Hand", 3, "collection", "act"], ["name", "Ausgelegt", 3, "collection", "act"], [3, "click"], ["name", "Friedhof", 3, "collection", "act", "collapsed"], ["name", "Aus dem Spiel", 3, "collection", "act", "collapsed", 4, "ngIf"], ["name", "Aus dem Spiel", 3, "collection", "act", "collapsed"]], template: function SelfPlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mrn-card-collection", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mrn-card-collection", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelfPlayerComponent_Template_button_click_7_listener() { return ctx.untapAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Alles enttappen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelfPlayerComponent_Template_button_click_11_listener() { return ctx.drawCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Karte ziehen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelfPlayerComponent_Template_button_click_13_listener() { return ctx.openLibrary(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Bibliothek \u00F6ffnen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelfPlayerComponent_Template_button_click_15_listener() { return ctx.shuffleLibrary(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Bibliothek mischen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelfPlayerComponent_Template_button_click_17_listener() { return ctx.createToken(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Token erstellen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mrn-card-collection", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SelfPlayerComponent_mrn_card_collection_20_Template, 1, 3, "mrn-card-collection", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelfPlayerComponent_Template_button_click_23_listener() { return ctx.increaseLifes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelfPlayerComponent_Template_button_click_25_listener() { return ctx.decreaseLifes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelfPlayerComponent_Template_button_click_27_listener() { return ctx.multiLifeIncrease(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "+X ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelfPlayerComponent_Template_button_click_29_listener() { return ctx.multiLifeDecrease(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "-X ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("turn", ctx.isCurrentPlayer());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (ID: ", ctx.id, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collection", ctx.hand)("act", "PL,PT,GR,EX,LI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collection", ctx.table)("act", "TA,UT,BL,GR,EX,HA,MO,CO,LI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Bibliothek: ", ctx.librarySize(), " Karten. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collection", ctx.graveyard)("act", "PL,PT,HA,EX,LI")("collapsed", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.exile.size > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Lebenspunkte: ", ctx.lifes, " ");
    } }, directives: [_card_collection_card_collection_component__WEBPACK_IMPORTED_MODULE_4__["CardCollectionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["legend.turn[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlbGYtcGxheWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKIiwiZmlsZSI6InNlbGYtcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGVnZW5kLnR1cm4ge1xuICAgIGNvbG9yOiByZWQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelfPlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mrn-self-player',
                templateUrl: './self-player.component.html',
                styleUrls: ['./self-player.component.scss']
            }]
    }], function () { return [{ type: _game_field_store_service__WEBPACK_IMPORTED_MODULE_2__["GameFieldStoreService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _modal_card_collection_service__WEBPACK_IMPORTED_MODULE_3__["ModalCardCollectionService"] }]; }, null); })();


/***/ }),

/***/ "7u39":
/*!**************************************************************************!*\
  !*** ./src/app/modal-card-collection/modal-card-collection.component.ts ***!
  \**************************************************************************/
/*! exports provided: ModalCardCollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCardCollectionComponent", function() { return ModalCardCollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modal_card_collection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-card-collection.service */ "F95V");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_collection_card_collection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card-collection/card-collection.component */ "DBil");





function ModalCardCollectionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalCardCollectionComponent_div_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Schlie\u00DFen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mrn-card-collection", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r0.service.name)("collection", ctx_r0.service.collection)("act", ctx_r0.service.act);
} }
class ModalCardCollectionComponent {
    constructor(service) {
        this.service = service;
        service;
    }
    ngOnInit() {
    }
    hide() {
        this.service.isShown = false;
        this.service.closed.next();
    }
}
ModalCardCollectionComponent.ɵfac = function ModalCardCollectionComponent_Factory(t) { return new (t || ModalCardCollectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modal_card_collection_service__WEBPACK_IMPORTED_MODULE_1__["ModalCardCollectionService"])); };
ModalCardCollectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalCardCollectionComponent, selectors: [["mrn-modal-card-collection"]], decls: 1, vars: 1, consts: [["class", "glass-pane", 4, "ngIf"], [1, "glass-pane"], [3, "click"], [3, "name", "collection", "act"]], template: function ModalCardCollectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModalCardCollectionComponent_div_0_Template, 4, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.isShown);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _card_collection_card_collection_component__WEBPACK_IMPORTED_MODULE_3__["CardCollectionComponent"]], styles: ["div.glass-pane[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n  position: fixed;\n  top: 0;\n  left: 0;\n  margin: 0;\n  padding: 0;\n  background: rgba(1, 1, 1, 0.6);\n  overflow: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21vZGFsLWNhcmQtY29sbGVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6Im1vZGFsLWNhcmQtY29sbGVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5nbGFzcy1wYW5lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMTA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMSwgMSwgMSwgMC42KTtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalCardCollectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mrn-modal-card-collection',
                templateUrl: './modal-card-collection.component.html',
                styleUrls: ['./modal-card-collection.component.scss']
            }]
    }], function () { return [{ type: _modal_card_collection_service__WEBPACK_IMPORTED_MODULE_1__["ModalCardCollectionService"] }]; }, null); })();


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _game_field_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game-field-store.service */ "c3lu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





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
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        field.subscribe(gf => gf.registerMessageHandler((id, msg) => this.handleAddedMessage(msg)), this.destroy);
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.destroy.next();
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
            this.field.gameField.sendMessage(message);
        }
    }
}
ChatBoxComponent.ɵfac = function ChatBoxComponent_Factory(t) { return new (t || ChatBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_field_store_service__WEBPACK_IMPORTED_MODULE_2__["GameFieldStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["div.chatbox[_ngcontent-%COMP%] {\n  overflow: scroll;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NoYXQtYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoiY2hhdC1ib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY2hhdGJveCB7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mrn-chat-box',
                templateUrl: './chat-box.component.html',
                styleUrls: ['./chat-box.component.scss']
            }]
    }], function () { return [{ type: _game_field_store_service__WEBPACK_IMPORTED_MODULE_2__["GameFieldStoreService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "9Lk1":
/*!*********************************************!*\
  !*** ./src/app/card-action-mode.service.ts ***!
  \*********************************************/
/*! exports provided: CardActionModeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardActionModeService", function() { return CardActionModeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




class CardActionModeService {
    constructor() {
        this.savedCardId = undefined;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    selectForModify(cardId) {
        this.savedCardId = cardId;
        this.subject.next();
    }
    normalMode() {
        this.savedCardId = undefined;
        this.subject.next();
    }
    get savedId() {
        return this.savedCardId;
    }
    get isModifyMode() {
        return typeof this.savedCardId !== 'undefined';
    }
    subscribe(handler, destroy) {
        this.subject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(destroy)).subscribe(handler);
    }
}
CardActionModeService.ɵfac = function CardActionModeService_Factory(t) { return new (t || CardActionModeService)(); };
CardActionModeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CardActionModeService, factory: CardActionModeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardActionModeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _distributed_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./distributed-database */ "JjPw");



class CardType {
    constructor(name, img, token) {
        this.name = name;
        if (token) {
            this.token = true;
        }
        else {
            this.token = false;
        }
        if (img) {
            this.img = img;
        }
        else {
            this.img = 'data:image/svg+xml;base64,' + btoa(this.createSvg(name.replace(/[^a-zA-Z0-9 ]/, '')));
        }
    }
    createSvg(title) {
        return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 334"><rect x="5" y="5" width="230" height="324" fill="gray" /><text x="20" y="35">' + title + '</text></svg>';
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
var CardState;
(function (CardState) {
    CardState[CardState["Normal"] = 0] = "Normal";
    CardState[CardState["Blocker"] = 1] = "Blocker";
    CardState[CardState["Tapped"] = 2] = "Tapped";
})(CardState || (CardState = {}));
class Card {
    constructor(type, controllerId, id, tapped, mods, counter) {
        this.state = CardState.Normal;
        this.type = type;
        this.controllerId = controllerId;
        if (typeof id === 'undefined') {
            this.id = Math.floor(Math.random() * 10000) * 1000 + cardCnt++;
        }
        else {
            this.id = id;
        }
        if (typeof tapped === 'undefined') {
            this.state = CardState.Normal;
        }
        else {
            this.state = tapped ? CardState.Tapped : CardState.Normal;
        }
        if (typeof mods === 'undefined') {
            this.mods = [];
        }
        else {
            this.mods = mods;
        }
        this.counter = counter;
    }
    get tapped() {
        return this.state === CardState.Tapped;
    }
    get normal() {
        return this.state === CardState.Normal;
    }
    get markedAsBlocker() {
        return this.state === CardState.Blocker;
    }
    tap() {
        this.state = CardState.Tapped;
    }
    markAsBlocker() {
        if (this.state === CardState.Normal) {
            this.state = CardState.Blocker;
        }
    }
    untap() {
        this.state = CardState.Normal;
    }
    modifyWith(c) {
        this.mods.push(c);
    }
    clearModifiers() {
        this.mods = [];
    }
    isModifiedBy(cardId) {
        for (let i = 0; i < this.mods.length; i++) {
            if (this.mods[i].id === cardId) {
                return true;
            }
        }
        return false;
    }
    removeModifier(cardId) {
        for (let i = 0; i < this.mods.length; i++) {
            if (this.mods[i].id === cardId) {
                let card = this.mods[i];
                this.mods.splice(i, 1);
                return card;
            }
        }
        return null;
    }
    get name() {
        return this.type.name;
    }
    get img() {
        return this.type.img;
    }
    get isModified() {
        return this.mods.length > 0;
    }
    get reversedModifiers() {
        return this.mods.slice().reverse();
    }
    get modifiers() {
        return this.mods;
    }
    toDto() {
        return {
            id: this.id,
            cntr: this.controllerId,
            type: this.type.toDto(),
            tapped: this.tapped,
            mods: this.mods.map(x => x.toDto()),
            counter: this.counter
        };
    }
}
function cardFromDto(dto) {
    return new Card(cardTypeFromDto(dto.type), dto.cntr, dto.id, dto.tapped, dto.mods.map(cardFromDto), dto.counter);
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
        this.cards.unshift(card);
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
        this.db.put('librarySizes', this.id, this.library.size);
        this.hand = new CardBag([]);
        this.table = new CardBag([]);
        this.graveyard = new CardStash([]);
        this.db.put('graveyards', this.id, this.graveyard.toDto());
        this.exile = new CardBag([]);
        this.db.put('exiles', this.id, this.exile.toDto());
        this.lifes = 20;
        this.db.put('lifes', this.id, this.lifes);
        this.color = 'hsl(' + (Math.floor(Math.random() * 72) * 5) + ',90%,40%)';
        this.orderNumber = Math.random();
        this.db.on('receiveCommand', 'putToGraveyard', (cardDto) => this.addToGraveyard(cardFromDto(cardDto)));
        this.db.on('receiveCommand', 'modifyCard', (x) => this.modifyWithOthersCard(x.tgt, cardFromDto(x.card)));
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
    untapAll() {
        this.table.cards.forEach(c => {
            if (!c.normal) {
                this.untap(c.id);
            }
        });
    }
    drawCard(cardId) {
        let c;
        if (cardId) {
            let coll = this.getContainingCollection(cardId);
            c = this.removeFromCollection(coll, cardId);
        }
        else {
            c = this.library.draw();
        }
        this.db.put('librarySizes', this.id, this.library.size);
        if (!c) {
            this.sendNotification('kann nicht ziehen');
            return;
        }
        this.addToHand(c);
        this.sendNotification('zieht eine Karte');
        this.subject.next();
    }
    shuffleLibrary() {
        this.sendNotification('mischt die Bibliothek');
        this.library.shuffle();
    }
    addToHand(c) {
        this.hand.add(c);
        this.db.put('handSizes', this.id, this.hand.size);
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
        this.addToGraveyard(card);
        this.subject.next();
    }
    addToGraveyard(card) {
        if (card.type.token) {
            this.sendNotification('Token ' + card.name + ' verschwindet');
            return;
        }
        card.untap();
        if (this.id === card.controllerId) {
            this.graveyard.add(card);
            this.db.put('graveyards', this.id, this.graveyard.toDto());
            this.sendNotification('legt ' + card.name + ' auf Friedhof');
        }
        else {
            this.db.sendCommandTo(card.controllerId, 'putToGraveyard', card.toDto());
        }
    }
    putToExile(cardId) {
        let coll = this.getContainingCollection(cardId);
        let card = this.removeFromCollection(coll, cardId);
        if (card.type.token) {
            this.sendNotification('Token ' + card.name + ' verschwindet');
            return;
        }
        card.untap();
        this.exile.add(card);
        this.db.put('exiles', this.id, this.exile.toDto());
        this.sendNotification('nimmt ' + card.name + ' ganz aus dem Spiel');
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
    putToHand(cardId) {
        let coll = this.getContainingCollection(cardId);
        let card = this.removeFromCollection(coll, cardId);
        card.untap();
        this.addToHand(card);
        this.sendNotification('nimmt ' + card.name + ' auf die Hand');
        this.subject.next();
    }
    putOnLibrary(cardId) {
        let coll = this.getContainingCollection(cardId);
        let card = this.removeFromCollection(coll, cardId);
        card.untap();
        this.library.add(card);
        this.db.put('librarySizes', this.id, this.library.size);
        if (coll === null || coll === void 0 ? void 0 : coll.countOnly) {
            this.sendNotification('legt eine Karte oben auf die Bibliothek');
        }
        else {
            this.sendNotification('legt ' + card.name + ' oben auf die Bibliothek');
        }
        this.subject.next();
    }
    modifyOwnCard(modifierCardId, toModifyCardId) {
        let toModify = this.table.getById(toModifyCardId);
        if (!toModify) {
            return;
        }
        let collData = this.getContainingCollection(modifierCardId);
        let card = this.removeFromCollection(collData, modifierCardId);
        this.applyModification(toModify, card);
    }
    setCounter(cardId, value) {
        let card = this.table.getById(cardId);
        if (!card) {
            return;
        }
        card.counter = value;
        this.db.put('tables', this.id, this.table.toDto());
        this.sendNotification('setzt Counter für ' + card.name + ' auf ' + value);
        this.subject.next();
    }
    modifyOtherPlayersCard(modifierCardId, toModifyCardId, otherPlayerId) {
        let collData = this.getContainingCollection(modifierCardId);
        let card = this.removeFromCollection(collData, modifierCardId);
        this.db.sendCommandTo(otherPlayerId, 'modifyCard', { tgt: toModifyCardId, card: card.toDto() });
    }
    modifyWithOthersCard(toModifyCardId, card) {
        let toModify = this.table.getById(toModifyCardId);
        if (!toModify) {
            return;
        }
        this.applyModification(toModify, card);
    }
    applyModification(toModify, card) {
        card.untap();
        toModify.modifyWith(card);
        this.db.put('tables', this.id, this.table.toDto());
        this.sendNotification('spielt ' + card.name + ' auf ' + toModify.name);
        this.subject.next();
    }
    removeFromCollection(collData, cardId) {
        let card;
        if (collData.nestedIn) {
            card = collData.nestedIn.removeModifier(cardId);
        }
        else {
            card = collData.obj.remove(cardId);
            this.dropModifiers(card);
        }
        if (collData.countOnly) {
            this.db.put(collData.name, this.id, collData.obj.size);
        }
        else {
            this.db.put(collData.name, this.id, collData.obj.toDto());
        }
        return card;
    }
    dropModifiers(c) {
        c.modifiers.forEach(m => this.addToGraveyard(m));
        c.clearModifiers();
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
        if (this.exile.contains(cardId)) {
            return { obj: this.exile, name: 'exiles', countOnly: false };
        }
        let nested = this.table.cards.filter(c => c.isModifiedBy(cardId));
        if (nested.length > 0) {
            return { obj: this.table, name: 'tables', countOnly: false, nestedIn: nested[0] };
        }
        return null;
    }
    hasCard(cardId) {
        return this.getContainingCollection(cardId) !== null;
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
    markAsBlocker(cardId) {
        let card = this.table.getById(cardId);
        if (!card) {
            return;
        }
        card.markAsBlocker();
        this.db.put('tables', this.id, this.table.toDto());
        this.sendNotification('markiert ' + card.name + ' als Blocker');
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
        this.db.add('messages', this.makeColored(curTime() + ' ' + this.name + ' ' + msg, ''));
    }
    createToken(name) {
        let type = new CardType(name, undefined, true);
        let card = new Card(type, this.id);
        this.addToTable(card);
    }
}
class OtherPlayer {
    constructor(id, db) {
        this.id = id;
        this.db = db;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.cachedGraveyard = new CardStash([]);
        this.cachedTable = new CardStash([]);
        db.on(['add', 'update'], 'graveyards', (playerId, content) => {
            if (playerId === this.id) {
                this.cachedGraveyard = this.map(content);
                this.notifyUpdate();
            }
        });
        db.on(['add', 'update'], 'tables', (playerId, content) => {
            if (playerId === this.id) {
                this.cachedTable = this.map(content);
                this.notifyUpdate();
            }
        });
    }
    ;
    get name() {
        var _a;
        return (_a = this.playerData) === null || _a === void 0 ? void 0 : _a.name;
    }
    get orderNumber() {
        var _a;
        return (_a = this.playerData) === null || _a === void 0 ? void 0 : _a.orderNumber;
    }
    get color() {
        var _a;
        return (_a = this.playerData) === null || _a === void 0 ? void 0 : _a.color;
    }
    get playerData() {
        return this.db.get('playerData', this.id);
    }
    get lifes() {
        return this.db.get('lifes', this.id);
    }
    get handSize() {
        return this.db.get('handSizes', this.id);
    }
    get librarySize() {
        return this.db.get('librarySizes', this.id);
    }
    get graveyard() {
        return this.cachedGraveyard;
    }
    get table() {
        return this.cachedTable;
    }
    map(data) {
        return new CardStash(data.map(x => cardFromDto(x)));
    }
    notifyUpdate() {
        console.log('notify update ' + this.id);
        this.subject.next();
    }
    subscribeForUpdate(arg0, destroy) {
        this.subject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(destroy)).subscribe(arg0);
    }
    hasCard(cardId) {
        return this.table.contains(cardId);
    }
}
class GameField {
    constructor(peer, ownId, ownName, deck) {
        this.others = [];
        this.db = new _distributed_database__WEBPACK_IMPORTED_MODULE_2__["DistributedDatabaseSystem"](peer, ownId);
        this.db.on('add', 'playerData', (id, name) => this.updatePlayer(id));
        this.db.on('update', 'playerData', (id, name) => this.updatePlayer(id));
        this.db.on('update', 'lifes', (id, cnt) => this.updatePlayer(id));
        this.db.on('update', 'graveyards', (id, cards) => this.updatePlayer(id));
        this.db.on('update', 'tables', (id, cards) => this.updatePlayer(id));
        this.myself = new SelfPlayer(ownId, ownName, deck, this.db);
        this.db.put('playerData', ownId, {
            name: ownName,
            color: this.myself.color,
            orderNumber: this.myself.orderNumber
        });
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
        this.ensurePlayersSorted();
        let withLargerNumber = this.others.filter(x => x.orderNumber > this.myself.orderNumber);
        if (withLargerNumber.length > 0) {
            this.setCurrentPlayer(withLargerNumber[0].name);
        }
        else if (this.others.length === 0) {
            this.setCurrentPlayer(this.myself.name);
        }
        else {
            this.setCurrentPlayer(this.others[0].name);
        }
    }
    get allPlayers() {
        let ret = [this.myself, ...this.others];
        ret.sort((a, b) => a.orderNumber - b.orderNumber);
        return ret;
    }
    ensurePlayersSorted() {
        this.others.sort((a, b) => a.orderNumber - b.orderNumber);
    }
    setCurrentPlayer(name) {
        this.db.put('currentPlayer', 'name', name);
        this.sendMessageRaw({ color: 'black', tc: curTime() + ' ' + name + ' ist am Zug', tr: '' });
    }
    updatePlayer(id) {
        var _a;
        this.ensurePlayersSorted();
        (_a = this.others.find(p => p.id === id)) === null || _a === void 0 ? void 0 : _a.notifyUpdate();
    }
    sendMessage(msg) {
        this.sendMessageRaw(this.myself.makeColored(curTime() + ' ' + this.myself.name, msg));
    }
    sendMessageRaw(msg) {
        this.db.add('messages', msg);
    }
    increaseLifes() {
        this.myself.changeLifeCount(1);
    }
    decreaseLifes() {
        this.myself.changeLifeCount(-1);
    }
    modifyOtherCard(modifierCardId, targetId) {
        if (this.myself.hasCard(targetId)) {
            this.myself.modifyOwnCard(modifierCardId, targetId);
        }
        else {
            this.others.forEach(p => {
                if (p.hasCard(targetId)) {
                    this.myself.modifyOtherPlayersCard(modifierCardId, targetId, p.id);
                }
            });
        }
    }
}
function curTime() {
    return new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
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

/***/ "F95V":
/*!**************************************************!*\
  !*** ./src/app/modal-card-collection.service.ts ***!
  \**************************************************/
/*! exports provided: ModalCardCollectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCardCollectionService", function() { return ModalCardCollectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _domain_game_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domain/game-field */ "BuRQ");




class ModalCardCollectionService {
    constructor() {
        this.collection = new _domain_game_field__WEBPACK_IMPORTED_MODULE_2__["CardBag"]([]);
        this.name = 'coll';
        this.act = '';
        this.isShown = false;
        this.closed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    show(cards, name, actions) {
        this.collection = cards;
        this.name = name;
        this.act = actions;
        this.isShown = true;
    }
}
ModalCardCollectionService.ɵfac = function ModalCardCollectionService_Factory(t) { return new (t || ModalCardCollectionService)(); };
ModalCardCollectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModalCardCollectionService, factory: ModalCardCollectionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalCardCollectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "GGrU":
/*!*************************************!*\
  !*** ./src/app/is-safe-url.pipe.ts ***!
  \*************************************/
/*! exports provided: IsSafeUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsSafeUrlPipe", function() { return IsSafeUrlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class IsSafeUrlPipe {
    constructor(san) {
        this.san = san;
    }
    transform(value, ...args) {
        return this.san.bypassSecurityTrustUrl(value);
    }
}
IsSafeUrlPipe.ɵfac = function IsSafeUrlPipe_Factory(t) { return new (t || IsSafeUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
IsSafeUrlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isSafeUrl", type: IsSafeUrlPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsSafeUrlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'isSafeUrl'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


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
        this.callbacks = { add: {}, update: {}, ignore: {}, receiveCommand: {} };
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
        if (d.cmd) {
            this.handleCommand(d);
            return;
        }
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
    handleCommand(d) {
        if (this.callbacks['receiveCommand'][d.cmd]) {
            this.callbacks['receiveCommand'][d.cmd](d.dta);
        }
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
        if (typeof eventType !== 'string') {
            eventType.forEach(x => this.on(x, database, action));
        }
        else {
            this.callbacks[eventType][database] = action;
        }
    }
    sendCommandTo(receiverId, command, data) {
        let idx = this.otherNames.indexOf(receiverId);
        this.others[idx].send({
            cmd: command,
            dta: data
        });
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _game_field_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game-field-store.service */ "c3lu");
/* harmony import */ var _card_collection_card_collection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card-collection/card-collection.component */ "DBil");





class OtherPlayerComponent {
    constructor(field, cdr) {
        this.field = field;
        this.cdr = cdr;
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.me.subscribeForUpdate(() => this.cdr.detectChanges(), this.destroy);
    }
    ngOnDestroy() {
        this.destroy.next();
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
    get handSize() {
        return this.me.handSize;
    }
    get librarySize() {
        return this.me.librarySize;
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
OtherPlayerComponent.ɵfac = function OtherPlayerComponent_Factory(t) { return new (t || OtherPlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_field_store_service__WEBPACK_IMPORTED_MODULE_2__["GameFieldStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
OtherPlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OtherPlayerComponent, selectors: [["mrn-other-player"]], inputs: { me: "me" }, decls: 7, vars: 11, consts: [[3, "id"], ["name", "Ausgelegt", 3, "collection"], ["name", "Friedhof", 3, "collection", "collapsed"]], template: function OtherPlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mrn-card-collection", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mrn-card-collection", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("turn", ctx.isCurrentPlayer());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.name, " (", ctx.id, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx.lifes, " Lebenspunkte, ", ctx.handSize, " Handkarten, ", ctx.librarySize, " Karten in der Bibliothek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collection", ctx.table);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collection", ctx.graveyard)("collapsed", true);
    } }, directives: [_card_collection_card_collection_component__WEBPACK_IMPORTED_MODULE_3__["CardCollectionComponent"]], styles: ["legend.turn[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL290aGVyLXBsYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUFDSiIsImZpbGUiOiJvdGhlci1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsZWdlbmQudHVybiB7XG4gICAgY29sb3I6IHJlZDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtherPlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mrn-other-player',
                templateUrl: './other-player.component.html',
                styleUrls: ['./other-player.component.scss']
            }]
    }], function () { return [{ type: _game_field_store_service__WEBPACK_IMPORTED_MODULE_2__["GameFieldStoreService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { me: [{
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _domain_game_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domain/game-field */ "BuRQ");
/* harmony import */ var _game_field_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-field-store.service */ "c3lu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _self_player_self_player_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./self-player/self-player.component */ "3Hr+");
/* harmony import */ var _card_details_card_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card-details/card-details.component */ "jXAV");
/* harmony import */ var _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chat-box/chat-box.component */ "8Yrd");
/* harmony import */ var _modal_card_collection_modal_card_collection_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modal-card-collection/modal-card-collection.component */ "7u39");
/* harmony import */ var _other_player_other_player_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./other-player/other-player.component */ "OGS3");













function AppComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Spieler");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_container_0_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.formData.playerName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Deck-URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_container_0_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.formData.deckUrl = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_0_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.start(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Start ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.formData.playerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.formData.deckUrl);
} }
function AppComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.waitForOthers(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Neues Spiel starten");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.join(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Existierendem Spiel beitreten ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AppComponent_ng_container_2_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_2_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.fieldService.gameField.shuffleStartPlayer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zuf\u00E4lligen Startspieler w\u00E4hlen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_container_2_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_2_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.fieldService.gameField.nextPlayer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zug beenden");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_container_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const p_r19 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", p_r19.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("activePlayer", ctx_r12.fieldService.gameField.currentPlayerName === p_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#", p_r19.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r19.name, " ");
} }
function AppComponent_ng_container_2_mrn_other_player_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mrn-other-player", 13);
} if (rf & 2) {
    const p_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("me", p_r20);
} }
function AppComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ng_container_2_button_3_Template, 2, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_ng_container_2_button_4_Template, 2, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_ng_container_2_ng_container_5_Template, 4, 6, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_2_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.dice(6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "W\u00FCrfel 6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_2_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.dice(10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "W\u00FCrfel 10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_2_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.dice(20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "W\u00FCrfel 20");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mrn-self-player");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_ng_container_2_mrn_other_player_15_Template, 1, 1, "mrn-other-player", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mrn-card-details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mrn-chat-box");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mrn-modal-card-collection", null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.fieldService.gameField.currentPlayerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isOwnTurn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.fieldService.gameField.allPlayers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.otherPlayers);
} }
class AppComponent {
    constructor(fieldService, http, cdr) {
        this.fieldService = fieldService;
        this.http = http;
        this.title = 'mrnOnline';
        this.state = 'initial';
        this.formData = {
            playerName: localStorage.getItem('mrnUserName'),
            deckUrl: './assets/stubData.json'
        };
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        fieldService.subscribe(f => f.registerPlayerChangeHandler(() => { cdr.detectChanges(); }), this.destroy);
    }
    ngOnDestroy() {
        this.destroy.next();
    }
    createPeer(name) {
        //var peer = new Peer(undefined, {host: 'localhost', port: 9000, key: 'peerjs', debug: 2});
        var peer = new Peer(undefined, {});
        peer.on('error', (err) => {
            console.log(err);
            alert('' + err);
        });
        peer.on('open', (id) => {
            //alert('My peer ID is: ' + id);
            this.loadDeckAndStart(peer, id);
        });
        peer.on('connection', (conn) => {
            //alert('Got connection ' + conn);
            this.fieldService.gameField.addOtherPlayer(conn);
        });
    }
    loadDeckAndStart(peer, playerId) {
        this.http.get(this.formData.deckUrl).subscribe((data) => {
            let deck = this.mapDecksAndCards(data, playerId);
            console.log('loaded deck with ' + deck.length + ' cards');
            this.fieldService.init(new _domain_game_field__WEBPACK_IMPORTED_MODULE_2__["GameField"](peer, playerId, this.formData.playerName, deck));
            this.state = 'started';
        });
    }
    start() {
        let name = this.formData.playerName;
        if (name) {
            localStorage.setItem('mrnUserName', name);
            this.createPeer(name);
        }
    }
    mapDecksAndCards(data, peerId) {
        let cards = {};
        for (let i = 0; i < data.cards.length; i++) {
            let card = data.cards[i];
            cards[card.name] = new _domain_game_field__WEBPACK_IMPORTED_MODULE_2__["CardType"](card.name, card.img);
        }
        let d = data.deck;
        let deck = [];
        for (let i = 0; i < d.length; i++) {
            let card = d[i];
            deck.push(new _domain_game_field__WEBPACK_IMPORTED_MODULE_2__["Card"](cards[card], peerId));
        }
        return deck;
    }
    join() {
        var other = prompt('ID des Mitspielers');
        if (other) {
            this.fieldService.gameField.connectToOtherPlayer(other);
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
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_field_store_service__WEBPACK_IMPORTED_MODULE_3__["GameFieldStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 3, consts: [[4, "ngIf"], ["type", "text", "name", "playerName", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "deckUrl", 3, "ngModel", "ngModelChange"], [3, "click"], [1, "grid-parent"], [1, "grid-top"], [3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "grid-center"], [3, "me", 4, "ngFor", "ngForOf"], [1, "grid-right"], ["mcc", ""], [1, "playerLink", 3, "href"], [3, "me"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_ng_container_0_Template, 15, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_1_Template, 5, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ng_container_2_Template, 21, 4, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state === "initial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state === "started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state === "joined");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _self_player_self_player_component__WEBPACK_IMPORTED_MODULE_7__["SelfPlayerComponent"], _card_details_card_details_component__WEBPACK_IMPORTED_MODULE_8__["CardDetailsComponent"], _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_9__["ChatBoxComponent"], _modal_card_collection_modal_card_collection_component__WEBPACK_IMPORTED_MODULE_10__["ModalCardCollectionComponent"], _other_player_other_player_component__WEBPACK_IMPORTED_MODULE_11__["OtherPlayerComponent"]], styles: [".grid-parent[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: 30px 1fr;\n  grid-template-columns: 1fr 250px;\n  width: 100%;\n  height: 100%;\n}\n\n.grid-top[_ngcontent-%COMP%] {\n  grid-row-start: 1;\n  grid-column-start: 1;\n}\n\n.grid-center[_ngcontent-%COMP%] {\n  grid-row-start: 2;\n  grid-column-start: 1;\n  overflow: scroll;\n}\n\n.grid-right[_ngcontent-%COMP%] {\n  grid-row-start: 1;\n  grid-row-end: span 2;\n  grid-column-start: 2;\n}\n\na.playerLink[_ngcontent-%COMP%] {\n  color: white;\n}\n\na.activePlayer[_ngcontent-%COMP%] {\n  animation-duration: 0.7s;\n  animation-name: showActive;\n  animation-iteration-count: 2;\n}\n\n@keyframes showActive {\n  0% {\n    filter: none;\n  }\n  50% {\n    filter: hue-rotate(90deg);\n  }\n  100% {\n    filter: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksWUFBQTtFQUNOO0VBQ0U7SUFDSSx5QkFBQTtFQUNOO0VBQ0U7SUFDSSxZQUFBO0VBQ047QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1wYXJlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4IDEuMGZyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS4wZnIgMjUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZ3JpZC10b3Age1xuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xufVxuXG4uZ3JpZC1jZW50ZXIge1xuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5ncmlkLXJpZ2h0IHtcbiAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICBncmlkLXJvdy1lbmQ6IHNwYW4gMjtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbn1cblxuYS5wbGF5ZXJMaW5rIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmEuYWN0aXZlUGxheWVyIHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuN3M7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHNob3dBY3RpdmU7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMjtcbn1cblxuQGtleWZyYW1lcyBzaG93QWN0aXZlIHtcbiAgICAwJSB7XG4gICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgZmlsdGVyOiBodWUtcm90YXRlKDkwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _game_field_store_service__WEBPACK_IMPORTED_MODULE_3__["GameFieldStoreService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-box/chat-box.component */ "8Yrd");
/* harmony import */ var _self_player_self_player_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./self-player/self-player.component */ "3Hr+");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card/card.component */ "mJ8H");
/* harmony import */ var _other_player_other_player_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./other-player/other-player.component */ "OGS3");
/* harmony import */ var _card_collection_card_collection_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./card-collection/card-collection.component */ "DBil");
/* harmony import */ var _card_details_card_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./card-details/card-details.component */ "jXAV");
/* harmony import */ var _modal_card_collection_modal_card_collection_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modal-card-collection/modal-card-collection.component */ "7u39");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _is_safe_url_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./is-safe-url.pipe */ "GGrU");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_5__["ChatBoxComponent"],
        _self_player_self_player_component__WEBPACK_IMPORTED_MODULE_6__["SelfPlayerComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"],
        _other_player_other_player_component__WEBPACK_IMPORTED_MODULE_8__["OtherPlayerComponent"],
        _card_collection_card_collection_component__WEBPACK_IMPORTED_MODULE_9__["CardCollectionComponent"],
        _card_details_card_details_component__WEBPACK_IMPORTED_MODULE_10__["CardDetailsComponent"],
        _modal_card_collection_modal_card_collection_component__WEBPACK_IMPORTED_MODULE_11__["ModalCardCollectionComponent"],
        _is_safe_url_pipe__WEBPACK_IMPORTED_MODULE_13__["IsSafeUrlPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_5__["ChatBoxComponent"],
                    _self_player_self_player_component__WEBPACK_IMPORTED_MODULE_6__["SelfPlayerComponent"],
                    _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"],
                    _other_player_other_player_component__WEBPACK_IMPORTED_MODULE_8__["OtherPlayerComponent"],
                    _card_collection_card_collection_component__WEBPACK_IMPORTED_MODULE_9__["CardCollectionComponent"],
                    _card_details_card_details_component__WEBPACK_IMPORTED_MODULE_10__["CardDetailsComponent"],
                    _modal_card_collection_modal_card_collection_component__WEBPACK_IMPORTED_MODULE_11__["ModalCardCollectionComponent"],
                    _is_safe_url_pipe__WEBPACK_IMPORTED_MODULE_13__["IsSafeUrlPipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




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
    subscribe(handler, destroy) {
        this.store
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(destroy))
            .subscribe(x => {
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

/***/ "jXAV":
/*!********************************************************!*\
  !*** ./src/app/card-details/card-details.component.ts ***!
  \********************************************************/
/*! exports provided: CardDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDetailsComponent", function() { return CardDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _domain_game_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain/game-field */ "BuRQ");
/* harmony import */ var _hovered_card_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hovered-card.service */ "m6ay");





class CardDetailsComponent {
    constructor(hc) {
        this.hc = hc;
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.current = new _domain_game_field__WEBPACK_IMPORTED_MODULE_2__["CardType"]('MRN', 'https://c1.scryfall.com/file/scryfall-cards/normal/front/a/9/a9f9c279-e382-4feb-9575-196e7cf5d7dc.jpg?1562799139');
        this.hc.subscribe(c => this.current = c.type, this.destroy);
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.destroy.next();
    }
}
CardDetailsComponent.ɵfac = function CardDetailsComponent_Factory(t) { return new (t || CardDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hovered_card_service__WEBPACK_IMPORTED_MODULE_3__["HoveredCardService"])); };
CardDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardDetailsComponent, selectors: [["mrn-card-details"]], decls: 1, vars: 2, consts: [["id", "largeCard", "width", "240px", 3, "src", "title"]], template: function CardDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.current.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.current.name);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mrn-card-details',
                templateUrl: './card-details.component.html',
                styleUrls: ['./card-details.component.scss']
            }]
    }], function () { return [{ type: _hovered_card_service__WEBPACK_IMPORTED_MODULE_3__["HoveredCardService"] }]; }, null); })();


/***/ }),

/***/ "m6ay":
/*!*****************************************!*\
  !*** ./src/app/hovered-card.service.ts ***!
  \*****************************************/
/*! exports provided: HoveredCardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoveredCardService", function() { return HoveredCardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




class HoveredCardService {
    constructor() {
        this.store = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    setCard(c) {
        this.store.next(c);
    }
    subscribe(handler, destroy) {
        this.store
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(destroy))
            .subscribe(handler);
    }
}
HoveredCardService.ɵfac = function HoveredCardService_Factory(t) { return new (t || HoveredCardService)(); };
HoveredCardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HoveredCardService, factory: HoveredCardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HoveredCardService, [{
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _domain_game_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain/game-field */ "BuRQ");
/* harmony import */ var _game_field_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game-field-store.service */ "c3lu");
/* harmony import */ var _hovered_card_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hovered-card.service */ "m6ay");
/* harmony import */ var _card_action_mode_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../card-action-mode.service */ "9Lk1");
/* harmony import */ var _modal_card_collection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal-card-collection.service */ "F95V");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _is_safe_url_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../is-safe-url.pipe */ "GGrU");










function CardComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function CardComponent_img_2_Template_img_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const m_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.hover(m_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "isSafeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", m_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, m_r4.img), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CardComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.card.counter);
} }
function CardComponent_ng_container_7_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_ng_container_7_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.gameField.myself.tap(ctx_r20.card.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tappen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_ng_container_7_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_ng_container_7_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.gameField.myself.markAsBlocker(ctx_r22.card.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "als Blocker markieren");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_ng_container_7_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_ng_container_7_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.gameField.myself.untap(ctx_r24.card.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "enttappen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_ng_container_7_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_ng_container_7_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.gameField.myself.putIntoPlay(ctx_r26.card.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ins Spiel bringen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_ng_container_7_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_ng_container_7_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.gameField.myself.putIntoPlayTapped(ctx_r28.card.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "getappt ins Spiel bringen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_ng_container_7_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_ng_container_7_a_6_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.modifyOtherCard(ctx_r30.card.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "auf andere Karte legen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_ng_container_7_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_ng_container_7_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.setCounter(ctx_r32.card); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Counter setzen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_ng_container_7_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_ng_container_7_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.gameField.myself.putToGraveyard(ctx_r34.card.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "auf Friedhof legen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_ng_container_7_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_ng_container_7_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.gameField.myself.putToExile(ctx_r36.card.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ganz aus dem Spiel nehmen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_ng_container_7_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_ng_container_7_a_10_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.gameField.myself.drawCard(ctx_r38.card.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ziehen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_ng_container_7_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_ng_container_7_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.gameField.myself.putToHand(ctx_r40.card.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "zur\u00FCck auf die Hand nehmen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_ng_container_7_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_ng_container_7_a_12_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.gameField.myself.putOnLibrary(ctx_r42.card.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "oben auf Bibliothek legen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_ng_container_7_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_ng_container_7_a_13_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r44.openStack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Einzelkarten auff\u00E4chern");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_ng_container_7_a_1_Template, 2, 0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardComponent_ng_container_7_a_2_Template, 2, 0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardComponent_ng_container_7_a_3_Template, 2, 0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardComponent_ng_container_7_a_4_Template, 2, 0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardComponent_ng_container_7_a_5_Template, 2, 0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardComponent_ng_container_7_a_6_Template, 2, 0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CardComponent_ng_container_7_a_7_Template, 2, 0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CardComponent_ng_container_7_a_8_Template, 2, 0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CardComponent_ng_container_7_a_9_Template, 2, 0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CardComponent_ng_container_7_a_10_Template, 2, 0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CardComponent_ng_container_7_a_11_Template, 2, 0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CardComponent_ng_container_7_a_12_Template, 2, 0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CardComponent_ng_container_7_a_13_Template, 2, 0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.act.includes("TA") && !ctx_r2.card.tapped);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.act.includes("BL") && ctx_r2.card.normal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.act.includes("UT") && !ctx_r2.card.normal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.act.includes("PL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.act.includes("PT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.act.includes("MO") && !ctx_r2.card.isModified);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.act.includes("CO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.act.includes("GR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.act.includes("EX"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.act.includes("DR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.act.includes("HA") && !ctx_r2.card.type.token);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.act.includes("LI") && !ctx_r2.card.type.token);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.card.isModified);
} }
function CardComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_ng_container_8_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.modifyTargetSelected(ctx_r46.card.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "als Ziel ausw\u00E4hlen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class CardComponent {
    constructor(field, hc, mode, cdr, mcc) {
        this.field = field;
        this.hc = hc;
        this.mode = mode;
        this.cdr = cdr;
        this.mcc = mcc;
        this.act = '';
        this.large = false;
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        mode.subscribe(() => cdr.detectChanges(), this.destroy);
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.destroy.next();
    }
    get gameField() {
        return this.field.gameField;
    }
    hover(c) {
        this.hc.setCard(c);
    }
    modifyOtherCard(cardId) {
        this.mode.selectForModify(cardId);
    }
    get isModifyMode() {
        return this.mode.isModifyMode;
    }
    setCounter(card) {
        let value = prompt('Counter-Wert', card.counter);
        if (value === null) {
            return;
        }
        if (value === '') {
            this.gameField.myself.setCounter(card.id, undefined);
        }
        else {
            this.gameField.myself.setCounter(card.id, value);
        }
    }
    modifyTargetSelected(targetId) {
        if (this.mode.savedId !== targetId) {
            this.gameField.modifyOtherCard(this.mode.savedId, targetId);
        }
        this.mode.normalMode();
    }
    openStack() {
        let cards = new _domain_game_field__WEBPACK_IMPORTED_MODULE_2__["CardBag"](this.card.modifiers);
        this.mcc.show(cards, 'Kartendetails', this.intersectActions(['HA', 'GR', 'EX', 'PL']));
    }
    intersectActions(otherActions) {
        return otherActions
            .filter(s => this.act.indexOf(s) >= 0)
            .join(',');
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_field_store_service__WEBPACK_IMPORTED_MODULE_3__["GameFieldStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hovered_card_service__WEBPACK_IMPORTED_MODULE_4__["HoveredCardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_card_action_mode_service__WEBPACK_IMPORTED_MODULE_5__["CardActionModeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modal_card_collection_service__WEBPACK_IMPORTED_MODULE_6__["ModalCardCollectionService"])); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["mrn-card"]], inputs: { card: "card", act: "act" }, decls: 9, vars: 12, consts: [[1, "dropdown"], [1, "cardStack"], ["class", "card", 3, "src", "title", "mouseover", 4, "ngFor", "ngForOf"], [1, "card", 3, "src", "title", "mouseover"], ["class", "counter", 4, "ngIf"], [1, "dropdown-content"], [4, "ngIf"], [1, "counter"], [3, "click", 4, "ngIf"], [3, "click"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardComponent_img_2_Template, 2, 4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function CardComponent_Template_img_mouseover_3_listener() { return ctx.hover(ctx.card); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "isSafeUrl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CardComponent_ng_container_7_Template, 14, 13, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CardComponent_ng_container_8_Template, 3, 0, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tapped", ctx.card.tapped)("blocker", ctx.card.markedAsBlocker);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.card.reversedModifiers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.card.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 10, ctx.card.img), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card.counter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isModifyMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isModifyMode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [_is_safe_url_pipe__WEBPACK_IMPORTED_MODULE_8__["IsSafeUrlPipe"]], styles: [".tapped[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n\n.blocker[_ngcontent-%COMP%] {\n  transform: rotate(30deg);\n}\n\nimg.card[_ngcontent-%COMP%] {\n  width: 120px;\n}\n\n.cardStack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-last-child(2) {\n  padding-left: 10px;\n  padding-bottom: 20px;\n}\n\n.cardStack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-last-child(3) {\n  padding-left: 20px;\n  padding-bottom: 40px;\n}\n\n.cardStack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-last-child(4) {\n  padding-left: 30px;\n  padding-bottom: 60px;\n}\n\n.cardStack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-last-child(5) {\n  padding-left: 40px;\n  padding-bottom: 80px;\n}\n\n.cardStack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-last-child(6) {\n  padding-left: 50px;\n  padding-bottom: 100px;\n}\n\n.cardStack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-last-child(7) {\n  padding-left: 60px;\n  padding-bottom: 120px;\n}\n\n.cardStack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-last-child(8) {\n  padding-left: 70px;\n  padding-bottom: 140px;\n}\n\n.cardStack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-last-child(9) {\n  padding-left: 80px;\n  padding-bottom: 160px;\n}\n\n.cardStack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-last-child(10) {\n  padding-left: 90px;\n  padding-bottom: 180px;\n}\n\n.cardStack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n  position: relative;\n}\n\n.cardStack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:not(:first-child) {\n  position: absolute;\n  left: 0px;\n  bottom: 0px;\n}\n\n.counter[_ngcontent-%COMP%] {\n  position: absolute;\n  color: red;\n  background-color: black;\n  font-size: 20pt;\n  left: 25px;\n  top: 60px;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 10px;\n  left: 60px;\n  background-color: #f1f1f1;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  padding: 5px 5px;\n  text-decoration: none;\n  display: block;\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtBQUNKOztBQUVBO0VBQ0ksd0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBLGtFQUFBOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUNBLHlDQUFBOztBQUNBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0NBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQUEsOEJBQUE7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFHSjs7QUFEQSw0Q0FBQTs7QUFDQTtFQUEyQixzQkFBQTtBQUszQjs7QUFKQSxvQ0FBQTs7QUFDQTtFQUFtQyxjQUFBO0FBUW5DIiwiZmlsZSI6ImNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFwcGVkIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi5ibG9ja2VyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG59XG5cbmltZy5jYXJkIHtcbiAgICB3aWR0aDogMTIwcHg7XG59XG5cbi5jYXJkU3RhY2sgaW1nOm50aC1sYXN0LWNoaWxkKDIpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5jYXJkU3RhY2sgaW1nOm50aC1sYXN0LWNoaWxkKDMpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG5cbi5jYXJkU3RhY2sgaW1nOm50aC1sYXN0LWNoaWxkKDQpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XG59XG5cbi5jYXJkU3RhY2sgaW1nOm50aC1sYXN0LWNoaWxkKDUpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XG59XG5cbi5jYXJkU3RhY2sgaW1nOm50aC1sYXN0LWNoaWxkKDYpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuXG4uY2FyZFN0YWNrIGltZzpudGgtbGFzdC1jaGlsZCg3KSB7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMjBweDtcbn1cblxuLmNhcmRTdGFjayBpbWc6bnRoLWxhc3QtY2hpbGQoOCkge1xuICAgIHBhZGRpbmctbGVmdDogNzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTQwcHg7XG59XG5cbi5jYXJkU3RhY2sgaW1nOm50aC1sYXN0LWNoaWxkKDkpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE2MHB4O1xufVxuXG4uY2FyZFN0YWNrIGltZzpudGgtbGFzdC1jaGlsZCgxMCkge1xuICAgIHBhZGRpbmctbGVmdDogOTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTgwcHg7XG59XG5cbi5jYXJkU3RhY2sgaW1nOmZpcnN0LWNoaWxkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJkU3RhY2sgaW1nOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMHB4O1xuICAgIGJvdHRvbTogMHB4O1xufVxuXG4uY291bnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAyMHB0O1xuICAgIGxlZnQ6IDI1cHg7XG4gICAgdG9wOiA2MHB4O1xufVxuXG4vKiBUaGUgY29udGFpbmVyIDxkaXY+IC0gbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBkcm9wZG93biBjb250ZW50ICovXG4uZHJvcGRvd24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59ICBcbi8qIERyb3Bkb3duIENvbnRlbnQgKEhpZGRlbiBieSBEZWZhdWx0KSAqL1xuLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiA2MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICB6LWluZGV4OiAxO1xufVxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLyogQ2hhbmdlIGNvbG9yIG9mIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7ZGlzcGxheTogYmxvY2s7fVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mrn-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss']
            }]
    }], function () { return [{ type: _game_field_store_service__WEBPACK_IMPORTED_MODULE_3__["GameFieldStoreService"] }, { type: _hovered_card_service__WEBPACK_IMPORTED_MODULE_4__["HoveredCardService"] }, { type: _card_action_mode_service__WEBPACK_IMPORTED_MODULE_5__["CardActionModeService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _modal_card_collection_service__WEBPACK_IMPORTED_MODULE_6__["ModalCardCollectionService"] }]; }, { card: [{
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