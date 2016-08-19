import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';

import { AppComponent }             from './app/app.component';
import { routing }                  from './app/app.routing';
import { PatientsComponent }        from './PatientList/patients.component';
import { PatientDetailComponent }   from './PatientDetail/patient-detail.component';
import { PanelComponent }           from './layout/panel.component';
import { PatientService }           from './services/patient.service';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        PatientsComponent,
        PatientDetailComponent,
        PanelComponent
    ],
    providers: [
        PatientService
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
