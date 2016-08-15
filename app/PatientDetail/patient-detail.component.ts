import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }    from '@angular/router';
import { Patient }                  from '../patient';
import { PatientService }           from '../patient.service';

@Component({
    selector: 'patient-detail',
    templateUrl: 'app/PatientDetail/patient-detail.component.html',
    styleUrls: ['app/PatientDetail/patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
    public patient: Patient;
    public physician;
    public prescriptions;
    public visits;
    public invoices;
    public labResults;
    public isEditMode = false;

    constructor(
        private patientService: PatientService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
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

        // TODO edit view
        // TODO observables
        // TODO more components
        // TODO clean list component
        // TODO files
    }

    editPatient() {
        this.isEditMode = true;
    }

    savePatient() {
        this.isEditMode = false;
    }
}
