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
var patient_service_1 = require('../patient.service');
var PatientsComponent = (function () {
    function PatientsComponent(router, patientService) {
        this.router = router;
        this.patientService = patientService;
    }
    PatientsComponent.prototype.ngOnInit = function () {
        this.getPatients();
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
            templateUrl: 'app/PatientList/patients.component.html',
            styleUrls: ['app/PatientList/patients.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, patient_service_1.PatientService])
    ], PatientsComponent);
    return PatientsComponent;
}());
exports.PatientsComponent = PatientsComponent;
//# sourceMappingURL=patients.component.js.map