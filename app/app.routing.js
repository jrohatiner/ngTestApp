"use strict";
var router_1 = require('@angular/router');
var patients_component_1 = require('./PatientList/patients.component');
var patient_detail_component_1 = require('./PatientDetail/patient-detail.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/patients',
        pathMatch: 'full'
    },
    {
        path: 'patients',
        component: patients_component_1.PatientsComponent,
        data: {
            title: 'Patient List'
        }
    },
    {
        path: 'patient/:id',
        component: patient_detail_component_1.PatientDetailComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map