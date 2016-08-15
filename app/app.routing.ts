import { Routes, RouterModule }     from '@angular/router';
import { PatientsComponent }        from './PatientList/patients.component';
import { PatientDetailComponent }   from './PatientDetail/patient-detail.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/patients',
        pathMatch: 'full'
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