import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';

import { AppComponent }             from './app.component';
import { routing }                  from './app.routing';
import { PatientsComponent }        from './PatientList/patients.component';
import { PatientDetailComponent }   from './PatientDetail/patient-detail.component';
import { PatientService }           from './patient.service';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        PatientsComponent,
        PatientDetailComponent
    ],
    providers: [
        PatientService
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
