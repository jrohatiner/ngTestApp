import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { PatientService }           from '../services/patient.service';
import { PanelComponent }           from '../layout/panel.component';

@Component({
    selector: 'patient-detail',
    template: require('./patient-detail.component.html'),
    styles: [require('!!raw!less!./patient-detail.component.css')]
})
export class PatientDetailComponent implements OnInit {
    patient;
    physician;
    prescriptions = [];
    visits = [];
    invoices = [];
    labResults = [];
    isEditMode = false;

    constructor(private patientService: PatientService, private route: ActivatedRoute) {}

    ngOnInit() {
        console.info('onInit', this.route.params);
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];

            this.patientService.getPatient(id)
                .then(patient => this.patient = patient);

            this.patientService.getPatientPhysician(id)
                .then(physician => this.physician = physician);

            this.patientService.getPatientPrescriptions(id)
                .then(prescriptions => {
                    this.prescriptions = prescriptions;
                    console.log('ngOnInit.prescriptions', this.prescriptions);
                });

            this.patientService.getPatientVisits(id)
                .then(visits => this.visits = visits);

            this.patientService.getPatientInvoices(id)
                .then(invoices => this.invoices = invoices);

            this.patientService.getPatientLabResults(id)
                .then(labResults => this.labResults = labResults);
        });
    }

    editPatient() {
        this.isEditMode = true;
    }

    savePatient() {
        this.isEditMode = false;
    }
}
