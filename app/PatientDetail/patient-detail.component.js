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
var PatientDetailComponent = (function () {
    function PatientDetailComponent(patientService, route) {
        this.patientService = patientService;
        this.route = route;
        this.prescriptions = [];
        this.visits = [];
        this.invoices = [];
        this.labResults = [];
        this.isEditMode = false;
    }
    PatientDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.patientService.getPatient(id)
                .then(function (patient) { return _this.patient = patient; });
            _this.patientService.getPatientPhysician(id)
                .then(function (physician) { return _this.physician = physician; });
            _this.patientService.getPatientPrescriptions(id)
                .then(function (prescriptions) {
                _this.prescriptions = prescriptions;
                console.log('ngOnInit.prescriptions', _this.prescriptions);
            });
            _this.patientService.getPatientVisits(id)
                .then(function (visits) { return _this.visits = visits; });
            _this.patientService.getPatientInvoices(id)
                .then(function (invoices) { return _this.invoices = invoices; });
            _this.patientService.getPatientLabResults(id)
                .then(function (labResults) { return _this.labResults = labResults; });
        });
    };
    PatientDetailComponent.prototype.editPatient = function () {
        this.isEditMode = true;
    };
    PatientDetailComponent.prototype.savePatient = function () {
        this.isEditMode = false;
    };
    PatientDetailComponent = __decorate([
        core_1.Component({
            selector: 'patient-detail',
            templateUrl: 'app/PatientDetail/patient-detail.component.html',
            styleUrls: ['app/PatientDetail/patient-detail.component.css']
        }), 
        __metadata('design:paramtypes', [patient_service_1.PatientService, router_1.ActivatedRoute])
    ], PatientDetailComponent);
    return PatientDetailComponent;
}());
exports.PatientDetailComponent = PatientDetailComponent;
//# sourceMappingURL=patient-detail.component.js.map