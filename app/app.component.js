"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Patient List';
    }
    AppComponent.prototype.goBack = function () {
        window.history.back();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'lcp-app',
            template: "\n        <div id=\"appContainer\" class=\"container clearfix\">\n            <div id=\"appContainer\" class=\"container heading-container\">\n                <div id=\"header\" class=\"element element-1\">\n                    <img class=\"image image-1\" src=\"images/left-arrow.svg\" (click)=\"goBack()\">\n                    <p id=\"headerTitle\" class=\"text text-1\">{{title}}</p>\n                </div>\n            </div>\n            <!--<patient-detail [patient]=\"selectedPatient\"></patient-detail>-->\n            <!--<a routerLink=\"/patients\">Patient List</a>-->\n            <router-outlet></router-outlet>\n            <!--<patients></patients>-->\n        </div>\n        ",
            styles: ["\n        .container {\n          /*position: relative;*/\n          float: left;\n          width: 720px;\n          /*height: 1280px;*/\n        }\n        \n        .container .container {\n          z-index: 0;\n          margin-top: -5px;\n          margin-bottom: 170px;\n        }\n        \n        .element {\n          position: absolute;\n          left: 0;\n        }\n        \n        .image {\n          display: block;\n          position: absolute;\n          height: auto;\n          overflow: hidden;\n        }\n        \n        .text {\n          position: absolute;\n        }\n        \n        .element-1 {\n          top: 0;\n          z-index: 9;\n          width: 720px;\n          height: 170px;\n          background-color: rgb(0, 127, 163);\n        }\n        \n        .element-4 {\n          visibility: hidden;\n          top: 170px;\n          z-index: 1;\n          width: 720px;\n          height: 1110px;\n          background-color: rgb(222, 222, 222);\n        }\n        \n        .image-1 {\n          top: 40px;\n          left: 30px;\n          z-index: 11;\n          width: 38px;\n          min-width: 38px;\n          max-width: 38px;\n          opacity: 0.2;\n        }\n        \n        .text-1 {\n          top: 95px;\n          left: 30px;\n          z-index: 10;\n          font-size: 1.143em;\n          font-weight: 400;\n          line-height: 1.38;\n          color: rgb(255, 255, 255);\n        }\n    "] }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map