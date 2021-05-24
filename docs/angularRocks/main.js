(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\MK\Coding_2021-04\Kubide\angularRocks\src\main.ts */"zUnb");


/***/ }),

/***/ "320Y":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



const _c0 = function () { return [""]; };
const _c1 = function () { return ["new"]; };
const _c2 = function () { return ["crud"]; };
class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
    scrollToElement($element) {
        //console.log($element);
        const div = document.getElementById($element);
        div.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 19, vars: 8, consts: [[1, "spacer"], [1, "header"], [1, "menu-4"], ["src", "../../../assets/images/icon/klipartz.com.png", "alt", "rock and roll logo", "width", "70", 1, "pointer", "pb-3", 3, "routerLink"], [1, "current"], ["data-hover", "List", 3, "routerLink"], ["data-hover", "Add Band", 3, "routerLink"], ["data-hover", "Edit & Delete", 3, "routerLink"], ["data-hover", "Contact", 3, "click"], [1, "clearfix", "w-60", "pb-1", "m-1"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add Band");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Edit & Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_15_listener() { return ctx.scrollToElement("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%]{\r\n    background:#1b1b2b;\r\n    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);\r\n    padding:75px;\r\n    text-align:center;\r\n    font-family: 'Oswald', sans-serif;\r\n    font-size: 18px;\r\n    height: 100vh;\r\n  }\r\n  h1[_ngcontent-%COMP%]{\r\n    color:#212121;\r\n    font-weight:100;\r\n  }\r\n  .pointer[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n  }\r\n  .spacer[_ngcontent-%COMP%] {\r\n    padding: 10px 0;\r\n   }\r\n  .menu-4[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n    margin-bottom: 0;\r\n  }\r\n  .menu-4[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    transition: all 0.35s ease;\r\n  }\r\n  .menu-4[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    list-style: outside none none;\r\n    margin: 0 1.5em;\r\n    overflow: hidden;\r\n  }\r\n  .menu-4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 0.3em 0;\r\n    color: #212121;\r\n    position: relative;\r\n    display: inline-block;\r\n    letter-spacing: 1px;\r\n    margin: 0;\r\n    text-decoration: none;\r\n  }\r\n  .menu-4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before, .menu-4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\r\n    position: absolute;\r\n    transition: all 0.35s ease;\r\n  }\r\n  .menu-4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\r\n    bottom: 100%;\r\n    display: block;\r\n    height: 3px;\r\n    width: 100%;\r\n    content: \"\";\r\n    background-color: black;\r\n  }\r\n  .menu-4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\r\n    padding: 0.3em 0;\r\n    position: absolute;\r\n    bottom: 100%;\r\n    left: 0;\r\n    content: attr(data-hover);\r\n    color: #212121;\r\n    white-space: nowrap;\r\n  }\r\n  .menu-4[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], .menu-4[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    transform: translateY(100%);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixtRUFBbUU7SUFDbkUsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7R0FDaEI7RUFFRDtJQUNFLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usc0JBQXNCO0lBRXRCLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxxQkFBcUI7RUFDdkI7RUFDQTs7SUFFRSxrQkFBa0I7SUFFbEIsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osT0FBTztJQUNQLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCO0VBQ0E7O0lBRUUsMkJBQTJCO0VBQzdCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgYm9keXtcclxuICAgIGJhY2tncm91bmQ6IzFiMWIyYjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNjZmQ5ZGYgMCUsICNlMmViZjAgMTAwJSk7XHJcbiAgICBwYWRkaW5nOjc1cHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIGgxe1xyXG4gICAgY29sb3I6IzIxMjEyMTtcclxuICAgIGZvbnQtd2VpZ2h0OjEwMDtcclxuICB9XHJcbiAgLnBvaW50ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5zcGFjZXIge1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICB9XHJcblxyXG4gIC5tZW51LTQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICAubWVudS00ICoge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZTtcclxuICB9XHJcbiAgLm1lbnUtNCBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBsaXN0LXN0eWxlOiBvdXRzaWRlIG5vbmUgbm9uZTtcclxuICAgIG1hcmdpbjogMCAxLjVlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5tZW51LTQgYSB7XHJcbiAgICBwYWRkaW5nOiAwLjNlbSAwO1xyXG4gICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAubWVudS00IGE6YmVmb3JlLFxyXG4gIC5tZW51LTQgYTphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2U7XHJcbiAgfVxyXG4gIC5tZW51LTQgYTpiZWZvcmUge1xyXG4gICAgYm90dG9tOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICAubWVudS00IGE6YWZ0ZXIge1xyXG4gICAgcGFkZGluZzogMC4zZW0gMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtaG92ZXIpO1xyXG4gICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuICAubWVudS00IGxpOmhvdmVyIGEsXHJcbiAgLm1lbnUtNCAuY3VycmVudCBhIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuICB9XHJcbiBcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8D7W":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class PagesComponent {
    constructor() { }
    ngOnInit() {
    }
}
PagesComponent.ɵfac = function PagesComponent_Factory(t) { return new (t || PagesComponent)(); };
PagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagesComponent, selectors: [["app-pages"]], decls: 1, vars: 0, template: function PagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pages',
                templateUrl: './pages.component.html',
                styles: []
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

/***/ "DuFg":
/*!**********************************************!*\
  !*** ./src/app/pages/crud/crud.component.ts ***!
  \**********************************************/
/*! exports provided: CrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudComponent", function() { return CrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/share.service */ "dz5x");
/* harmony import */ var _services_rock_bands_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/rock-bands.service */ "xhA/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");






function CrudComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CrudComponent_li_6_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.openForEdit(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CrudComponent_li_6_Template_i_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onClick(item_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name);
} }
class CrudComponent {
    constructor(shareService, rockBandsService) {
        this.shareService = shareService;
        this.rockBandsService = rockBandsService;
    }
    ngOnInit() {
        //Array from list-component shared by share.service:
        // this.arrFromService = this.shareService.getArray();
        // console.log(this.arrFromService);
        this.rockBandsService.getAll()
            .then(rockBands => {
            this.crudList = rockBands;
        })
            .catch(error => console.log(error));
    }
    onClick(pId) {
        alert("Are you sure?\nYou won't be able to revert this!");
        for (let i = 0; i < this.crudList.length; i++) {
            if (this.crudList[i].id === pId) {
                this.crudList.splice(i, 1);
            }
        }
    }
    openForEdit(band) {
        document.getElementById('name')["value"] = band.name;
        document.getElementById('country')["value"] = band.country;
        document.getElementById('members')["value"] = band.members;
        document.getElementById('years')["value"] = band.years;
        document.getElementById('web')["value"] = band.web;
    }
    onSubmit(formValues) {
        console.log(formValues);
    }
}
CrudComponent.ɵfac = function CrudComponent_Factory(t) { return new (t || CrudComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_share_service__WEBPACK_IMPORTED_MODULE_1__["ShareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_rock_bands_service__WEBPACK_IMPORTED_MODULE_2__["RockBandsService"])); };
CrudComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CrudComponent, selectors: [["app-crud"]], decls: 23, vars: 1, consts: [[1, "container"], [1, "row"], [1, "col-md-8", "mb-4"], [1, "title"], [1, "list-group"], ["class", "list-group-item list-group-item-action", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [3, "ngSubmit"], ["formulario", "ngForm"], [1, "form-group", "mb-1"], ["type", "text", "name", "name", "value", "", "id", "name", "placeholder", "Name", "ngModel", "", 1, "form-control"], ["type", "text", "name", "country", "value", "", "id", "country", "placeholder", "Country", "ngModel", "", 1, "form-control"], ["type", "text", "name", "members", "value", "", "id", "members", "placeholder", "Members", "ngModel", "", 1, "form-control"], ["type", "text", "name", "years", "value", "", "id", "years", "placeholder", "Active years", "ngModel", "", 1, "form-control"], ["type", "text", "name", "web", "value", "", "id", "web", "placeholder", "Official website", "ngModel", "", 1, "form-control"], ["type", "submit", "value", "Edit", 1, "btn", "btn-info"], [1, "list-group-item", "list-group-item-action", 3, "click"], [1, "d-flex", "justify-content-between"], [1, "badge-css"], [1, "pointer"], [1, "fas", "fa-times", "pointer", "mt-1", 3, "click"]], template: function CrudComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Delete a Band:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CrudComponent_li_6_Template, 7, 2, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Edit a Band:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CrudComponent_Template_form_ngSubmit_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return ctx.onSubmit(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.crudList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["img[_ngcontent-%COMP%]{\r\n    padding-top: 120px;\r\n    display:block;\r\n    margin:auto;\r\n}\r\n.badge-css[_ngcontent-%COMP%]{\r\n    background-color:#5bc0de;\r\n    padding-right: 5px;\r\n    padding-left: 5px;\r\n    border-radius: 10px;\r\n    margin-right: 20px;\r\n}\r\n.list-group[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%]{\r\n    color:gray;\r\n}\r\n.list-group[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%]:hover{\r\n    color:red;\r\n}\r\n.pointer[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n    width: 92%;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    margin-top: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNydWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVztBQUNmO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImNydWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIHBhZGRpbmctdG9wOiAxMjBweDtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBtYXJnaW46YXV0bztcclxufVxyXG4uYmFkZ2UtY3Nze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNWJjMGRlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5saXN0LWdyb3VwIC5mYXN7XHJcbiAgICBjb2xvcjpncmF5O1xyXG59XHJcbi5saXN0LWdyb3VwIC5mYXM6aG92ZXJ7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn1cclxuLnBvaW50ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJ0bntcclxuICAgIHdpZHRoOiA5MiU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrudComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-crud',
                templateUrl: './crud.component.html',
                styleUrls: ['./crud.component.css']
            }]
    }], function () { return [{ type: _services_share_service__WEBPACK_IMPORTED_MODULE_1__["ShareService"] }, { type: _services_rock_bands_service__WEBPACK_IMPORTED_MODULE_2__["RockBandsService"] }]; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "320Y");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "jQpT");






class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]
                ],
                //I export it in case I need these components outside of this module (shared.module.ts) 
                exports: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/header/header.component */ "320Y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");





class AppComponent {
    constructor() {
        this.title = 'angularRocks';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "U5Cf":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_rock_bands_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/rock-bands.service */ "xhA/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");






function DashboardComponent_img_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 12);
} }
function DashboardComponent_img_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 13);
} }
function DashboardComponent_img_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 14);
} }
class DashboardComponent {
    constructor(activatedRoute, rockBandsService) {
        this.activatedRoute = activatedRoute;
        this.rockBandsService = rockBandsService;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(params);
            const bandId = parseInt(params.bandId);
            this.bandSelected = yield this.rockBandsService.getById(bandId);
        }));
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_rock_bands_service__WEBPACK_IMPORTED_MODULE_3__["RockBandsService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 35, vars: 14, consts: [[1, "cointainer"], [1, "band-card"], [1, "card"], [1, "band-name"], [3, "src", "title"], [1, "pointer", 3, "href"], [1, "country"], [1, "img-flag", 3, "ngSwitch"], ["src", "../../../assets/images/flags/UK_flag.png", "title", "British Flag", "style", "transform: scale(0.2); height: 100px;", 4, "ngSwitchCase"], ["src", "../../../assets/images/flags/USA_flag.jpg", "title", "USA Flag", "style", "transform: scale(0.2); height: 100px;", 4, "ngSwitchCase"], ["src", "../../../assets/images/flags/AU_flag.png", "title", "Australian Flag", "style", "transform: scale(0.2); height: 100px;", 4, "ngSwitchCase"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtrustConstantResourceUrl"]("https://www.youtube.com/embed/tgbNymZ7vqY")], ["src", "../../../assets/images/flags/UK_flag.png", "title", "British Flag", 2, "transform", "scale(0.2)", "height", "100px"], ["src", "../../../assets/images/flags/USA_flag.jpg", "title", "USA Flag", 2, "transform", "scale(0.2)", "height", "100px"], ["src", "../../../assets/images/flags/AU_flag.png", "title", "Australian Flag", 2, "transform", "scale(0.2)", "height", "100px"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Members:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Origin: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Genres: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Active years: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Website: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, DashboardComponent_img_31_Template, 1, 0, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, DashboardComponent_img_32_Template, 1, 0, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, DashboardComponent_img_33_Template, 1, 0, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "iframe", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.bandSelected == null ? null : ctx.bandSelected.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx.bandSelected == null ? null : ctx.bandSelected.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.bandSelected == null ? null : ctx.bandSelected.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.bandSelected == null ? null : ctx.bandSelected.members, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.bandSelected == null ? null : ctx.bandSelected.origin, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.bandSelected == null ? null : ctx.bandSelected.genres, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.bandSelected == null ? null : ctx.bandSelected.years, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.bandSelected == null ? null : ctx.bandSelected.web, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.bandSelected == null ? null : ctx.bandSelected.web);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.bandSelected == null ? null : ctx.bandSelected.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.bandSelected == null ? null : ctx.bandSelected.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "United Kingdom");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "United States");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "Australia");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"]], styles: [".band-card[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    margin-bottom: 2rem;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n width: 300px;\r\n border: 1px solid lightgrey; \r\n padding: 10px; \r\n margin: 10px;\r\n border-radius: 20px;\r\n box-shadow: 5px 6px 8px 1px lightgrey;\r\n}\r\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-bottom: 0%;\r\n}\r\n.band-name[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n    margin-bottom: 2rem;\r\n    cursor: pointer;\r\n}\r\n.country[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content:center;\r\n    padding-left: 1.5rem;\r\n    height: 50px;\r\n}\r\n.country[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin: 0%;\r\n}\r\n.country[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    margin: 0%;\r\n}\r\niframe[_ngcontent-%COMP%]{\r\nwidth: 95%;\r\nheight: 50%;\r\nmargin-bottom: 5px;\r\nmargin-left: 2%;\r\n}\r\n.pointer[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osMkJBQTJCO0NBQzNCLGFBQWE7Q0FDYixZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLHFDQUFxQztBQUN0QztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtBQUNBLFVBQVU7QUFDVixXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLGVBQWU7QUFDZjtBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5kLWNhcmR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbi5jYXJke1xyXG4gd2lkdGg6IDMwMHB4O1xyXG4gYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5OyBcclxuIHBhZGRpbmc6IDEwcHg7IFxyXG4gbWFyZ2luOiAxMHB4O1xyXG4gYm9yZGVyLXJhZGl1czogMjBweDtcclxuIGJveC1zaGFkb3c6IDVweCA2cHggOHB4IDFweCBsaWdodGdyZXk7XHJcbn1cclxuLmNhcmQgcHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAlO1xyXG59XHJcbi5iYW5kLW5hbWV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW1ne1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY291bnRyeXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5jb3VudHJ5IHB7XHJcbiAgICBtYXJnaW46IDAlO1xyXG59XHJcbi5jb3VudHJ5IGltZ3tcclxuICAgIG1hcmdpbjogMCU7XHJcbn1cclxuaWZyYW1le1xyXG53aWR0aDogOTUlO1xyXG5oZWlnaHQ6IDUwJTtcclxubWFyZ2luLWJvdHRvbTogNXB4O1xyXG5tYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuLnBvaW50ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_rock_bands_service__WEBPACK_IMPORTED_MODULE_3__["RockBandsService"] }]; }, null); })();


/***/ }),

/***/ "WJQx":
/*!******************************************************!*\
  !*** ./src/app/pages/add-band/add-band.component.ts ***!
  \******************************************************/
/*! exports provided: AddBandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBandComponent", function() { return AddBandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _services_rock_bands_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/rock-bands.service */ "xhA/");
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/share.service */ "dz5x");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");








function AddBandComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
// import { v4 as uuidv4 } from 'uuid';
class AddBandComponent {
    constructor(rockBandsService, shareService, router) {
        this.rockBandsService = rockBandsService;
        this.shareService = shareService;
        this.router = router;
        this.formulario = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            // id: uuidv4(),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('0'),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            members: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            img: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('../../../assets/images/default/no-image.png'),
            // icon: new FormControl(''),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            web: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            active: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            origin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            genres: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            years: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        // console.log(this.formulario.value);
        this.shareService.addBand(this.formulario.value);
        this.formulario.reset();
        alert('New Band added!');
        this.router.navigate(['']);
    }
}
AddBandComponent.ɵfac = function AddBandComponent_Factory(t) { return new (t || AddBandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_rock_bands_service__WEBPACK_IMPORTED_MODULE_2__["RockBandsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_share_service__WEBPACK_IMPORTED_MODULE_3__["ShareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AddBandComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddBandComponent, selectors: [["app-add-band"]], decls: 29, vars: 3, consts: [[1, "container"], [1, "card"], [1, "formulario", 3, "formGroup", "ngSubmit"], [1, "title"], [1, "form-group", "m-3"], ["type", "hidden", "formControlName", "id", 1, "form-control", "shadow-sm", "p-1", "bg-white", "rounded"], ["type", "text", "formControlName", "name", "placeholder", "Band name [required]", 1, "form-control", "shadow-sm", "p-1", "bg-white", "rounded"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "formControlName", "members", "placeholder", "Band members", 1, "form-control", "shadow-sm", "p-1", "bg-white", "rounded"], [1, "label"], ["type", "file", "formControlName", "img", "title", "Choose a video please", 1, "form-control", "shadow-sm", "p-1", "bg-white", "rounded"], ["type", "text", "formControlName", "country", "placeholder", "Band country", 1, "form-control", "shadow-sm", "p-1", "bg-white", "rounded"], ["type", "text", "formControlName", "web", "placeholder", "Band website", 1, "form-control", "shadow-sm", "p-1", "bg-white", "rounded"], ["type", "text", "formControlName", "origin", "placeholder", "Band origin", 1, "form-control", "shadow-sm", "p-1", "bg-white", "rounded"], ["type", "text", "formControlName", "genres", "placeholder", "Band genres", 1, "form-control", "shadow-sm", "p-1", "bg-white", "rounded"], ["type", "text", "formControlName", "years", "placeholder", "Band active years", 1, "form-control", "shadow-sm", "p-1", "bg-white", "rounded"], ["type", "text", "formControlName", "description", "placeholder", "Band short description", 1, "form-control", "shadow-sm", "p-1", "bg-white", "rounded"], ["type", "submit", "value", "Enviar", 1, "btn", "btn-block", "btn-info", "mb-3", 3, "disabled"], [1, "text-danger"]], template: function AddBandComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddBandComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add a new Band:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddBandComponent_p_9_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Band image:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formulario);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formulario.get("name").hasError("required") && ctx.formulario.get("name").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formulario.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".card[_ngcontent-%COMP%]{\r\n    margin-bottom: 2rem;\r\n}\r\n.title[_ngcontent-%COMP%]{\r\n    margin-left: 1rem;\r\n}\r\n.label[_ngcontent-%COMP%]{\r\n    margin-left: 1rem;\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n    width: 97%;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1iYW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJhZGQtYmFuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbi50aXRsZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcbi5sYWJlbHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcbi5idG57XHJcbiAgICB3aWR0aDogOTclO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddBandComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-band',
                templateUrl: './add-band.component.html',
                styleUrls: ['./add-band.component.css']
            }]
    }], function () { return [{ type: _services_rock_bands_service__WEBPACK_IMPORTED_MODULE_2__["RockBandsService"] }, { type: _services_share_service__WEBPACK_IMPORTED_MODULE_3__["ShareService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pages.module */ "dgmN");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");


//Modules


//Components



class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__["PagesModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__["PagesModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__["PagesModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-routing.module */ "vY5A");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "U5Cf");
/* harmony import */ var _error404_error404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error404/error404.component */ "gf0u");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list/list.component */ "kzYG");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages.component */ "8D7W");
/* harmony import */ var _add_band_add_band_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-band/add-band.component */ "WJQx");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _crud_crud_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./crud/crud.component */ "DuFg");





//Components








class PagesModule {
}
PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
        _error404_error404_component__WEBPACK_IMPORTED_MODULE_6__["Error404Component"],
        _list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"],
        _add_band_add_band_component__WEBPACK_IMPORTED_MODULE_9__["AddBandComponent"],
        _crud_crud_component__WEBPACK_IMPORTED_MODULE_11__["CrudComponent"],
        _pages_component__WEBPACK_IMPORTED_MODULE_8__["PagesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]], exports: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
        _error404_error404_component__WEBPACK_IMPORTED_MODULE_6__["Error404Component"],
        _add_band_add_band_component__WEBPACK_IMPORTED_MODULE_9__["AddBandComponent"],
        _crud_crud_component__WEBPACK_IMPORTED_MODULE_11__["CrudComponent"],
        _pages_component__WEBPACK_IMPORTED_MODULE_8__["PagesComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                    _error404_error404_component__WEBPACK_IMPORTED_MODULE_6__["Error404Component"],
                    _list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"],
                    _add_band_add_band_component__WEBPACK_IMPORTED_MODULE_9__["AddBandComponent"],
                    _crud_crud_component__WEBPACK_IMPORTED_MODULE_11__["CrudComponent"],
                    _pages_component__WEBPACK_IMPORTED_MODULE_8__["PagesComponent"]
                ],
                exports: [
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                    _error404_error404_component__WEBPACK_IMPORTED_MODULE_6__["Error404Component"],
                    _add_band_add_band_component__WEBPACK_IMPORTED_MODULE_9__["AddBandComponent"],
                    _crud_crud_component__WEBPACK_IMPORTED_MODULE_11__["CrudComponent"],
                    _pages_component__WEBPACK_IMPORTED_MODULE_8__["PagesComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "dz5x":
/*!*******************************************!*\
  !*** ./src/app/services/share.service.ts ***!
  \*******************************************/
/*! exports provided: ShareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareService", function() { return ShareService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ShareService {
    constructor() {
        this.newBands;
        this.newBands$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    setArray(array) {
        this.arrayFromService = array;
    }
    getArray() {
        return this.arrayFromService;
    }
    addBand(pBand) {
        this.newBands$.next(pBand);
    }
    getBands$() {
        return this.newBands$.asObservable();
    }
}
ShareService.ɵfac = function ShareService_Factory(t) { return new (t || ShareService)(); };
ShareService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShareService, factory: ShareService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShareService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "gf0u":
/*!******************************************************!*\
  !*** ./src/app/pages/error404/error404.component.ts ***!
  \******************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



const _c0 = function () { return [""]; };
class Error404Component {
    // Actually year:
    // year = new Date().getFullYear();
    constructor() { }
    ngOnInit() {
    }
}
Error404Component.ɵfac = function Error404Component_Factory(t) { return new (t || Error404Component)(); };
Error404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Error404Component, selectors: [["app-error404"]], decls: 9, vars: 2, consts: [["id", "wrapper"], ["id", "main"], [1, "fof"], [1, "text-uppercase"], [1, "btn", "btn-light", "btn-rounded", "mt-4", 3, "routerLink"]], template: function Error404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Error 404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Page Not Found !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Back to home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["*[_ngcontent-%COMP%]{\r\n    transition: all 0.6s;\r\n}\r\nhtml[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\nbody[_ngcontent-%COMP%]{\r\n    font-family: 'Lato', sans-serif;\r\n    color: #888;\r\n    margin: 0;\r\n}\r\n#main[_ngcontent-%COMP%]{\r\n    display: table;\r\n    width: 100%;\r\n    height: 100vh;\r\n    text-align: center;\r\n}\r\n.fof[_ngcontent-%COMP%]{\r\n      display: table-cell;\r\n      vertical-align: middle;\r\n}\r\n.fof[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n      font-size: 50px;\r\n      display: inline-block;\r\n      padding-right: 12px;\r\n      animation: type .5s alternate infinite;\r\n}\r\n@keyframes type{\r\n      from{box-shadow: inset -3px 0px 0px #888;}\r\n      to{box-shadow: inset -3px 0px 0px transparent;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yNDA0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixXQUFXO0lBQ1gsU0FBUztBQUNiO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtNQUNNLG1CQUFtQjtNQUNuQixzQkFBc0I7QUFDNUI7QUFDQTtNQUNNLGVBQWU7TUFDZixxQkFBcUI7TUFDckIsbUJBQW1CO01BQ25CLHNDQUFzQztBQUM1QztBQUNBO01BQ00sS0FBSyxtQ0FBbUMsQ0FBQztNQUN6QyxHQUFHLDBDQUEwQyxDQUFDO0FBQ3BEIiwiZmlsZSI6ImVycm9yNDA0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XHJcbn1cclxuaHRtbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuYm9keXtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzg4ODtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4jbWFpbntcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb2Z7XHJcbiAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLmZvZiBoMXtcclxuICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgICAgIGFuaW1hdGlvbjogdHlwZSAuNXMgYWx0ZXJuYXRlIGluZmluaXRlO1xyXG59XHJcbkBrZXlmcmFtZXMgdHlwZXtcclxuICAgICAgZnJvbXtib3gtc2hhZG93OiBpbnNldCAtM3B4IDBweCAwcHggIzg4ODt9XHJcbiAgICAgIHRve2JveC1zaGFkb3c6IGluc2V0IC0zcHggMHB4IDBweCB0cmFuc3BhcmVudDt9XHJcbn1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Error404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error404',
                templateUrl: './error404.component.html',
                //stylesUrls
                styleUrls: ['./error404.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



const _c0 = function () { return ["mailto:contacto@example.com"]; };
class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 48, vars: 2, consts: [[1, "bg-dark", "page-footer", "font-small", "blue", "pt-4"], [1, "container"], ["id", "contact", 1, "container-fluid", "text-center", "text-md-left"], [1, "row"], [1, "col-md-4", "mt-md-0", "mt-3"], [1, "text-uppercase"], [1, "link"], ["href", "https://github.com/MS2020-ms", 1, "enlace"], ["href", "https://www.linkedin.com/in/miguel-soto-arrojo", 1, "enlace"], [1, "clearfix", "w-100", "d-md-none", "pb-1"], [1, "col-md-4", "mb-md-0", "mb-3"], [1, "list-unstyled"], ["href", "#!"], [1, "fab", "fa-facebook"], [1, "fab", "fa-instagram"], [1, "fab", "fa-twitter"], [1, "fab", "fa-youtube"], [1, "far", "fa-envelope"], [3, "routerLink"], [1, "footer-copyright", "text-center", "py-3"], ["href", "https://kubide.es/", 1, "ml-2"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Social Media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "msotomail@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Tlf.: 655 618 138");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Madrid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u00A9 Angular Rocks 2020 | Author: Miguel Soto | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Kubide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".footer[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n  }\r\n  .page-footer[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n    color:white;\r\n}\r\n  footer[_ngcontent-%COMP%]   .enlace[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n  footer[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{\r\n  margin-bottom: 0%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztFQUNiO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsV0FBVztBQUNmO0VBQ0U7SUFDRSxlQUFlO0FBQ25CO0VBQ0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnBhZ2UtZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG4gIGZvb3RlciAuZW5sYWNle1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmZvb3RlciAubGlua3tcclxuICBtYXJnaW4tYm90dG9tOiAwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kzYG":
/*!**********************************************!*\
  !*** ./src/app/pages/list/list.component.ts ***!
  \**********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_rock_bands_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/rock-bands.service */ "xhA/");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/search.service */ "l3hs");
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/share.service */ "dz5x");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");







const _c0 = function (a1) { return ["/list", a1]; };
function ListComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const band_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](band_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", band_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, band_r2.id));
} }
class ListComponent {
    constructor(rockBandsService, searchsService, shareService) {
        this.rockBandsService = rockBandsService;
        this.searchsService = searchsService;
        this.shareService = shareService;
    }
    ngOnInit() {
        this.rockBandsService.getAll()
            .then(rockBands => {
            this.arrRockBands = rockBands;
        })
            .catch(error => console.log(error));
        this.shareService.getBands$().subscribe(band => {
            this.arrRockBands.push(band);
        });
        //Array from list-component shared by share.service:
        // this.sendArray(this.arrRockBands);
    }
    buscar(termino) {
        //console.log(termino);
        if (termino.length === 0) {
            return this.rockBandsService.getAll()
                .then(rockBands => {
                this.arrRockBands = rockBands;
            })
                .catch(error => console.log(error));
        }
        this.searchsService.search(termino)
            .then(rockBand => {
            this.arrRockBands = rockBand;
        })
            .catch(error => console.log(error));
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_rock_bands_service__WEBPACK_IMPORTED_MODULE_1__["RockBandsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_share_service__WEBPACK_IMPORTED_MODULE_3__["ShareService"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 9, vars: 1, consts: [[1, "row", "animated", "fadeIn", "fast"], [1, "col-12"], [1, "card-body", "search"], ["type", "text", "id", "input", "placeholder", "Search a Band", 1, "form-control", 3, "keyup"], ["txtTermino", ""], [1, "title"], [1, "bands", "mb-4"], ["class", "band", 4, "ngFor", "ngForOf"], [1, "band"], [1, "band-title"], [1, "band-name"], ["title", "Click me! For more info about the Band", 3, "src", "routerLink"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ListComponent_Template_input_keyup_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.buscar(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "My favorite Rock Bands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ListComponent_div_8_Template, 5, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrRockBands);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: [".title[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin-bottom: 2rem;\r\n    color: #0275d8;\r\n    font-weight: bold;\r\n}\r\n.bands[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n.band[_ngcontent-%COMP%]{\r\n width: 300px;\r\n border: 1px solid lightgrey; \r\n padding: 10px; \r\n margin: 10px;\r\n border-radius: 20px;\r\n box-shadow: 5px 6px 8px 1px lightgrey;\r\n}\r\n.band[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 8rem;\r\n    cursor: pointer;\r\n}\r\n.band[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\r\n    transform: scale(0.95);\r\n    box-shadow: 5px 6px 8px 1px gray;\r\n}\r\n.band-name[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n.search[_ngcontent-%COMP%]{\r\n    width: 85%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7QUFDQTtDQUNDLFlBQVk7Q0FDWiwyQkFBMkI7Q0FDM0IsYUFBYTtDQUNiLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIscUNBQXFDO0FBQ3RDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoibGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGNvbG9yOiAjMDI3NWQ4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmJhbmRze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5iYW5ke1xyXG4gd2lkdGg6IDMwMHB4O1xyXG4gYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5OyBcclxuIHBhZGRpbmc6IDEwcHg7IFxyXG4gbWFyZ2luOiAxMHB4O1xyXG4gYm9yZGVyLXJhZGl1czogMjBweDtcclxuIGJveC1zaGFkb3c6IDVweCA2cHggOHB4IDFweCBsaWdodGdyZXk7XHJcbn1cclxuLmJhbmQgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDhyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJhbmQgaW1nOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIGJveC1zaGFkb3c6IDVweCA2cHggOHB4IDFweCBncmF5O1xyXG59XHJcbi5iYW5kLW5hbWV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNlYXJjaHtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.css']
            }]
    }], function () { return [{ type: _services_rock_bands_service__WEBPACK_IMPORTED_MODULE_1__["RockBandsService"] }, { type: _services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"] }, { type: _services_share_service__WEBPACK_IMPORTED_MODULE_3__["ShareService"] }]; }, null); })();


/***/ }),

/***/ "l3hs":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _db_rock_bands_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db/rock-bands.db */ "w20r");



class SearchService {
    constructor() { }
    search(termino) {
        let term = termino.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
        return new Promise((resolve, reject) => {
            const arrRockBand = _db_rock_bands_db__WEBPACK_IMPORTED_MODULE_1__["ROCKBANDS"].filter(band => {
                return band.name === term;
            });
            resolve(arrRockBand);
        });
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(); };
SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lYjW":
/*!****************************************!*\
  !*** ./src/app/pages/pages.routing.ts ***!
  \****************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.component */ "8D7W");





const routes = [
    {
        path: 'list',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"],
        loadChildren: () => __webpack_require__.e(/*! import() | child-routes-module */ "child-routes-module").then(__webpack_require__.bind(null, /*! ./child-routes.module */ "E5tf")).then(modulo => modulo.ChildRoutesModule)
    },
];
class PagesRoutingModule {
}
PagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PagesRoutingModule });
PagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PagesRoutingModule_Factory(t) { return new (t || PagesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PagesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _pages_add_band_add_band_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/add-band/add-band.component */ "WJQx");
/* harmony import */ var _pages_crud_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/crud/crud.component */ "DuFg");
/* harmony import */ var _pages_error404_error404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/error404/error404.component */ "gf0u");
/* harmony import */ var _pages_pages_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/pages.routing */ "lYjW");





//Modules



const routes = [
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: 'new', component: _pages_add_band_add_band_component__WEBPACK_IMPORTED_MODULE_2__["AddBandComponent"] },
    { path: 'crud', component: _pages_crud_crud_component__WEBPACK_IMPORTED_MODULE_3__["CrudComponent"] },
    { path: '**', component: _pages_error404_error404_component__WEBPACK_IMPORTED_MODULE_4__["Error404Component"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
            _pages_pages_routing__WEBPACK_IMPORTED_MODULE_5__["PagesRoutingModule"]
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _pages_pages_routing__WEBPACK_IMPORTED_MODULE_5__["PagesRoutingModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
                    _pages_pages_routing__WEBPACK_IMPORTED_MODULE_5__["PagesRoutingModule"]
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "w20r":
/*!*************************************!*\
  !*** ./src/app/db/rock-bands.db.ts ***!
  \*************************************/
/*! exports provided: ROCKBANDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROCKBANDS", function() { return ROCKBANDS; });
const ROCKBANDS = [
    {
        // id: uuidv4(),
        id: 1,
        name: 'Rolling Stones',
        members: [
            ' Mick Jagger',
            ' Keith Richards',
            ' Charlie Watts',
            ' Ronnie Wood'
        ],
        img: "../../../assets/images/background/Rolling Stones.jpg",
        icon: "../../../assets/images/icons/RS_icon.jpg",
        country: 'United Kingdom',
        web: 'https://rollingstones.com/',
        active: true,
        origin: 'London, England',
        genres: 'Rock, blues, hard rock, rock and roll, pop',
        years: '1962–present',
        description: 'The Rolling Stones are an English rock band formed in London in 1962. Diverging from the pop rock of the early-1960s, the Rolling Stones pioneered the gritty, heavier-driven sound that came to define hard rock.[1] Their first stable line-up was vocalist Mick Jagger, multi-instrumentalist Brian Jones, guitarist Keith Richards, drummer Charlie Watts, and bassist Bill Wyman. During their formative years Brian Jones was the primary leader',
        video: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    },
    {
        id: 2,
        name: 'Led Zeppelin',
        members: [
            ' Jimmy Page',
            ' Robert Plant',
            ' John Paul Jones',
            ' John Bonham (+)'
        ],
        img: "../../../assets/images/background/Led Zeppelin.jpg",
        icon: "../../../assets/images/icons/LZ_icon.png",
        country: 'United Kingdom',
        web: 'https://www.ledzeppelin.com',
        active: false,
        origin: 'London, England',
        genres: 'Hard rock, blues rock, folk rock, heavy metal',
        years: '1968–1980',
        description: 'Led Zeppelin were an English rock band formed in London in 1968. The group consisted of vocalist Robert Plant, guitarist Jimmy Page, bassist/keyboardist John Paul Jones, and drummer John Bonham. With a heavy, guitar-driven sound, they are cited as one of the progenitors of hard rock and heavy metal, although their style drew from a variety of influences, including blues and folk music.',
        video: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    },
    {
        id: 3,
        name: 'Queen',
        members: [
            ' Freddie Mercury',
            ' John Deacon',
            ' Brian May',
            ' Roger Taylor'
        ],
        img: "../../../assets/images/background/Queen.jpg",
        icon: "../../../assets/images/icons/Queen_icon.png",
        country: 'United Kingdom',
        web: 'https://queenonline.com',
        active: true,
        origin: 'London, England',
        genres: 'Rock',
        years: '1970–present',
        description: 'Queen are a British rock band formed in London in 1970. Their classic line-up was Freddie Mercury (lead vocals, piano), Brian May (guitar, vocals), Roger Taylor (drums, vocals) and John Deacon (bass). Their earliest works were influenced by progressive rock, hard rock and heavy metal, but the band gradually ventured into more conventional and radio-friendly works by incorporating further styles, such as arena rock and pop rock.',
        video: '"https://www.youtube.com/embed/tgbNymZ7vqY"',
    },
    {
        id: 4,
        name: 'Pink Floyd',
        members: [
            ' David Gilmour',
            ' Nick Mason',
            ' Richard Wright',
            ' Syd Barrettr'
        ],
        img: "../../../assets/images/background/Pink Floyd.jpg",
        icon: "../../../assets/images/icons/PF_icon.png",
        country: 'United Kingdom',
        web: 'https://www.pinkfloyd.com',
        active: false,
        origin: 'London, England',
        genres: 'Progressive rock art, rock experimental, rock psychedelic, pop psychedelic rock',
        years: '1965–1995',
        description: 'Pink Floyd were an English rock band formed in London in 1965. Gaining an early following as one of the first British psychedelic groups, they were distinguished for their extended compositions, sonic experimentation, philosophical lyrics and elaborate live shows, and became a leading band of the progressive rock genre, cited by some as the greatest progressive rock band of all time.',
        video: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    },
    {
        id: 5,
        name: 'Deep Purple',
        members: [
            ' Ian Paice',
            ' Ian Gillan',
            ' Roger Glover',
            ' Steve Morse',
            ' Don Airey',
        ],
        img: "../../../assets/images/background/Deep Purple.jpg",
        icon: "../../../assets/images/icons/DP_icon.png",
        country: 'United Kingdom',
        web: 'https://deeppurple.com/',
        active: true,
        origin: 'Hertford, Hertfordshire, England',
        genres: 'Hard rockheavy, metalprogressive, rock',
        years: '1968–present',
        description: 'Deep Purple are an English rock band formed in Hertford, Hertfordshire, in 1968.[1] They are considered to be among the pioneers of heavy metal and modern hard rock,[2][3] although their musical approach has changed over the years.[4] Originally formed as a psychedelic rock and progressive rock band, they shifted to a heavier sound with their 1970 album Deep Purple in Rock.[5] Deep Purple, together with Led Zeppelin and Black Sabbath, have been referred to as the "unholy trinity of British hard rock and heavy metal in the early- to mid-seventies"',
        video: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    },
    {
        id: 6,
        name: 'AC/DC',
        members: [
            ' Angus Young',
            ' Stevie Young',
            ' Brian Johnson',
            ' Cliff Williams',
            ' Phil Rudd',
        ],
        img: "../../../assets/images/background/ACDC.jpg",
        icon: "../../../assets/images/icons/acdc_icon.jpg",
        country: 'Australia',
        web: 'https://pwrup.acdc.com/',
        active: true,
        origin: 'Sydney, New South Wales, Australia',
        genres: 'Hard rock, blues rock, heavy metal, rock and roll',
        years: '1973–present',
        description: 'AC/DC are an Australian rock band formed in Sydney in 1973 by Scottish-born brothers Malcolm and Angus Young.[1] Their music has been variously described as hard rock, blues rock, and heavy metal,[2] but the band themselves call it simply "rock and roll". AC/DC underwent several line-up changes before releasing their first album, 1975s High Voltage. Membership subsequently stabilised around the Young brothers, singer Bon Scott, drummer Phil Rudd, and bassist Mark Evans.',
        video: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    },
    {
        id: 7,
        name: 'The Ramones',
        members: [
            ' Joey Ramone',
            ' Johnny Ramone',
            ' Marky Ramone',
            ' Dee Dee Ramone',
            ' Richie Ramone',
        ],
        img: "../../../assets/images/background/Ramones.jpg",
        icon: "../../../assets/images/icons/TR_icon.png",
        country: 'United States',
        web: 'https://www.ramones.com/',
        active: false,
        origin: 'Queens, New York, United States',
        genres: 'Punk rock, pop punk',
        years: '1974–1996',
        description: 'The Ramones were an American punk rock band that formed in the New York City neighborhood of Forest Hills, Queens, in 1974. They are often cited as the first true punk rock group. Despite achieving only limited commercial success initially, the band was highly influential in the United States, Argentina, Brazil and most of South America, as well as Europe, including the United Kingdom, the Netherlands, Germany, Sweden and Belgium.',
        video: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    },
    {
        id: 8,
        name: 'KISS',
        members: [
            ' Paul Stanley',
            ' Gene Simmons',
            ' Eric Singer',
            ' Tommy Thayer',
        ],
        img: "../../../assets/images/background/Kiss.jpg",
        icon: "../../../assets/images/icons/K_icon.jpg",
        country: 'United States',
        web: 'https://www.kissonline.com/end-of-the-road-au',
        active: true,
        origin: 'New York City, United States',
        genres: 'Hard rock, heavy metal, shock rock, glam metal',
        years: '1973–present',
        description: 'Kiss (often stylized as KIϟϟ) is an American rock band formed in New York City in January 1973 by Paul Stanley, Gene Simmons, Ace Frehley, and Peter Criss. Well known for its members face paint and stage outfits, the group rose to prominence in the mid–late 1970s with its shocking live performances, which featured fire breathing, blood-spitting, smoking guitars, shooting rockets, levitating drum kits, and pyrotechnics.',
        video: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    }
];


/***/ }),

/***/ "xhA/":
/*!************************************************!*\
  !*** ./src/app/services/rock-bands.service.ts ***!
  \************************************************/
/*! exports provided: RockBandsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RockBandsService", function() { return RockBandsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _db_rock_bands_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db/rock-bands.db */ "w20r");



class RockBandsService {
    constructor() { }
    getAll() {
        return new Promise((resolve, reject) => {
            resolve(_db_rock_bands_db__WEBPACK_IMPORTED_MODULE_1__["ROCKBANDS"]);
        });
    }
    getById(pId) {
        return new Promise((resolve, reject) => {
            resolve(_db_rock_bands_db__WEBPACK_IMPORTED_MODULE_1__["ROCKBANDS"].find(band => band.id === pId));
        });
    }
}
RockBandsService.ɵfac = function RockBandsService_Factory(t) { return new (t || RockBandsService)(); };
RockBandsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RockBandsService, factory: RockBandsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RockBandsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




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