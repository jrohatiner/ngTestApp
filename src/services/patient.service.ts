import { Injectable }       from '@angular/core';
import { PATIENTS }         from '../mockdata/mock-patients';
import { PATIENT }          from '../mockdata/mock-patient';
import { PHYSICIAN }        from '../mockdata/mock-physician';
import { PRESCRIPTIONS }    from '../mockdata/mock-prescriptions';
import { VISITS }           from '../mockdata/mock-visits';
import { INVOICES }         from '../mockdata/mock-invoices';
import { LAB_RESULTS }      from '../mockdata/mock-labResults';

@Injectable()
export class PatientService {

    getPatients() {
        let patients:any = PATIENTS.map((patient) => {
            return patient.patient;
        });
        return Promise.resolve(patients);
    }

    getPatient(id:any) {
        return Promise.resolve(PATIENT);
    }

    getPatientPhysician(id:any) {
        return Promise.resolve(PHYSICIAN);
    }

    getPatientPrescriptions(id:any) {
        return Promise.resolve(PRESCRIPTIONS);
    }

    getPatientVisits(id:any) {
        return Promise.resolve(VISITS);
    }

    getPatientInvoices(id:any) {
        return Promise.resolve(INVOICES);
    }

    getPatientLabResults(id:any) {
        return Promise.resolve(LAB_RESULTS);
    }
}