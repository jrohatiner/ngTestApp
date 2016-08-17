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
var router_1 = require('@angular/router');
require('../styles/index.css');
// TODO: is standardize.css being used for the test.
require('../styles/standardize.css');
var AppComponent = (function () {
    function AppComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.canGoBack = false;
        this.title = 'Patient List';
        router.events
            .subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                var url = event.url;
                if (event.url && event.url.substring(0, 1) === "/") {
                    url = url.substring(1);
                }
                if (url === "" || url === "patients") {
                    _this.canGoBack = false;
                }
                else {
                    _this.canGoBack = true;
                }
            }
        });
    }
    AppComponent.prototype.goBack = function () {
        window.history.back();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'lcp-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map