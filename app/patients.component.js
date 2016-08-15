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
var patient_service_1 = require('./patient.service');
var PatientsComponent = (function () {
    function PatientsComponent(router, patientService) {
        this.router = router;
        this.patientService = patientService;
        // console.info('AppComponent.xtor', this.patients);
    }
    PatientsComponent.prototype.ngOnInit = function () {
        this.getPatients();
    };
    PatientsComponent.prototype.onSelect = function (patient) {
        this.selectedPatient = patient;
    };
    PatientsComponent.prototype.getPatients = function () {
        var _this = this;
        this.patientService.getPatients()
            .then(function (patients) { return _this.patients = patients; });
    };
    PatientsComponent.prototype.gotoPatientDetail = function (patient) {
        var link = ['/patient', 1]; // the '1' would be hte patient Id, but hte patient list data does not have id's
        this.router.navigate(link);
    };
    PatientsComponent = __decorate([
        core_1.Component({
            selector: 'patients',
            template: "\n        <div class=\"listcontainer\">\n            <ul>\n                <li class=\"clearfix\" *ngFor=\"let patient of patients\" >\n                    <div id=\"infoSnippet\" class=\"containerrepeater\">\n                        <div id=\"listRepeater\" class=\"element element-3\">\n                            <div id=\"listRepeaterHeader\" class=\"element-2\">\n                                <p id=\"listRepeaterTitle\" class=\"textheader\">Patient Information</p>\n                            </div>\n                            <div class=\"element-5\">\n                                <img class=\"image\" alt=\"patientIconSmall\" src=\"{{patient.patient.imageUrl}}\">\n                                <div id=\"patientName\" class=\"text text-2\">\n                                    <p>{{patient.patient.lastName}},</p>\n                                    <p>{{patient.patient.firstName}}</p>\n                                </div>\n                                <button (click)=\"gotoPatientDetail(patient)\" class=\"_button\">DETAILS</button>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    ",
            styles: ["\n        .listcontainer {\n            padding-left: 30px;\n        }\n        \n        .listcontainer li {\n            margin-bottom: 30px;\n        }\n        .containerrepeater {\n            position: relative;\n            /*top: 205px;*/\n            /*left: 30px;*/\n            z-index: 8;\n            width: 660px;\n            height: 170px;\n        }\n        \n        .containerrepeater .element {\n            top: 0;\n            width: 660px;\n        }\n        \n        .containerrepeater .image {\n            top: 36px;\n            left: 10px;\n            z-index: 7;\n            width: 125px;\n        }\n        \n        .containerrepeater .text {\n            top: 66px;\n            left: 171px;\n            z-index: 3;\n            font-size: 1em;\n            color: rgb(0, 0, 0);\n        }\n        .element {\n          position: absolute;\n          left: 0;\n        }\n        \n        .image {\n          display: block;\n          position: absolute;\n          height: auto;\n          overflow: hidden;\n        }\n        \n        .text {\n          position: absolute;\n        }\n        .text-2 p {\n            margin-bottom: 1em;\n        }\n        \n        .textheader {\n            position: absolute;\n            top: 4px;\n            left: 10px;\n            z-index: 5;\n            font-size: 0.571em;\n            font-weight: 400;\n            line-height: 1.38;\n            color: rgb(255, 255, 255);\n        }\n        \n        ._button {\n            display: block;\n            position: absolute;\n            top: 131px;\n            left: 496px;\n            z-index: 6;\n            width: 140px;\n            height: 30px;\n            border-radius: 3px;\n            background-color: rgb(255, 255, 255);\n            font-size: 0.571em;\n            font-weight: 400;\n            line-height: 1.38;\n            text-align: center;\n            color: rgb(255, 153, 0);\n        }\n        \n        ._button:hover {\n            background-color: rgb(255, 153, 0);\n            color: rgb(255, 255, 255);\n        }\n        \n        ._button:focus {\n            background-color: rgb(255, 255, 255);\n            box-shadow: 0 0 10px 1px rgba(255, 153, 0, 0.5) inset;\n        }\n        \n        .element-2 {\n            z-index: 4;\n            height: 28px;\n            background-color: rgb(0, 127, 163);\n        }\n        \n        .element-3 {\n            z-index: 2;\n            height: 170px;\n            border: 1px solid rgb(195, 195, 195);\n            background-color: rgb(255, 255, 255);\n            box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.Router, patient_service_1.PatientService])
    ], PatientsComponent);
    return PatientsComponent;
}());
exports.PatientsComponent = PatientsComponent;
//# sourceMappingURL=patients.component.js.map