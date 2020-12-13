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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_collection_card_collection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../card-collection/card-collection.component */ "DBil");







function SelfPlayerComponent_ng_container_5_mrn_card_collection_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mrn-card-collection", 7);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collection", ctx_r2.exile)("act", "GR")("collapsed", true);
} }
function SelfPlayerComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mrn-card-collection", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mrn-card-collection", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelfPlayerComponent_ng_container_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.untapAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Alles enttappen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelfPlayerComponent_ng_container_5_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.drawCard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Karte ziehen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelfPlayerComponent_ng_container_5_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.openLibrary(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Bibliothek \u00F6ffnen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelfPlayerComponent_ng_container_5_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.shuffleLibrary(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Bibliothek mischen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelfPlayerComponent_ng_container_5_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.createToken(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Token erstellen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mrn-card-collection", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SelfPlayerComponent_ng_container_5_mrn_card_collection_16_Template, 1, 3, "mrn-card-collection", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelfPlayerComponent_ng_container_5_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.increaseLifes(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelfPlayerComponent_ng_container_5_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.decreaseLifes(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelfPlayerComponent_ng_container_5_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.multiLifeIncrease(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "+X ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelfPlayerComponent_ng_container_5_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.multiLifeDecrease(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "-X ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collection", ctx_r0.hand)("act", "PL,PT,GR,EX,LI");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collection", ctx_r0.table)("act", "TA,UT,BL,GR,EX,HA,MO,CO,LI");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Bibliothek: ", ctx_r0.librarySize(), " Karten. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collection", ctx_r0.graveyard)("act", "PL,PT,HA,EX,LI")("collapsed", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.exile.size > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Lebenspunkte: ", ctx_r0.lifes, " ");
} }
function SelfPlayerComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hat das Spiel verlassen.\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class SelfPlayerComponent {
    constructor(field, mcc, cdr, ngz) {
        this.field = field;
        this.mcc = mcc;
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        field.subscribe((f) => f.myself.subscribeForUpdate(() => ngz.run(() => cdr.markForCheck())), this.destroy);
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
    get isInGame() {
        return this.field.gameField.myself.isInGame;
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
        this.mcc.show(() => this.gameField.myself.library, 'Bibliothek', 'DR,PL,PT,GR');
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
SelfPlayerComponent.ɵfac = function SelfPlayerComponent_Factory(t) { return new (t || SelfPlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_field_store_service__WEBPACK_IMPORTED_MODULE_2__["GameFieldStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modal_card_collection_service__WEBPACK_IMPORTED_MODULE_3__["ModalCardCollectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
SelfPlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelfPlayerComponent, selectors: [["mrn-self-player"]], decls: 7, vars: 7, consts: [[3, "id"], [4, "ngIf"], ["name", "Hand", 3, "collection", "act"], ["name", "Ausgelegt", 3, "collection", "act"], [3, "click"], ["name", "Friedhof", 3, "collection", "act", "collapsed"], ["name", "Aus dem Spiel", 3, "collection", "act", "collapsed", 4, "ngIf"], ["name", "Aus dem Spiel", 3, "collection", "act", "collapsed"]], template: function SelfPlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SelfPlayerComponent_ng_container_5_Template, 27, 10, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SelfPlayerComponent_ng_container_6_Template, 2, 0, "ng-container", 1);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isInGame);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isInGame);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _card_collection_card_collection_component__WEBPACK_IMPORTED_MODULE_5__["CardCollectionComponent"]], styles: ["legend.turn[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlbGYtcGxheWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKIiwiZmlsZSI6InNlbGYtcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGVnZW5kLnR1cm4ge1xuICAgIGNvbG9yOiByZWQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelfPlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mrn-self-player',
                templateUrl: './self-player.component.html',
                styleUrls: ['./self-player.component.scss']
            }]
    }], function () { return [{ type: _game_field_store_service__WEBPACK_IMPORTED_MODULE_2__["GameFieldStoreService"] }, { type: _modal_card_collection_service__WEBPACK_IMPORTED_MODULE_3__["ModalCardCollectionService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _card_collection_card_collection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card-collection/card-collection.component */ "DBil");
/* harmony import */ var _modal_card_collection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal-card-collection.service */ "F95V");
/* harmony import */ var _game_field_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game-field-store.service */ "c3lu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ModalCardCollectionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalCardCollectionComponent_div_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Schlie\u00DFen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mrn-card-collection", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r0.service.name)("collection", ctx_r0.service.collection())("act", ctx_r0.service.act);
} }
class ModalCardCollectionComponent {
    constructor(service, field) {
        this.service = service;
        this.field = field;
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        field.subscribe((f) => f.myself.subscribeForUpdate(() => this.cc.collection = service.collection()), this.destroy);
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.destroy.next();
    }
    hide() {
        this.service.isShown = false;
        this.service.closed.next();
    }
}
ModalCardCollectionComponent.ɵfac = function ModalCardCollectionComponent_Factory(t) { return new (t || ModalCardCollectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modal_card_collection_service__WEBPACK_IMPORTED_MODULE_3__["ModalCardCollectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_field_store_service__WEBPACK_IMPORTED_MODULE_4__["GameFieldStoreService"])); };
ModalCardCollectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalCardCollectionComponent, selectors: [["mrn-modal-card-collection"]], viewQuery: function ModalCardCollectionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_card_collection_card_collection_component__WEBPACK_IMPORTED_MODULE_2__["CardCollectionComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cc = _t.first);
    } }, decls: 1, vars: 1, consts: [["class", "glass-pane", 4, "ngIf"], [1, "glass-pane"], [1, "content-pane"], [3, "click"], [3, "name", "collection", "act"]], template: function ModalCardCollectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModalCardCollectionComponent_div_0_Template, 5, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.isShown);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _card_collection_card_collection_component__WEBPACK_IMPORTED_MODULE_2__["CardCollectionComponent"]], styles: ["div.glass-pane[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n  position: fixed;\n  top: 0;\n  left: 0;\n  margin: 0;\n  padding: 0;\n  background: rgba(1, 1, 1, 0.6);\n  overflow: scroll;\n}\n\ndiv.content-pane[_ngcontent-%COMP%] {\n  padding: 20px 240px 20px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21vZGFsLWNhcmQtY29sbGVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7QUFDSiIsImZpbGUiOiJtb2RhbC1jYXJkLWNvbGxlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuZ2xhc3MtcGFuZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEsIDEsIDEsIDAuNik7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuZGl2LmNvbnRlbnQtcGFuZSB7XG4gICAgcGFkZGluZzogMjBweCAyNDBweCAyMHB4IDIwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalCardCollectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mrn-modal-card-collection',
                templateUrl: './modal-card-collection.component.html',
                styleUrls: ['./modal-card-collection.component.scss']
            }]
    }], function () { return [{ type: _modal_card_collection_service__WEBPACK_IMPORTED_MODULE_3__["ModalCardCollectionService"] }, { type: _game_field_store_service__WEBPACK_IMPORTED_MODULE_4__["GameFieldStoreService"] }]; }, { cc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_card_collection_card_collection_component__WEBPACK_IMPORTED_MODULE_2__["CardCollectionComponent"]]
        }] }); })();


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
    constructor(field, cdr, ngz) {
        this.field = field;
        this.cdr = cdr;
        this.ngz = ngz;
        this.messages = [];
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.scrollDirty = false;
        field.subscribe(gf => gf.registerMessageHandler((id, msg) => this.handleAddedMessage(msg)), this.destroy);
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.destroy.next();
    }
    handleAddedMessage(msg) {
        this.ngz.run(() => {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"].assertInAngularZone();
            this.messages.push(msg);
            this.cdr.markForCheck();
            this.scrollDirty = true;
            this.scrollToBottom();
        });
    }
    ngAfterViewChecked() {
        if (this.scrollDirty) {
            this.scrollDirty = false;
            setTimeout(() => this.scrollToBottom());
        }
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
ChatBoxComponent.ɵfac = function ChatBoxComponent_Factory(t) { return new (t || ChatBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_field_store_service__WEBPACK_IMPORTED_MODULE_2__["GameFieldStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
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
    }], function () { return [{ type: _game_field_store_service__WEBPACK_IMPORTED_MODULE_2__["GameFieldStoreService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


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
/*! exports provided: LocalLibrary, CardCache, CardCollection, CardStash, CardBag, OtherPlayer, GameField, Card, CardType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalLibrary", function() { return LocalLibrary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardCache", function() { return CardCache; });
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
    constructor(name, type, img, token) {
        this.name = name;
        this.type = type;
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
            type: this.type,
            img: this.img,
            token: this.token
        };
    }
}
function typeFromDto(dto) {
    return new CardType(dto.name, dto.type, dto.img, dto.token);
}
var cardCnt = 0;
var LocationType;
(function (LocationType) {
    LocationType[LocationType["LIBRARY_OR_HAND"] = 0] = "LIBRARY_OR_HAND";
    LocationType[LocationType["TABLE"] = 1] = "TABLE";
    LocationType[LocationType["ON_OTHER_CARD"] = 2] = "ON_OTHER_CARD";
    LocationType[LocationType["GRAVEYARD"] = 3] = "GRAVEYARD";
    LocationType[LocationType["EXILE"] = 4] = "EXILE";
    LocationType[LocationType["VANISHED"] = 5] = "VANISHED";
})(LocationType || (LocationType = {}));
var CardState;
(function (CardState) {
    CardState[CardState["Normal"] = 0] = "Normal";
    CardState[CardState["Blocker"] = 1] = "Blocker";
    CardState[CardState["Tapped"] = 2] = "Tapped";
})(CardState || (CardState = {}));
class CachedCardsForPlayer {
    constructor() {
        this.library = new CardStash([]);
        this.hand = new CardBag([]);
        this.table = new CardBag([]);
        this.graveyard = new CardStash([]);
        this.exile = new CardBag([]);
        this.graveyardOrder = new Map();
    }
    sortStashes(localLibrary) {
        this.library.sort(localLibrary.createOrderMap());
        this.graveyard.sort(this.graveyardOrder);
    }
}
class LocalLibrary {
    constructor(name, storage, deck) {
        this.name = name;
        this.storage = storage;
        this.content = [];
        if (deck) {
            console.log('initializing library from deck');
            this.content = deck.map(c => c.id);
            this.store();
        }
        else {
            let stored = storage.getItem('mrn.' + name + '.localLibrary');
            console.log('loaded stored library: ' + stored);
            if (stored) {
                this.content = JSON.parse(stored);
            }
            else {
                this.content = [];
            }
        }
    }
    contains(cardId) {
        return this.content.includes(cardId);
    }
    shuffle() {
        var currentIndex = this.content.length;
        var temporaryValue;
        var randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = this.content[currentIndex];
            this.content[currentIndex] = this.content[randomIndex];
            this.content[randomIndex] = temporaryValue;
        }
        this.store();
    }
    createOrderMap() {
        let ret = new Map();
        for (let i = 0; i < this.content.length; i++) {
            ret.set(this.content[i], i);
        }
        return ret;
    }
    draw() {
        let ret = this.content.shift();
        this.store();
        return ret;
    }
    removeIfContained(cardId) {
        let idx = this.content.indexOf(cardId);
        if (idx > 0) {
            this.content.splice(idx, 1);
            this.store();
        }
    }
    putOnTop(cardId) {
        this.content.unshift(cardId);
        this.store();
    }
    store() {
        this.storage.setItem('mrn.' + this.name + '.localLibrary', JSON.stringify(this.content));
    }
}
class CachedCards {
    constructor(db, library, knownCards) {
        this.db = db;
        this.library = library;
        this.cardsPerPlayer = new Map();
        this.mappedCards = new Map();
        knownCards.forEach((cardId) => {
            this.getOrCreateCard(cardId);
        });
        this.cardsPerPlayer.forEach(p => p.sortStashes(library));
    }
    getOrCreateCard(cardId) {
        if (!this.mappedCards.has(cardId)) {
            this.mapCard(cardId, this.db.get('cardData', cardId));
        }
        return this.mappedCards.get(cardId);
    }
    mapCard(cardId, data) {
        let icd = this.db.get('cards', cardId);
        if (!data) {
            data = {
                state: CardState.Normal,
                locationType: LocationType.LIBRARY_OR_HAND,
                locationPlayer: icd.controller,
                locationData: undefined,
                counter: undefined
            };
        }
        let card = new Card(typeFromDto(icd.type), icd.controller, cardId, data.state, [], data.counter);
        this.mappedCards.set(cardId, card);
        let player = this.getOrCreatePlayer(data.locationPlayer);
        switch (data.locationType) {
            case LocationType.LIBRARY_OR_HAND:
                //die Zuordnung Hand vs Bibliothek funktioniert nur für den eigenen Spieler, aber das ist OK
                if (this.library.contains(cardId)) {
                    player.library.add(card);
                }
                else {
                    player.hand.add(card);
                }
                break;
            case LocationType.TABLE:
                player.table.add(card);
                break;
            case LocationType.GRAVEYARD:
                player.graveyard.add(card);
                player.graveyardOrder.set(card.id, data.locationData);
                break;
            case LocationType.EXILE:
                player.exile.add(card);
                break;
            case LocationType.ON_OTHER_CARD:
                let otherCard = this.getOrCreateCard(data.locationData);
                otherCard === null || otherCard === void 0 ? void 0 : otherCard.modifyWith(card);
                break;
            case LocationType.VANISHED:
                break;
        }
    }
    getOrCreatePlayer(playerName) {
        if (!this.cardsPerPlayer.has(playerName)) {
            this.cardsPerPlayer.set(playerName, new CachedCardsForPlayer());
        }
        return this.cardsPerPlayer.get(playerName);
    }
}
class CardCache {
    constructor(deck, db, library) {
        this.db = db;
        this.library = library;
        if (deck) {
            deck.forEach(c => c.writeCardStats(db));
            this.knownCards = deck.map(c => c.id);
        }
        else {
            this.knownCards = library.content.slice();
        }
        this.dirty = true;
        db.on('add', 'cardData', true, (cardId) => {
            this.ensureKnown(cardId);
            this.setDirty();
        });
        db.on('update', 'cardData', false, () => this.setDirty());
    }
    ensureKnown(cardId) {
        if (!this.knownCards.includes(cardId)) {
            this.knownCards.push(cardId);
        }
    }
    get() {
        if (this.dirty) {
            this.content = new CachedCards(this.db, this.library, this.knownCards);
            this.dirty = false;
        }
        return this.content;
    }
    setDirty() {
        this.dirty = true;
    }
}
class Card {
    constructor(type, controllerName, id, tapped, mods, counter) {
        this.state = CardState.Normal;
        this.type = type;
        this.controllerName = controllerName;
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
            this.state = tapped;
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
    modifyWith(c) {
        this.mods.push(c);
    }
    isModifiedBy(cardId) {
        for (let i = 0; i < this.mods.length; i++) {
            if (this.mods[i].id === cardId) {
                return true;
            }
        }
        return false;
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
    writeCardStats(db) {
        db.put('cards', this.id, {
            type: this.type.toDto(),
            controller: this.controllerName
        });
    }
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
    get size() {
        return this.cards.length;
    }
}
class CardStash extends CardCollection {
    constructor(cards) {
        super(cards);
    }
    add(card) {
        this.cards.push(card);
    }
    sort(cardIdToOrderMap) {
        this.cards.sort((c1, c2) => {
            let i1 = cardIdToOrderMap.get(c1.id) || 0;
            let i2 = cardIdToOrderMap.get(c2.id) || 0;
            return i1 - i2;
        });
    }
}
class CardBag extends CardCollection {
    constructor(cards) {
        super(cards);
    }
    add(card) {
        //bei gleichnamiger Karte einsortieren, wenn vorhanden
        let idx = this.cards.findIndex(x => x.type.name === card.type.name);
        if (idx >= 0) {
            this.cards.splice(idx, 0, card);
            return;
        }
        //nach Grob-Typ sortieren
        this.cards.push(card);
        this.cards.sort((a, b) => this.typeGroup(a) - this.typeGroup(b));
    }
    typeGroup(c) {
        let t = c.type.type;
        if (t.startsWith('Creature') || t.startsWith('Summon ')) {
            return 1;
        }
        else if (t.indexOf('Land') >= 0) {
            return 0;
        }
        else {
            return 2;
        }
    }
}
class SelfPlayer {
    constructor(id, name, db, cardCache, localLibrary, clean) {
        this.graveyardCounter = 0;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.id = id;
        this.name = name;
        this.db = db;
        this.cardCache = cardCache;
        this.localLibrary = localLibrary;
        if (clean) {
            this.db.put('librarySizes', this.name, this.library.size);
            this.db.put('lifes', this.name, 20);
            let h = Math.floor(Math.random() * 72) * 5;
            let s = 85 + Math.floor(Math.random() * 10);
            let l = 35 + Math.floor(Math.random() * 10);
            this.color = 'hsl(' + h + ',' + s + '%,' + l + '%)';
            this.orderNumber = Math.random();
        }
        else {
            let playerData = this.db.get('playerData', this.name);
            this.color = playerData.color;
            this.orderNumber = playerData.orderNumber;
        }
        this.lifes = this.db.get('lifes', this.name);
        this.db.on(['add', 'update'], 'endedPlayers', false, (name, dta) => {
            if (dta) {
                this.handlePlayerEnd(name);
            }
        });
    }
    get library() {
        return this.cardCache.get().getOrCreatePlayer(this.name).library;
    }
    get hand() {
        return this.cardCache.get().getOrCreatePlayer(this.name).hand;
    }
    get table() {
        return this.cardCache.get().getOrCreatePlayer(this.name).table;
    }
    get graveyard() {
        return this.cardCache.get().getOrCreatePlayer(this.name).graveyard;
    }
    get exile() {
        return this.cardCache.get().getOrCreatePlayer(this.name).exile;
    }
    handlePlayerEnd(playerName) {
        let allCardsOfPlayer = [];
        this.table.cards.forEach((c) => {
            if (c.controllerName === playerName) {
                allCardsOfPlayer.push(c);
            }
            c.modifiers.forEach((m) => {
                if (m.controllerName === playerName) {
                    allCardsOfPlayer.push(m);
                }
            });
        });
        allCardsOfPlayer.forEach(c => this.putToGraveyard(c.id));
        this.subject.next();
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
    get isInGame() {
        return !this.db.get('endedPlayers', this.name);
    }
    untapAll() {
        this.table.cards.forEach(c => {
            if (!c.normal) {
                this.untap(c.id);
            }
        });
    }
    drawCard(cardId) {
        if (!cardId) {
            cardId = this.localLibrary.draw();
        }
        if (!cardId) {
            this.sendNotification('kann nicht ziehen');
            return;
        }
        this.addToHand(cardId);
        this.db.put('librarySizes', this.name, this.library.size);
        this.sendNotification('zieht eine Karte');
        this.subject.next();
    }
    shuffleLibrary() {
        this.sendNotification('mischt die Bibliothek');
        this.localLibrary.shuffle();
        this.cardCache.setDirty();
    }
    addToHand(cardId) {
        this.writeCardData(cardId, {
            state: CardState.Normal,
            locationType: LocationType.LIBRARY_OR_HAND,
            locationPlayer: this.name,
            locationData: undefined,
            counter: undefined
        });
        this.localLibrary.removeIfContained(cardId);
        this.db.put('handSizes', this.name, this.hand.size);
    }
    writeCardData(cardId, mcd) {
        this.db.put('cardData', cardId, mcd);
    }
    changeLifeCount(diff) {
        this.lifes += diff;
        this.db.put('lifes', this.name, this.lifes);
        if (diff > 0) {
            this.sendNotification('erhöht Lebenspunkte um ' + diff + ' auf ' + this.lifes);
        }
        else {
            this.sendNotification('verringert Lebenspunkte um ' + -diff + ' auf ' + this.lifes);
        }
        this.subject.next();
    }
    putToGraveyard(cardId) {
        this.addToGraveyard(this.cardCache.get().getOrCreateCard(cardId));
        this.subject.next();
    }
    addToGraveyard(card) {
        card.modifiers.forEach(m => this.addToGraveyard(m));
        this.writeCardData(card.id, {
            state: CardState.Normal,
            locationType: card.type.token ? LocationType.VANISHED : LocationType.GRAVEYARD,
            locationPlayer: card.controllerName,
            locationData: this.graveyardCounter--,
            counter: undefined
        });
        this.localLibrary.removeIfContained(card.id);
        if (card.type.token) {
            this.sendNotification('Token ' + card.name + ' verschwindet');
        }
        else {
            this.sendNotification('legt ' + card.name + ' auf Friedhof');
        }
    }
    putToExile(cardId) {
        let card = this.cardCache.get().getOrCreateCard(cardId);
        this.writeCardData(card.id, {
            state: CardState.Normal,
            locationType: card.type.token ? LocationType.VANISHED : LocationType.EXILE,
            locationPlayer: card.controllerName,
            locationData: undefined,
            counter: undefined
        });
        if (card.type.token) {
            this.sendNotification('Token ' + card.name + ' verschwindet');
        }
        else {
            this.sendNotification('nimmt ' + card.name + ' ganz aus dem Spiel');
        }
        this.subject.next();
    }
    putIntoPlay(cardId) {
        this.writeCardData(cardId, {
            state: CardState.Normal,
            locationType: LocationType.TABLE,
            locationPlayer: this.name,
            locationData: undefined,
            counter: undefined
        });
        this.localLibrary.removeIfContained(cardId);
        this.sendNotification('spielt ' + this.cardName(cardId) + ' aus');
        this.subject.next();
    }
    cardName(cardId) {
        return this.db.get('cards', cardId).type.name;
    }
    putIntoPlayTapped(cardId) {
        this.writeCardData(cardId, {
            state: CardState.Tapped,
            locationType: LocationType.TABLE,
            locationPlayer: this.name,
            locationData: undefined,
            counter: undefined
        });
        this.localLibrary.removeIfContained(cardId);
        this.sendNotification('spielt ' + this.cardName(cardId) + ' getappt aus');
        this.subject.next();
    }
    putToHand(cardId) {
        this.addToHand(cardId);
        this.sendNotification('nimmt ' + this.cardName(cardId) + ' auf die Hand');
        this.subject.next();
    }
    putOnLibrary(cardId) {
        let oldLocation = this.db.get('cardData', cardId).locationType;
        if (oldLocation === LocationType.LIBRARY_OR_HAND) {
            this.sendNotification('legt eine Karte oben auf die Bibliothek');
        }
        else {
            this.writeCardData(cardId, {
                state: CardState.Normal,
                locationType: LocationType.LIBRARY_OR_HAND,
                locationPlayer: this.name,
                locationData: undefined,
                counter: undefined
            });
            this.sendNotification('legt ' + this.cardName(cardId) + ' oben auf die Bibliothek');
        }
        this.localLibrary.putOnTop(cardId);
        this.cardCache.setDirty();
        this.db.put('librarySizes', this.name, this.library.size);
        this.subject.next();
    }
    modifyCard(modifierCardId, toModifyCardId) {
        let cardData = this.db.get('cardData', modifierCardId);
        this.writeCardData(modifierCardId, {
            state: CardState.Normal,
            locationType: LocationType.ON_OTHER_CARD,
            locationPlayer: cardData.locationPlayer,
            locationData: toModifyCardId,
            counter: cardData.counter
        });
        this.sendNotification('spielt ' + this.cardName(modifierCardId) + ' auf ' + this.cardName(toModifyCardId));
        this.subject.next();
    }
    setCounter(cardId, value) {
        let cardData = this.db.get('cardData', cardId);
        this.writeCardData(cardId, {
            state: cardData.state,
            locationType: cardData.locationType,
            locationPlayer: cardData.locationPlayer,
            locationData: cardData.locationData,
            counter: value
        });
        this.sendNotification('setzt Counter für ' + this.cardName(cardId) + ' auf ' + value);
        this.subject.next();
    }
    addToTable(card) {
        this.table.add(card);
        card.writeCardStats(this.db);
        this.writeCardData(card.id, {
            state: CardState.Normal,
            locationType: LocationType.TABLE,
            locationPlayer: this.name,
            locationData: undefined,
            counter: card.counter
        });
        this.localLibrary.removeIfContained(card.id);
        this.subject.next();
    }
    tap(cardId) {
        this.setCardState(cardId, CardState.Tapped);
        this.sendNotification('tappt ' + this.cardName(cardId));
        this.subject.next();
    }
    markAsBlocker(cardId) {
        this.setCardState(cardId, CardState.Blocker);
        this.sendNotification('markiert ' + this.cardName(cardId) + ' als Blocker');
        this.subject.next();
    }
    untap(cardId) {
        this.setCardState(cardId, CardState.Normal);
        this.sendNotification('enttappt ' + this.cardName(cardId));
        this.subject.next();
    }
    setCardState(cardId, state) {
        let cardData = this.db.get('cardData', cardId);
        this.writeCardData(cardId, {
            state: state,
            locationType: cardData.locationType,
            locationPlayer: cardData.locationPlayer,
            locationData: cardData.locationData,
            counter: cardData.counter
        });
    }
    sendNotification(msg) {
        this.db.add('messages', this.makeColored(curTime() + ' ' + this.name + ' ' + msg, ''));
    }
    createToken(name) {
        let type = new CardType(name, 'Creature - Token', undefined, true);
        let card = new Card(type, this.name);
        this.sendNotification('bringt Token ' + card.name + ' ins Spiel');
        this.addToTable(card);
    }
}
class OtherPlayer {
    constructor(name, db, cardCache) {
        this.name = name;
        this.db = db;
        this.cardCache = cardCache;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.db.on(['add', 'update'], 'playerData', false, (playerName, name) => this.notifyIfRightName(playerName));
        this.db.on(['add', 'update'], 'lifes', false, (playerName, cnt) => this.notifyIfRightName(playerName));
        this.db.on(['add', 'update'], 'endedPlayers', false, (playerName, cnt) => this.notifyIfRightName(playerName));
    }
    notifyIfRightName(playerName) {
        if (playerName === this.name) {
            this.notifyUpdate();
        }
    }
    get id() {
        var _a;
        return (_a = this.playerData) === null || _a === void 0 ? void 0 : _a.id;
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
        return this.db.get('playerData', this.name);
    }
    get isInGame() {
        return !this.db.get('endedPlayers', this.name);
    }
    get lifes() {
        return this.db.get('lifes', this.name);
    }
    get handSize() {
        return this.db.get('handSizes', this.name);
    }
    get librarySize() {
        return this.db.get('librarySizes', this.name);
    }
    get graveyard() {
        return this.cardCache.get().getOrCreatePlayer(this.name).graveyard;
    }
    get table() {
        return this.cardCache.get().getOrCreatePlayer(this.name).table;
    }
    notifyUpdate() {
        console.log('notify update ' + this.name);
        this.subject.next();
    }
    subscribeForUpdate(arg0, destroy) {
        this.subject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(destroy)).subscribe(arg0);
    }
}
class GameField {
    constructor(peer, ownId, ownName, deck, clean) {
        this.others = [];
        this.db = new _distributed_database__WEBPACK_IMPORTED_MODULE_2__["DistributedDatabaseSystem"](ownName, peer, ownId, localStorage, clean);
        let localLibrary = new LocalLibrary(ownName, localStorage, deck);
        if (clean) {
            localLibrary.shuffle();
        }
        this.cardCache = new CardCache(clean ? deck : undefined, this.db, localLibrary);
        this.db.on('add', 'playerData', true, (name, data) => {
            if (name !== ownName) {
                this.others.push(new OtherPlayer(name, this.db, this.cardCache));
            }
            this.ensurePlayersSorted();
        });
        this.myself = new SelfPlayer(ownId, ownName, this.db, this.cardCache, localLibrary, clean);
        this.db.put('playerData', ownName, {
            id: ownId,
            name: ownName,
            color: this.myself.color,
            orderNumber: this.myself.orderNumber
        });
    }
    registerMessageHandler(handler) {
        this.db.on('add', 'messages', true, handler);
    }
    registerPlayerChangeHandler(handler) {
        this.db.on('add', 'currentPlayer', true, handler);
        this.db.on('update', 'currentPlayer', false, handler);
    }
    connectToOtherPlayer(id) {
        this.db.connectToNode(id);
    }
    get currentPlayerName() {
        return this.db.get('currentPlayer', 'name');
    }
    shuffleStartPlayer() {
        this.ensurePlayersSorted();
        let inGame = this.allActivePlayers;
        let idx = Math.floor(Math.random() * inGame.length);
        this.setCurrentPlayer(inGame[idx].name);
    }
    nextPlayer() {
        this.ensurePlayersSorted();
        let inGame = this.others.filter(x => x.isInGame);
        let withLargerNumber = inGame.filter(x => x.orderNumber > this.myself.orderNumber);
        if (withLargerNumber.length > 0) {
            this.setCurrentPlayer(withLargerNumber[0].name);
        }
        else if (inGame.length === 0) {
            this.setCurrentPlayer(this.myself.name);
        }
        else {
            this.setCurrentPlayer(inGame[0].name);
        }
    }
    get allActivePlayers() {
        let ret = [this.myself, ...this.others].filter(x => x.isInGame);
        ret.sort((a, b) => a.orderNumber - b.orderNumber);
        return ret;
    }
    ensurePlayersSorted() {
        this.others.sort((a, b) => a.orderNumber - b.orderNumber);
    }
    setCurrentPlayer(name) {
        this.db.put('currentPlayer', 'name', name);
        this.sendGlobalNotification(name + ' ist am Zug');
    }
    sendMessage(msg) {
        this.sendMessageRaw(this.myself.makeColored(curTime() + ' ' + this.myself.name, msg));
    }
    sendGlobalNotification(msg) {
        this.sendMessageRaw({ color: 'black', tc: curTime() + ' ' + msg, tr: '' });
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
        this.myself.modifyCard(modifierCardId, targetId);
    }
    endGameForPlayer(nameOrId) {
        [this.myself, ...this.others].forEach(p => {
            if (p.id === nameOrId || p.name === nameOrId) {
                let oldState = this.db.get('endedPlayers', p.name);
                if (oldState) {
                    this.db.put('endedPlayers', p.name, false);
                    this.sendGlobalNotification(p.name + ' tritt wieder ins Spiel ein');
                }
                else {
                    this.db.put('endedPlayers', p.name, true);
                    this.sendGlobalNotification(p.name + ' verlässt das Spiel');
                }
            }
        });
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
/* harmony import */ var _hovered_card_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hovered-card.service */ "m6ay");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card/card.component */ "mJ8H");





function CardCollectionComponent_ng_container_3_span_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function CardCollectionComponent_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function CardCollectionComponent_ng_container_3_span_1_Template_span_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const c_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.hover(c_r3.type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardCollectionComponent_ng_container_3_span_1_ng_container_1_Template, 2, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r4 !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r3.text);
} }
function CardCollectionComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardCollectionComponent_ng_container_3_span_1_Template, 3, 2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.cardCombined());
} }
function CardCollectionComponent_ng_container_4_mrn_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mrn-card", 5);
} if (rf & 2) {
    const c_r10 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", c_r10)("act", ctx_r8.act);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardCollectionComponent_ng_container_4_mrn_card_2_Template, 1, 2, "mrn-card", 4);
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
    constructor(hc) {
        this.hc = hc;
        this.name = 'coll';
        this.act = '';
        this.collapsed = false;
    }
    ngOnInit() {
    }
    cardCombined() {
        let counts = new Map();
        this.collection.cards.forEach(c => {
            if (counts.has(c.name)) {
                counts.set(c.name, counts.get(c.name) + 1);
            }
            else {
                counts.set(c.name, 1);
            }
        });
        let types = [];
        this.collection.cards.forEach(c => {
            if (!types.find(t => t.name === c.type.name)) {
                types.push(c.type);
            }
        });
        return types
            .map(n => {
            if (counts.get(n.name) > 1) {
                return {
                    text: n.name + ' (x' + counts.get(n.name) + ')',
                    type: n
                };
            }
            else {
                return {
                    text: n.name,
                    type: n
                };
            }
        });
    }
    hover(c) {
        this.hc.setCard(c);
    }
}
CardCollectionComponent.ɵfac = function CardCollectionComponent_Factory(t) { return new (t || CardCollectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hovered_card_service__WEBPACK_IMPORTED_MODULE_1__["HoveredCardService"])); };
CardCollectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardCollectionComponent, selectors: [["mrn-card-collection"]], inputs: { name: "name", collection: "collection", act: "act", collapsed: "collapsed" }, decls: 5, vars: 4, consts: [[3, "click"], [4, "ngIf"], [3, "mouseover", 4, "ngFor", "ngForOf"], [3, "mouseover"], [3, "card", "act", 4, "ngFor", "ngForOf"], [3, "card", "act"]], template: function CardCollectionComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.name, ": ", ctx.collection.size, " Karten. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.collapsed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLWNvbGxlY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardCollectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mrn-card-collection',
                templateUrl: './card-collection.component.html',
                styleUrls: ['./card-collection.component.scss']
            }]
    }], function () { return [{ type: _hovered_card_service__WEBPACK_IMPORTED_MODULE_1__["HoveredCardService"] }]; }, { name: [{
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
        this.collection = () => new _domain_game_field__WEBPACK_IMPORTED_MODULE_2__["CardBag"]([]);
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
class DistributedDatabaseSystem {
    constructor(systemName, peer, ownPeerId, storage, clean) {
        this.systemName = systemName;
        this.peer = peer;
        this.storage = storage;
        this.ownPeerId = ownPeerId;
        this.time = 0;
        this.otherNames = [];
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
    connectToNode(id) {
        console.log(this.ownPeerId + ' connects to ' + id);
        var conn = this.peer.connect(id, { reliable: true });
        this.addNode(conn);
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
        conn.on('open', (d) => this.dumpDatabasesTo(conn));
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
    add(listDb, data) {
        this.put(listDb, this.ownPeerId + this.time, data);
    }
    put(database, id, data) {
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
    get(database, id) {
        if (!this.databases[database]) {
            return undefined;
        }
        return this.databases[database].get(id);
    }
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_collection_card_collection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../card-collection/card-collection.component */ "DBil");






function OtherPlayerComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mrn-card-collection", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mrn-card-collection", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r0.lifes, " Lebenspunkte, ", ctx_r0.handSize, " Handkarten, ", ctx_r0.librarySize, " Karten in der Bibliothek");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collection", ctx_r0.table);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collection", ctx_r0.graveyard)("collapsed", true);
} }
function OtherPlayerComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hat das Spiel verlassen. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class OtherPlayerComponent {
    constructor(field, cdr, ngz) {
        this.field = field;
        this.cdr = cdr;
        this.ngz = ngz;
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.me.subscribeForUpdate(() => this.ngz.run(() => this.cdr.markForCheck()), this.destroy);
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
    get isInGame() {
        return this.me.isInGame;
    }
    isCurrentPlayer() {
        return this.field.gameField.currentPlayerName === this.me.name;
    }
}
OtherPlayerComponent.ɵfac = function OtherPlayerComponent_Factory(t) { return new (t || OtherPlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_field_store_service__WEBPACK_IMPORTED_MODULE_2__["GameFieldStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
OtherPlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OtherPlayerComponent, selectors: [["mrn-other-player"]], inputs: { me: "me" }, decls: 5, vars: 7, consts: [[3, "id"], [4, "ngIf"], ["name", "Ausgelegt", 3, "collection"], ["name", "Friedhof", 3, "collection", "collapsed"]], template: function OtherPlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OtherPlayerComponent_ng_container_3_Template, 5, 6, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OtherPlayerComponent_ng_container_4_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("turn", ctx.isCurrentPlayer());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.name, " (", ctx.id, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isInGame);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isInGame);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _card_collection_card_collection_component__WEBPACK_IMPORTED_MODULE_4__["CardCollectionComponent"]], styles: ["legend.turn[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL290aGVyLXBsYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUFDSiIsImZpbGUiOiJvdGhlci1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsZWdlbmQudHVybiB7XG4gICAgY29sb3I6IHJlZDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtherPlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mrn-other-player',
                templateUrl: './other-player.component.html',
                styleUrls: ['./other-player.component.scss']
            }]
    }], function () { return [{ type: _game_field_store_service__WEBPACK_IMPORTED_MODULE_2__["GameFieldStoreService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { me: [{
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













function AppComponent_ng_container_0_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_0_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.continueGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Spiel fortsetzen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Spieler");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_container_0_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.formData.playerName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Deck-URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_container_0_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.formData.deckUrl = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_0_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.waitForOthers(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Neues Spiel starten");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_0_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.join(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Existierendem Spiel beitreten ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_ng_container_0_button_17_Template, 2, 0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.formData.playerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.formData.deckUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.gameExists());
} }
function AppComponent_ng_container_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_1_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.fieldService.gameField.shuffleStartPlayer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zuf\u00E4lligen Startspieler w\u00E4hlen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_container_1_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_1_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.fieldService.gameField.nextPlayer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zug beenden");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
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
function AppComponent_ng_container_1_mrn_other_player_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mrn-other-player", 13);
} if (rf & 2) {
    const p_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("me", p_r20);
} }
function AppComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ng_container_1_button_3_Template, 2, 0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_ng_container_1_button_4_Template, 2, 0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_ng_container_1_ng_container_5_Template, 4, 6, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.dice(6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "W\u00FCrfel 6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.diceX(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "W\u00FCrfel X ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.randomOpponent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "W\u00FCrfel Gegner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_1_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.endGameForPlayer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Spieler aus Spiel nehmen ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mrn-self-player");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_ng_container_1_mrn_other_player_18_Template, 1, 1, "mrn-other-player", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mrn-card-details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mrn-chat-box");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_1_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.addConnection(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Erneut verbinden ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "mrn-modal-card-collection", null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.fieldService.gameField.currentPlayerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isOwnTurn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.fieldService.gameField.allActivePlayers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.otherPlayers);
} }
class AppComponent {
    constructor(fieldService, http, ngz, cdr) {
        this.fieldService = fieldService;
        this.http = http;
        this.ngz = ngz;
        this.title = 'mrnOnline';
        this.state = 'initial';
        this.formData = {
            playerName: this.getSettingValue('mrnUserName', ''),
            deckUrl: this.getSettingValue('deck', './assets/stubData.json')
        };
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        fieldService.subscribe(f => f.registerPlayerChangeHandler(() => ngz.run(() => cdr.markForCheck())), this.destroy);
    }
    getSettingValue(key, defaultValue) {
        let paramValue = new URL(location.href).searchParams.get(key);
        if (paramValue) {
            return paramValue;
        }
        let storedValue = localStorage.getItem(key);
        if (storedValue) {
            return storedValue;
        }
        return defaultValue;
    }
    ngOnDestroy() {
        this.destroy.next();
    }
    gameExists() {
        let expected = 'mrn.' + this.formData.playerName;
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key === null || key === void 0 ? void 0 : key.startsWith(expected)) {
                return true;
            }
        }
        return false;
    }
    start(idToJoin, clean) {
        let name = this.formData.playerName;
        if (name) {
            localStorage.setItem('mrnUserName', name);
            this.createPeer({ name, idToJoin, clean });
        }
    }
    createPeer(s) {
        //var peer = new Peer(undefined, {host: 'localhost', port: 9000, key: 'peerjs', debug: 2});
        var peer = new Peer(undefined, {});
        peer.on('error', (err) => {
            console.log(err);
            alert('' + err);
        });
        peer.on('open', (id) => {
            //alert('My peer ID is: ' + id);
            this.ngz.run(() => this.loadDeckAndInitGame(peer, s));
        });
    }
    loadDeckAndInitGame(peer, s) {
        this.http.get(this.formData.deckUrl).subscribe((data) => {
            let deck;
            if (s.clean) {
                deck = this.mapDecksAndCards(data);
                console.log('loaded deck with ' + deck.length + ' cards');
            }
            else {
                deck = undefined;
            }
            this.fieldService.init(new _domain_game_field__WEBPACK_IMPORTED_MODULE_2__["GameField"](peer, peer.id, this.formData.playerName, deck, s.clean));
            if (s.idToJoin) {
                this.fieldService.gameField.connectToOtherPlayer(s.idToJoin);
            }
            this.state = 'joined';
        });
    }
    mapDecksAndCards(data) {
        let cards = {};
        for (let i = 0; i < data.cards.length; i++) {
            let card = data.cards[i];
            cards[card.name] = new _domain_game_field__WEBPACK_IMPORTED_MODULE_2__["CardType"](card.name, card.type, card.img);
        }
        let d = data.deck;
        let deck = [];
        for (let i = 0; i < d.length; i++) {
            let card = d[i];
            deck.push(new _domain_game_field__WEBPACK_IMPORTED_MODULE_2__["Card"](cards[card], this.formData.playerName));
        }
        return deck;
    }
    join() {
        var other = prompt('ID des Mitspielers');
        if (other) {
            this.start(other, true);
        }
    }
    addConnection() {
        var other = prompt('ID des Mitspielers');
        if (other) {
            this.fieldService.gameField.connectToOtherPlayer(other);
        }
    }
    waitForOthers() {
        this.start(undefined, true);
    }
    continueGame() {
        this.start(undefined, false);
    }
    diceX() {
        let x = prompt('Anzahl Seiten', '20');
        if (x) {
            this.dice(parseInt(x));
        }
    }
    dice(sides) {
        let n = Math.floor(Math.random() * sides) + 1;
        this.fieldService.gameField.myself.sendNotification('würfelt ' + n + ' (von ' + sides + ')');
    }
    randomOpponent() {
        let opponents = this.fieldService.gameField.others.filter(p => p.isInGame);
        if (opponents.length === 0) {
            return;
        }
        let n = Math.floor(Math.random() * opponents.length);
        this.fieldService.gameField.myself.sendNotification('würfelt Gegner ' + opponents[n].name);
    }
    isOwnTurn() {
        return this.fieldService.gameField.currentPlayerName === this.fieldService.gameField.myself.name;
    }
    get otherPlayers() {
        return this.fieldService.gameField.others;
    }
    endGameForPlayer() {
        let nameOrId = prompt('Spieler', this.fieldService.gameField.myself.name);
        if (nameOrId) {
            this.fieldService.gameField.endGameForPlayer(nameOrId);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_field_store_service__WEBPACK_IMPORTED_MODULE_3__["GameFieldStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["type", "text", "name", "playerName", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "deckUrl", 3, "ngModel", "ngModelChange"], [3, "click"], [3, "click", 4, "ngIf"], [1, "grid-parent"], [1, "grid-top"], [4, "ngFor", "ngForOf"], [1, "grid-center"], [3, "me", 4, "ngFor", "ngForOf"], [1, "grid-right"], ["mcc", ""], [1, "playerLink", 3, "href"], [3, "me"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_ng_container_0_Template, 18, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_1_Template, 26, 4, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state === "initial");
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
    }], function () { return [{ type: _game_field_store_service__WEBPACK_IMPORTED_MODULE_3__["GameFieldStoreService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat-box/chat-box.component */ "8Yrd");
/* harmony import */ var _self_player_self_player_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./self-player/self-player.component */ "3Hr+");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card/card.component */ "mJ8H");
/* harmony import */ var _other_player_other_player_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./other-player/other-player.component */ "OGS3");
/* harmony import */ var _card_collection_card_collection_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card-collection/card-collection.component */ "DBil");
/* harmony import */ var _card_details_card_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./card-details/card-details.component */ "jXAV");
/* harmony import */ var _modal_card_collection_modal_card_collection_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modal-card-collection/modal-card-collection.component */ "7u39");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _is_safe_url_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./is-safe-url.pipe */ "GGrU");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_4__["ChatBoxComponent"],
        _self_player_self_player_component__WEBPACK_IMPORTED_MODULE_5__["SelfPlayerComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"],
        _other_player_other_player_component__WEBPACK_IMPORTED_MODULE_7__["OtherPlayerComponent"],
        _card_collection_card_collection_component__WEBPACK_IMPORTED_MODULE_8__["CardCollectionComponent"],
        _card_details_card_details_component__WEBPACK_IMPORTED_MODULE_9__["CardDetailsComponent"],
        _modal_card_collection_modal_card_collection_component__WEBPACK_IMPORTED_MODULE_10__["ModalCardCollectionComponent"],
        _is_safe_url_pipe__WEBPACK_IMPORTED_MODULE_12__["IsSafeUrlPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_4__["ChatBoxComponent"],
                    _self_player_self_player_component__WEBPACK_IMPORTED_MODULE_5__["SelfPlayerComponent"],
                    _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"],
                    _other_player_other_player_component__WEBPACK_IMPORTED_MODULE_7__["OtherPlayerComponent"],
                    _card_collection_card_collection_component__WEBPACK_IMPORTED_MODULE_8__["CardCollectionComponent"],
                    _card_details_card_details_component__WEBPACK_IMPORTED_MODULE_9__["CardDetailsComponent"],
                    _modal_card_collection_modal_card_collection_component__WEBPACK_IMPORTED_MODULE_10__["ModalCardCollectionComponent"],
                    _is_safe_url_pipe__WEBPACK_IMPORTED_MODULE_12__["IsSafeUrlPipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
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
/* harmony import */ var _hovered_card_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hovered-card.service */ "m6ay");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class CardDetailsComponent {
    constructor(hc) {
        this.hc = hc;
        //this.current = new CardType('MRN', 'https://c1.scryfall.com/file/scryfall-cards/normal/front/a/9/a9f9c279-e382-4feb-9575-196e7cf5d7dc.jpg?1562799139');
    }
    ngOnInit() {
    }
    get current() {
        return this.hc.current();
    }
}
CardDetailsComponent.ɵfac = function CardDetailsComponent_Factory(t) { return new (t || CardDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hovered_card_service__WEBPACK_IMPORTED_MODULE_1__["HoveredCardService"])); };
CardDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardDetailsComponent, selectors: [["mrn-card-details"]], decls: 3, vars: 6, consts: [["id", "largeCard", "width", "240px", 3, "src", "title"]], template: function CardDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    } if (rf & 2) {
        let tmp_0_0 = null;
        let tmp_1_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.current)) == null ? null : tmp_0_0.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx.current)) == null ? null : tmp_1_0.name);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mrn-card-details',
                templateUrl: './card-details.component.html',
                styleUrls: ['./card-details.component.scss']
            }]
    }], function () { return [{ type: _hovered_card_service__WEBPACK_IMPORTED_MODULE_1__["HoveredCardService"] }]; }, null); })();


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



class HoveredCardService {
    constructor() {
        this.store = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    setCard(c) {
        this.store.next(c);
    }
    current() {
        return this.store;
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
        mode.subscribe(() => cdr.markForCheck(), this.destroy);
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
        this.hc.setCard(c.type);
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
        this.mcc.show(() => new _domain_game_field__WEBPACK_IMPORTED_MODULE_2__["CardBag"](this.card.modifiers), 'Kartendetails', this.intersectActions(['HA', 'GR', 'EX', 'PL']));
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [_is_safe_url_pipe__WEBPACK_IMPORTED_MODULE_8__["IsSafeUrlPipe"]], styles: [".tapped[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n\n.blocker[_ngcontent-%COMP%] {\n  transform: rotate(30deg);\n}\n\nimg.card[_ngcontent-%COMP%] {\n  width: 120px;\n}\n\n.cardStack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-last-of-type(2) {\n  padding-left: 10px;\n  padding-bottom: 20px;\n}\n\n.cardStack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-last-of-type(3) {\n  padding-left: 20px;\n  padding-bottom: 40px;\n}\n\n.cardStack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-last-of-type(4) {\n  padding-left: 30px;\n  padding-bottom: 60px;\n}\n\n.cardStack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-last-of-type(5) {\n  padding-left: 40px;\n  padding-bottom: 80px;\n}\n\n.cardStack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-last-of-type(6) {\n  padding-left: 50px;\n  padding-bottom: 100px;\n}\n\n.cardStack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-last-of-type(7) {\n  padding-left: 60px;\n  padding-bottom: 120px;\n}\n\n.cardStack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-last-of-type(8) {\n  padding-left: 70px;\n  padding-bottom: 140px;\n}\n\n.cardStack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-last-of-type(9) {\n  padding-left: 80px;\n  padding-bottom: 160px;\n}\n\n.cardStack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-last-of-type(10) {\n  padding-left: 90px;\n  padding-bottom: 180px;\n}\n\n.cardStack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n  position: relative;\n}\n\n.cardStack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:not(:first-child) {\n  position: absolute;\n  left: 0px;\n  bottom: 0px;\n}\n\n.counter[_ngcontent-%COMP%] {\n  position: absolute;\n  color: red;\n  background-color: black;\n  font-size: 20pt;\n  left: 25px;\n  top: 60px;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 20px;\n  left: 55px;\n  background-color: #f1f1f1;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  padding: 5px 5px;\n  text-decoration: none;\n  display: block;\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtBQUNKOztBQUVBO0VBQ0ksd0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBLGtFQUFBOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUNBLHlDQUFBOztBQUNBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0NBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQUEsOEJBQUE7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFHSjs7QUFEQSw0Q0FBQTs7QUFDQTtFQUEyQixzQkFBQTtBQUszQjs7QUFKQSxvQ0FBQTs7QUFDQTtFQUFtQyxjQUFBO0FBUW5DIiwiZmlsZSI6ImNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFwcGVkIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi5ibG9ja2VyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG59XG5cbmltZy5jYXJkIHtcbiAgICB3aWR0aDogMTIwcHg7XG59XG5cbi5jYXJkU3RhY2sgaW1nOm50aC1sYXN0LW9mLXR5cGUoMikge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLmNhcmRTdGFjayBpbWc6bnRoLWxhc3Qtb2YtdHlwZSgzKSB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG4uY2FyZFN0YWNrIGltZzpudGgtbGFzdC1vZi10eXBlKDQpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XG59XG5cbi5jYXJkU3RhY2sgaW1nOm50aC1sYXN0LW9mLXR5cGUoNSkge1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcbn1cblxuLmNhcmRTdGFjayBpbWc6bnRoLWxhc3Qtb2YtdHlwZSg2KSB7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cblxuLmNhcmRTdGFjayBpbWc6bnRoLWxhc3Qtb2YtdHlwZSg3KSB7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMjBweDtcbn1cblxuLmNhcmRTdGFjayBpbWc6bnRoLWxhc3Qtb2YtdHlwZSg4KSB7XG4gICAgcGFkZGluZy1sZWZ0OiA3MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNDBweDtcbn1cblxuLmNhcmRTdGFjayBpbWc6bnRoLWxhc3Qtb2YtdHlwZSg5KSB7XG4gICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNjBweDtcbn1cblxuLmNhcmRTdGFjayBpbWc6bnRoLWxhc3Qtb2YtdHlwZSgxMCkge1xuICAgIHBhZGRpbmctbGVmdDogOTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTgwcHg7XG59XG5cbi5jYXJkU3RhY2sgaW1nOmZpcnN0LWNoaWxkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJkU3RhY2sgaW1nOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMHB4O1xuICAgIGJvdHRvbTogMHB4O1xufVxuXG4uY291bnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAyMHB0O1xuICAgIGxlZnQ6IDI1cHg7XG4gICAgdG9wOiA2MHB4O1xufVxuXG4vKiBUaGUgY29udGFpbmVyIDxkaXY+IC0gbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBkcm9wZG93biBjb250ZW50ICovXG4uZHJvcGRvd24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59ICBcbi8qIERyb3Bkb3duIENvbnRlbnQgKEhpZGRlbiBieSBEZWZhdWx0KSAqL1xuLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiA1NXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICB6LWluZGV4OiAxO1xufVxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLyogQ2hhbmdlIGNvbG9yIG9mIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7ZGlzcGxheTogYmxvY2s7fVxuIl19 */"] });
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