import { Routes, RouterModule }     from '@angular/router';

import { LoginComponent }           from './login.component';
import { PatientsComponent }        from './patients.component';
import { PatientDetailComponent }   from './PatientDetail/patient-detail.component';
//import { PageNotFoundComponent }    from './page-not-found.component';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'patients',
        component: PatientsComponent,
        data: {
            title: 'Patient List'
        }
    },
    {
        path: 'patient/:id',
        component: PatientDetailComponent
    }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);