import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';
import { PatientService }       from '../services/patient.service';

@Component({
    selector: 'patients',
    template: require('./patients.component.html'),
    styles: [require('!!raw!less!./patients.component.css')]

})
export class PatientsComponent implements OnInit {
    patients:any;

    constructor(private router: Router, private patientService: PatientService) {}

    ngOnInit() {
        this.getPatients();
    }

    getPatients() {
        this.patientService.getPatients()
            .then(
                patients => this.patients = patients
            );
    }

    gotoPatientDetail(patient:any) {
        this.router.navigate(['/patient', 1]);
    }

}
