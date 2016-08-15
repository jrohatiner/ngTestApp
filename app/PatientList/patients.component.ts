import { Component, onInit }    from '@angular/core';
import { Router }               from '@angular/router';
import { PatientService }       from '../patient.service';

@Component({
    selector: 'patients',
    templateUrl: 'app/PatientList/patients.component.html',
    styleUrls: ['app/PatientList/patients.component.css']

})
export class PatientsComponent implements OnInit {
    patients: Patient[];
    selectedPatient: Patient;

    constructor(
        private router: Router,
        private patientService: PatientService) {
    }

    ngOnInit() {
        this.getPatients();
    }

    onSelect(patient: Patient) {
        this.selectedPatient = patient;
    }

    getPatients() {
        this.patientService.getPatients()
            .then(
                patients => this.patients = patients
            );
    }

    gotoPatientDetail(patient: Patient) {
        let link = ['/patient', 1];  // the '1' would be hte patient Id, but hte patient list data does not have id's
        this.router.navigate(link);
    }

}
