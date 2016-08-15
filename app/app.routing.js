"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login.component');
var patients_component_1 = require('./patients.component');
var patient_detail_component_1 = require('./PatientDetail/patient-detail.component');
//import { PageNotFoundComponent }    from './page-not-found.component';
var appRoutes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent
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