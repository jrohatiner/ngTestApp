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
var mock_patients_1 = require('./mockdata/mock-patients');
var mock_patient_1 = require('./mockdata/mock-patient');
var mock_physician_1 = require('./mockdata/mock-physician');
var mock_prescriptions_1 = require('./mockdata/mock-prescriptions');
var mock_visits_1 = require('./mockdata/mock-visits');
var mock_invoices_1 = require('./mockdata/mock-invoices');
var mock_labResults_1 = require('./mockdata/mock-labResults');
var PatientService = (function () {
    function PatientService() {
    }
    PatientService.prototype.getPatients = function () {
        // TODO make async with observables
        return Promise.resolve(mock_patients_1.PATIENTS);
    };
    PatientService.prototype.getPatient = function (id) {
        // TODO make async with observables
        return Promise.resolve(mock_patient_1.PATIENT);
    };
    PatientService.prototype.getPatientPhysician = function (id) {
        // TODO make async with observables
        return Promise.resolve(mock_physician_1.PHYSICIAN);
    };
    PatientService.prototype.getPatientPrescriptions = function (id) {
        // TODO make async with observables
        return Promise.resolve(mock_prescriptions_1.PRESCRIPTIONS);
    };
    PatientService.prototype.getPatientVisits = function (id) {
        // TODO make async with observables
        return Promise.resolve(mock_visits_1.VISITS);
    };
    PatientService.prototype.getPatientInvoices = function (id) {
        // TODO make async with observables
        return Promise.resolve(mock_invoices_1.INVOICES);
    };
    PatientService.prototype.getPatientLabResults = function (id) {
        // TODO make async with observables
        return Promise.resolve(mock_labResults_1.LAB_RESULTS);
    };
    PatientService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PatientService);
    return PatientService;
}());
exports.PatientService = PatientService;
//# sourceMappingURL=patient.service.js.map