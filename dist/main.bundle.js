webpackJsonp([1,4],{

/***/ 216:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 216;


/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(240);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_message_service__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_messageService) {
        this._messageService = _messageService;
        this.showIntro = true;
        this.messages = [];
        this.userMessage = '';
    }
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ////////////
    AppComponent.prototype._addMessage = function (message, person) {
        this.messages.push({
            'value': message,
            'person': person,
            'position': '',
            'timestamp': "" + __WEBPACK_IMPORTED_MODULE_1_moment__().format('h:mm A')
        });
        var lastIndex = this.messages.length - 1;
        this.messages[lastIndex].position = this.checkPosition(lastIndex);
    };
    AppComponent.prototype.sendMessage = function (message) {
        this._addMessage(message, 'user');
        this._messageService.sendMessage(message)
            .then(function (res) {
            // this._addMessage(res.message, 'bot');
            // switch (res.type) {
            //   case 'direct_gif': this._addMessage(`<img src='${res.link}' />`, 'bot'); break;
            //   case 'hyperlink': this._addMessage(`<a href='${res.link}'>${res.link}</a>`, 'bot'); break;
            // }
        }, function (err) {
            // this._addMessage(err.errorMessage, 'bot');
        });
    };
    AppComponent.prototype.onSubmit = function () {
        this.sendMessage(this.userMessage);
        this.userMessage = '';
    };
    AppComponent.prototype.checkPosition = function (index) {
        if (index === 0) {
            this.messages[index].position = 'first';
            return 'first';
        }
        var previousPerson = this.messages[index - 1].person;
        var currentPerson = this.messages[index].person;
        var nextPerson;
        if (index !== this.messages.length - 1) {
            nextPerson = this.messages[index + 1].person;
        }
        if (previousPerson === currentPerson) {
            if (nextPerson && nextPerson === currentPerson) {
                this.messages[index].position = 'middle';
                return 'middle';
            }
            else {
                this.messages[index].position = 'last';
                return 'last';
            }
        }
        else {
            this.messages[index].position = 'first';
            return 'first';
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'zipwhip-root',
        template: __webpack_require__(297),
        styles: [__webpack_require__(294)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__message_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__message_message_service__["a" /* MessageService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__message_message_service__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__message_message_service__["a" /* MessageService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    host: "http://localhost",
    port: 8075
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(62)();
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n}\ntextarea {\n  display: block;\n  width: 100%;\n  height: 3rem;\n  font-size: 0.875rem;\n  resize: none;\n  border: 0 none;\n  border-top: 5px solid #ddd;\n  padding: 0.25rem 0.5rem;\n  outline: 0;\n}\ninput[type=\"text\"] {\n  display: block;\n  width: 100%;\n  font-size: 0.875rem;\n  border: 0 none;\n  border-top: 2px solid #ddd;\n  padding: 0.25rem 0.5rem;\n  outline: 0;\n  line-height: 2.5em;\n}\ninput[type=\"text\"]:focus {\n  border-color: #2dbd9b;\n}\n::-webkit-input-placeholder {\n  color: #ccc;\n}\n::-moz-placeholder {\n  color: #ccc;\n}\n:-ms-input-placeholder {\n  color: #ccc;\n}\n:-moz-placeholder {\n  color: #ccc;\n}\n.content {\n  padding: 1rem;\n  background-color: #fafafa;\n  overflow: scroll;\n  height: 100%;\n}\n.timestamp {\n  color: #aaa;\n  position: absolute;\n  left: 14px;\n  bottom: -20px;\n  font-size: 0.8em;\n}\n.messageContainer {\n  position: relative;\n}\n.messageContainer:first-child .message {\n  margin-top: 0;\n}\n.messageContainer:last-child .message {\n  margin-bottom: 1.5rem;\n}\n.message {\n  padding: 0.8rem;\n  margin: 0;\n  max-width: 75%;\n  border-radius: 24px;\n  background-color: #2dbd9b;\n  position: relative;\n  font-size: 14px;\n}\n.message.first {\n  margin-top: 2.5rem;\n}\n.message.middle,\n.message.last {\n  margin-top: 0.5rem;\n}\n.message.middle + .timestamp,\n.message.last + .timestamp {\n  margin-top: 0.5rem;\n}\n.message.user {\n  color: #fff;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n}\n.message.bot {\n  background-color: #e5e4e9;\n}\n.message.bot .timestamp {\n  left: initial;\n  right: 14px;\n}\n.message:before {\n  border-color: #2dbd9b;\n  border-radius: 50% 50% 50% 50%;\n  border-style: solid;\n  border-width: 0 20px;\n  bottom: -6px;\n  clip: rect(20px, 35px, 42px, 0px);\n  content: \" \";\n  height: 40px;\n  position: absolute;\n  right: -48px;\n  width: 30px;\n}\n.message.bot:before {\n  border-color: #e5e4e9;\n  left: -48px;\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 88,
	"./af.js": 88,
	"./ar": 95,
	"./ar-dz": 89,
	"./ar-dz.js": 89,
	"./ar-kw": 90,
	"./ar-kw.js": 90,
	"./ar-ly": 91,
	"./ar-ly.js": 91,
	"./ar-ma": 92,
	"./ar-ma.js": 92,
	"./ar-sa": 93,
	"./ar-sa.js": 93,
	"./ar-tn": 94,
	"./ar-tn.js": 94,
	"./ar.js": 95,
	"./az": 96,
	"./az.js": 96,
	"./be": 97,
	"./be.js": 97,
	"./bg": 98,
	"./bg.js": 98,
	"./bn": 99,
	"./bn.js": 99,
	"./bo": 100,
	"./bo.js": 100,
	"./br": 101,
	"./br.js": 101,
	"./bs": 102,
	"./bs.js": 102,
	"./ca": 103,
	"./ca.js": 103,
	"./cs": 104,
	"./cs.js": 104,
	"./cv": 105,
	"./cv.js": 105,
	"./cy": 106,
	"./cy.js": 106,
	"./da": 107,
	"./da.js": 107,
	"./de": 110,
	"./de-at": 108,
	"./de-at.js": 108,
	"./de-ch": 109,
	"./de-ch.js": 109,
	"./de.js": 110,
	"./dv": 111,
	"./dv.js": 111,
	"./el": 112,
	"./el.js": 112,
	"./en-au": 113,
	"./en-au.js": 113,
	"./en-ca": 114,
	"./en-ca.js": 114,
	"./en-gb": 115,
	"./en-gb.js": 115,
	"./en-ie": 116,
	"./en-ie.js": 116,
	"./en-nz": 117,
	"./en-nz.js": 117,
	"./eo": 118,
	"./eo.js": 118,
	"./es": 120,
	"./es-do": 119,
	"./es-do.js": 119,
	"./es.js": 120,
	"./et": 121,
	"./et.js": 121,
	"./eu": 122,
	"./eu.js": 122,
	"./fa": 123,
	"./fa.js": 123,
	"./fi": 124,
	"./fi.js": 124,
	"./fo": 125,
	"./fo.js": 125,
	"./fr": 128,
	"./fr-ca": 126,
	"./fr-ca.js": 126,
	"./fr-ch": 127,
	"./fr-ch.js": 127,
	"./fr.js": 128,
	"./fy": 129,
	"./fy.js": 129,
	"./gd": 130,
	"./gd.js": 130,
	"./gl": 131,
	"./gl.js": 131,
	"./gom-latn": 132,
	"./gom-latn.js": 132,
	"./he": 133,
	"./he.js": 133,
	"./hi": 134,
	"./hi.js": 134,
	"./hr": 135,
	"./hr.js": 135,
	"./hu": 136,
	"./hu.js": 136,
	"./hy-am": 137,
	"./hy-am.js": 137,
	"./id": 138,
	"./id.js": 138,
	"./is": 139,
	"./is.js": 139,
	"./it": 140,
	"./it.js": 140,
	"./ja": 141,
	"./ja.js": 141,
	"./jv": 142,
	"./jv.js": 142,
	"./ka": 143,
	"./ka.js": 143,
	"./kk": 144,
	"./kk.js": 144,
	"./km": 145,
	"./km.js": 145,
	"./kn": 146,
	"./kn.js": 146,
	"./ko": 147,
	"./ko.js": 147,
	"./ky": 148,
	"./ky.js": 148,
	"./lb": 149,
	"./lb.js": 149,
	"./lo": 150,
	"./lo.js": 150,
	"./lt": 151,
	"./lt.js": 151,
	"./lv": 152,
	"./lv.js": 152,
	"./me": 153,
	"./me.js": 153,
	"./mi": 154,
	"./mi.js": 154,
	"./mk": 155,
	"./mk.js": 155,
	"./ml": 156,
	"./ml.js": 156,
	"./mr": 157,
	"./mr.js": 157,
	"./ms": 159,
	"./ms-my": 158,
	"./ms-my.js": 158,
	"./ms.js": 159,
	"./my": 160,
	"./my.js": 160,
	"./nb": 161,
	"./nb.js": 161,
	"./ne": 162,
	"./ne.js": 162,
	"./nl": 164,
	"./nl-be": 163,
	"./nl-be.js": 163,
	"./nl.js": 164,
	"./nn": 165,
	"./nn.js": 165,
	"./pa-in": 166,
	"./pa-in.js": 166,
	"./pl": 167,
	"./pl.js": 167,
	"./pt": 169,
	"./pt-br": 168,
	"./pt-br.js": 168,
	"./pt.js": 169,
	"./ro": 170,
	"./ro.js": 170,
	"./ru": 171,
	"./ru.js": 171,
	"./sd": 172,
	"./sd.js": 172,
	"./se": 173,
	"./se.js": 173,
	"./si": 174,
	"./si.js": 174,
	"./sk": 175,
	"./sk.js": 175,
	"./sl": 176,
	"./sl.js": 176,
	"./sq": 177,
	"./sq.js": 177,
	"./sr": 179,
	"./sr-cyrl": 178,
	"./sr-cyrl.js": 178,
	"./sr.js": 179,
	"./ss": 180,
	"./ss.js": 180,
	"./sv": 181,
	"./sv.js": 181,
	"./sw": 182,
	"./sw.js": 182,
	"./ta": 183,
	"./ta.js": 183,
	"./te": 184,
	"./te.js": 184,
	"./tet": 185,
	"./tet.js": 185,
	"./th": 186,
	"./th.js": 186,
	"./tl-ph": 187,
	"./tl-ph.js": 187,
	"./tlh": 188,
	"./tlh.js": 188,
	"./tr": 189,
	"./tr.js": 189,
	"./tzl": 190,
	"./tzl.js": 190,
	"./tzm": 192,
	"./tzm-latn": 191,
	"./tzm-latn.js": 191,
	"./tzm.js": 192,
	"./uk": 193,
	"./uk.js": 193,
	"./ur": 194,
	"./ur.js": 194,
	"./uz": 196,
	"./uz-latn": 195,
	"./uz-latn.js": 195,
	"./uz.js": 196,
	"./vi": 197,
	"./vi.js": 197,
	"./x-pseudo": 198,
	"./x-pseudo.js": 198,
	"./yo": 199,
	"./yo.js": 199,
	"./zh-cn": 200,
	"./zh-cn.js": 200,
	"./zh-hk": 201,
	"./zh-hk.js": 201,
	"./zh-tw": 202,
	"./zh-tw.js": 202
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 295;


/***/ }),

/***/ 297:
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" #content [scrollTop]=\"content.scrollHeight\">\n  <div class=\"messageContainer\" fxLayout=\"row\" [fxLayoutAlign]=\"message.person === 'bot' ? 'start center' : 'end center'\" *ngFor=\"let message of messages; let i = index;\">\n    <p class=\"message\" [ngClass]=\"[message.person, message.position]\" fxFlex=\"0 0 auto\">\n      {{message.value}}\n      <span class=\"timestamp\">\n        {{message.timestamp}}\n      </span>\n    </p>\n  </div>\n</div>\n<form>\n  <input type=\"text\" placeholder=\"Type a message\" fxFlex [(ngModel)]=\"userMessage\" name=\"userMessage\" (keyup.enter)=\"onSubmit()\" autocomplete=\"off\">\n</form>\n"

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(217);


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessageService = (function () {
    function MessageService(_http) {
        this._http = _http;
        // private _apiUrl =  `${environment.host}:${environment.port}/api/v1/messages`;
        this._apiUrl = " https://young-basin-29738.herokuapp.com/sendMessage/+3124834811";
    }
    MessageService.prototype.sendMessage = function (message) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http
            .post(this._apiUrl, { message: message }, options)
            .toPromise()
            .then(function (response) {
            response = response.json();
            return response;
        })
            .catch(this._handleError);
    };
    //////////
    MessageService.prototype._handleError = function (err) {
        err = err.json();
        console.error('An Error Occurred:', err);
        return Promise.reject(err);
    };
    return MessageService;
}());
MessageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], MessageService);

var _a;
//# sourceMappingURL=message.service.js.map

/***/ })

},[324]);
//# sourceMappingURL=main.bundle.js.map