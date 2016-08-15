import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';
import { PatientService }       from '../patient.service';

@Component({
    selector: 'patients',
    templateUrl: 'app/PatientList/patients.component.html',
    styleUrls: ['app/PatientList/patients.component.css']

})
export class PatientsComponent implements OnInit {
    patients;

    constructor(
        private router: Router,
        private patientService: PatientService) {
    }

    ngOnInit() {
        this.getPatients();
    }

    getPatients() {
        this.patientService.getPatients()
            .then(
                patients => this.patients = patients
            );
    }

    gotoPatientDetail(patient) {
        let link = ['/patient', 1];  // the '1' would be hte patient Id, but hte patient list data does not have id's
        this.router.navigate(link);
    }

}
