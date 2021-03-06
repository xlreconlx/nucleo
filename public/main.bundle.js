webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".premios{\r\n\tmargin-left: 15px;\r\n}\r\n\r\n.menuCursor{\r\n\tcursor: pointer;\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "  <nav *ngIf=\"isLoggedIn\" class=\"black nav-fixed\">\n      <div class=\"nav-wrapper\">\n        <a class=\"brand-logo logo premios\">Núcleo Urbano</a>\n        <a data-activates=\"mobile-demo\" class=\"button-collapse menuCursor\"><i class=\"material-icons\">menu</i></a>\n       <ul class=\"right hide-on-med-and-down\">\n          <li><a>{{email}}</a></li>\n          <li><a (click)=\"logout()\">Salir</a></li>\n        </ul>\n         <ul class=\"side-nav\" id=\"mobile-demo\">\n          <li><a>{{email}}</a></li>\n          <li><a (click)=\"logout()\">Salir</a></li>\n      </ul>\n      </div>\n</nav>\n  <div>\n  <router-outlet></router-outlet>\n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_af__ = __webpack_require__("../../../../../src/app/providers/af.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
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
    function AppComponent(afService, router, activatedRoute, afAuth) {
        var _this = this;
        this.afService = afService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.afAuth = afAuth;
        this.router.events.subscribe(function (url) {
            _this.ruta = url.url;
            _this.ruta = _this.ruta.substr(1);
        });
        this.afService.user1.subscribe(function (auth) {
            if (auth == null) {
                //       console.log("No esta logueado");
                _this.isLoggedIn = false;
                _this.router.navigate(['login']);
            }
            else {
                //      console.log("Correcto.");
                _this.afService.uid = auth.uid;
                _this.afService.email = auth.email;
                _this.email = auth.displayName;
                _this.isLoggedIn = true;
                _this.router.navigate(['votar']);
            }
        });
    }
    /**Termina constructor**/
    /**Cierra la sesion constructor**/
    AppComponent.prototype.logout = function () {
        this.afService.logout();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_af__ = __webpack_require__("../../../../../src/app/providers/af.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_CanActivateViaAuthGuard__ = __webpack_require__("../../../../../src/app/providers/CanActivateViaAuthGuard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_CanActiveVotos__ = __webpack_require__("../../../../../src/app/providers/CanActiveVotos.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_page_login_page_component__ = __webpack_require__("../../../../../src/app/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__votar_page_votar_page_component__ = __webpack_require__("../../../../../src/app/votar-page/votar-page.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_12__login_page_login_page_component__["a" /* LoginPageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__providers_CanActivateViaAuthGuard__["a" /* CA */]]
    },
    {
        path: 'votar',
        component: __WEBPACK_IMPORTED_MODULE_13__votar_page_votar_page_component__["a" /* VotarPageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__providers_CanActiveVotos__["a" /* CAV */]]
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__login_page_login_page_component__["a" /* LoginPageComponent */],
            __WEBPACK_IMPORTED_MODULE_13__votar_page_votar_page_component__["a" /* VotarPageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__providers_af__["a" /* AF */],
            __WEBPACK_IMPORTED_MODULE_9__providers_CanActivateViaAuthGuard__["a" /* CA */],
            __WEBPACK_IMPORTED_MODULE_10__providers_CanActiveVotos__["a" /* CAV */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-dialog{\r\n  position: relative;\r\n  margin-top: 100px;\r\n}\r\n\r\n.loginmodal-container {\r\n  padding: 30px;\r\n  max-width: 350px;\r\n  width: 100% !important;\r\n  margin: 0 auto;\r\n  overflow: hidden;\r\n  font-family: roboto;\r\n}\r\n\r\n.loginmodal-container h1 {\r\n  text-align: center;\r\n  font-size: 1.8em;\r\n  font-family: roboto;\r\n}\r\n\r\n.btn-submit {\r\n  /* border: 1px solid #3079ed; */\r\n  width: 100%;\r\n  margin-top: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\n  <div class=\"loginmodal-container z-depth-4 center-align\">\n    <h1>Ingresa con Facebook</h1><br>\n    <div class=\"form-signin\">\n         <a *ngIf=\"mensaje\" class=\"collection-item\">{{mensaje}}</a>\n      <button class=\"btn light-blue waves-effect waves-light btn-submit\" (click)=\"loginWithFacebook()\">Ingresar</button>\n   </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_af__ = __webpack_require__("../../../../../src/app/providers/af.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPageComponent = (function () {
    function LoginPageComponent(afService, router) {
        this.afService = afService;
        this.router = router;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent.prototype.loginWithFacebook = function () {
        var _this = this;
        this.afService.login().then(function (user) {
            _this.afService.correo = user.user.uid;
            //se registra a el usuario que ingresa
            _this.afService.saveUser(user.user.uid, user.user.email, user.user.displayName);
            _this.router.navigate(['votar']);
            _this.mensaje = "";
        })
            .catch(function (error) {
            if (error) {
                console.log(error);
                _this.mensaje = "Ocurrio un error intenta mas tarde";
            }
        });
    };
    return LoginPageComponent;
}());
LoginPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login-page',
        template: __webpack_require__("../../../../../src/app/login-page/login-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login-page/login-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginPageComponent);

var _a, _b;
//# sourceMappingURL=login-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/providers/CanActivateViaAuthGuard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CA; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CA = (function () {
    function CA(afAuth) {
        this.afAuth = afAuth;
    }
    CA.prototype.canActivate = function () {
        if (this.afAuth.auth.currentUser != null) {
            return false;
        }
        return true;
    };
    return CA;
}());
CA = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object])
], CA);

var _a;
//# sourceMappingURL=CanActivateViaAuthGuard.js.map

/***/ }),

/***/ "../../../../../src/app/providers/CanActiveVotos.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CAV; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CAV = (function () {
    function CAV(afAuth) {
        this.afAuth = afAuth;
    }
    CAV.prototype.canActivate = function () {
        if (this.afAuth.auth.currentUser != null) {
            return true;
        }
        return false;
    };
    return CAV;
}());
CAV = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object])
], CAV);

var _a;
//# sourceMappingURL=CanActiveVotos.js.map

/***/ }),

/***/ "../../../../../src/app/providers/af.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AF; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AF = (function () {
    function AF(afAuth, af) {
        this.afAuth = afAuth;
        this.af = af;
        this.user1 = afAuth.authState;
        this.categorias = this.af.list('categorias');
    }
    // return this.afAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
    //logea a la persona con la plataforma
    AF.prototype.login = function () {
        return this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].FacebookAuthProvider());
    };
    //cierra la sesion actual
    AF.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    //Guarda a el usuario
    AF.prototype.saveUser = function (uid, correo, displayName) {
        //console.log("Crea a el usuario");
        if (correo === null) {
            correo = displayName.replace(/\s/g, "") + "@facebook.com";
        }
        var user = {
            email: correo,
            username: displayName,
        };
        this.af.object('registeredUsers/' + uid).set(user);
    };
    //guarda el artista
    AF.prototype.saveArtista = function (artista, uidCategoria) {
        return this.af.list('artistas/' + uidCategoria).push(artista);
    };
    //lista de artistas
    AF.prototype.lstArtistas = function (uidCategoria) {
        return this.af.list('artistas/' + uidCategoria);
    };
    //registra voto
    AF.prototype.saveVoto = function (uidCategoria, uidArtista, uidUser) {
        return this.af.object('votos/' + uidCategoria + "/" + uidArtista, { preserveSnapshot: true });
    };
    //if(snapshot.val()===null){
    //   itemObservable.update({ votos: 0 });
    //} else{
    //    itemObservable.update({ votos: snapshot.val().votos + 1 });
    //    console.log("registro voto");
    // }
    //});
    //registra voto usuario
    AF.prototype.saveUserVoto = function (uidCategoria, uidUser) {
        return this.af.object('votouser/' + uidUser + "/" + uidCategoria, { preserveSnapshot: true });
    };
    return AF;
}());
AF = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object])
], AF);

var _a, _b;
//# sourceMappingURL=af.js.map

/***/ }),

/***/ "../../../../../src/app/votar-page/votar-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".categoria{\r\n\tcursor: pointer;\r\n}\r\n\r\n.imgcate{\r\n\twidth: 100%;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/votar-page/votar-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n    <ng-container *ngFor=\"let item of lstCategorias | async\">\n    <div class=\"col s12 m6 categoria\">\n    <div class=\"card horizontal hoverable z-depth-2\" data-target=\"modal1\" (click)=\"showModal('modal1',item.$key)\">\n      <div class=\"card-stacked\">\n        <div class=\"card-content\">\n        <img src=\"{{item.img}}\" class=\"imgcate\">\n          <p class=\"center-align\" style=\"font-weight: bold;\">{{item.nombre}}\n          </p>\n           <p class=\"center-align\" style=\"font-weight: bold;font-size:.8em;\">Total Votos: {{item.votos}}\n          </p>\n         </div>\n      </div>\n    </div>\n    </div>\n    </ng-container>\n    </div>\n</div>\n<!-- Modal Structure -->\n  <div id=\"modal1\" class=\"modal\">\n    <div class=\"modal-content\">\n       <div class=\"row\">\n        <ng-container  *ngFor=\"let art of lstArtista | async\">\n<div class=\"col s12 m6\">\n    <div class=\"card horizontal hoverable\" style=\"height: 100px;\">\n      <div class=\"card-stacked\">\n        <div class=\"card-content\">\n          <p class=\"center-align\">{{art.nombre}}\n           <a (click)=\"validaUser($event,art.$key)\" href=\"\" class=\"right\">\n           <i class=\"material-icons\">favorite_border</i>\n         </a>\n          </p>\n         </div>\n      </div>\n    </div>\n  </div>\n        </ng-container>\n      </div>\n    <div class=\"modal-footer\">\n      <a onclick=\"$('#modal1').modal().modal('close');\" class=\"modal-action modal-close waves-effect waves-green btn-flat\">Cancelar</a>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/votar-page/votar-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_af__ = __webpack_require__("../../../../../src/app/providers/af.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VotarPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VotarPageComponent = (function () {
    function VotarPageComponent(af, fbApp, afAuth) {
        this.af = af;
        this.fbApp = fbApp;
        this.afAuth = afAuth;
        this.lstCategorias = this.af.categorias;
        this.idCategoria = "1";
    }
    VotarPageComponent.prototype.ngOnInit = function () {
        $('ul.tabs').tabs();
        //  $(".button-collapse").sideNav();
        $('.modal').modal();
        $('.button-collapse').sideNav({
            menuWidth: 250,
            edge: 'left',
            closeOnClick: true,
            draggable: true,
            onOpen: function (el) { },
            onClose: function (el) { },
        });
    };
    VotarPageComponent.prototype.selectCategoria = function (uid) {
        this.idCategoria = uid;
    };
    VotarPageComponent.prototype.saveArtista = function (event) {
        var _this = this;
        if (this.idCategoria === "1") {
            this.showToast("Escoja una categoria");
            return;
        }
        var artis = {
            nombre: this.nombre
        };
        this.af.saveArtista(artis, this.idCategoria).then(function () {
            _this.showToast("Se ha registrado");
            _this.idCategoria = "1";
            _this.nombre = "";
        }).catch(function (error) {
            _this.showToast("Ocurrio un Error");
        });
    };
    VotarPageComponent.prototype.lstArtistas = function (uid) {
        if (this.idAnterior === uid) {
            return;
        }
        this.idAnterior = uid;
        this.lstArtista = this.af.lstArtistas(uid);
    };
    VotarPageComponent.prototype.votar = function (uidArtista) {
        // const itemObser = this.af.saveVoto(this.idAnterior,uidArtista,this.af.uid);
        // const itemObservable = itemObser.take(1);
        var catRef = this.fbApp.database().ref('votos/' + this.idAnterior + '/' + uidArtista + '/votos');
        catRef.transaction(function (votos) { return votos + 1; });
        var itemObservable = this.af.af.object('categorias/' + this.idAnterior);
        // itemObservable.subscribe(snapshot => {
        //  if(snapshot.val()===null){
        //   itemObser.update({ votos: 1 });
        //  } else{
        //    itemObser.update({ votos: snapshot.val().votos + 1 });
        //   }
        //}); 
    };
    VotarPageComponent.prototype.verVotos = function () {
        var _this = this;
        //<a (click)="verVotos()" class="waves-effect waves-green btn-flat">Ver votos</a>
        var itemObser = this.af.af.list('votos', { preserveSnapshot: true }).take(1);
        var total = 0;
        itemObser.subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                snapshot.forEach(function (snap) {
                    total = total + snap.val().votos;
                    var item = _this.af.af.object('artistas/' + snapshot.key + '/' + snap.key, { preserveSnapshot: true }).take(1);
                    item.subscribe(function (snaps) {
                        console.log("nombre: " + snaps.val().nombre);
                        console.log("votos: " + snap.val().votos);
                        console.log("___________________________");
                    });
                });
            });
            console.log("Total votos: " + total);
            total = 0;
        });
    };
    VotarPageComponent.prototype.validaUser = function (event, uidArtista) {
        var _this = this;
        event.preventDefault();
        var itemUser = this.af.af.object('registeredUsers/' + this.af.uid, { preserveSnapshot: true });
        var itemObserva = itemUser.take(1);
        itemObserva.subscribe(function (snapshot) {
            if (snapshot.val() === null) {
                _this.closeModal("modal1");
                _this.showToast("Error de Autenticación");
            }
            else {
                _this.saveUserVoto(uidArtista);
            }
        });
    };
    VotarPageComponent.prototype.saveUserVoto = function (uidArtista) {
        var _this = this;
        var itemObser = this.af.saveUserVoto(this.idAnterior, this.af.uid);
        //const catRef = this.fbApp.database().ref('votouser/'+this.af.uid+'/'+this.idAnterior);
        // catRef.transaction(voto => true);
        var itemObservable = itemObser.take(1);
        itemObservable.subscribe(function (snapshot) {
            if (snapshot.val() === null) {
                itemObser.set(true);
                _this.votar(uidArtista);
                _this.closeModal("modal1");
                _this.showToast("Gracias por tu Voto");
            }
            else {
                _this.closeModal("modal1");
                _this.showToast("Puedes Votar Mañana Nuevamente");
            }
        });
    };
    //Muestra una ventana modal por id
    VotarPageComponent.prototype.showModal = function (modal, uid) {
        this.lstArtistas(uid);
    };
    //cierra la ventana modal
    VotarPageComponent.prototype.closeModal = function (modal) {
        $('#' + modal).modal().modal('close');
    };
    //muestra un texto toast
    VotarPageComponent.prototype.showToast = function (texto) {
        Materialize.toast(texto, 5000);
    };
    VotarPageComponent.prototype.openSelect = function () {
        $('select').material_select();
    };
    return VotarPageComponent;
}());
VotarPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-votar-page',
        template: __webpack_require__("../../../../../src/app/votar-page/votar-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/votar-page/votar-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* FirebaseApp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* FirebaseApp */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _c || Object])
], VotarPageComponent);

var _a, _b, _c;
//# sourceMappingURL=votar-page.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: true,
    firebase: {
        apiKey: 'AIzaSyBeA1wPXbVIVgTttTGw19LHuXwAqhN_1-Y',
        authDomain: 'nucleourbano-5b3c9.firebaseapp.com',
        databaseURL: 'https://nucleourbano-5b3c9.firebaseio.com',
        projectId: 'nucleourbano-5b3c9',
        storageBucket: 'nucleourbano-5b3c9.appspot.com',
        messagingSenderId: '563589474464'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map