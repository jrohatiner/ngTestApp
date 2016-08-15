import { Injectable }       from '@angular/core';
import { PATIENTS }         from './mockdata/mock-patients';
import { PATIENT }          from './mockdata/mock-patient';
import { PHYSICIAN }        from './mockdata/mock-physician';
import { PRESCRIPTIONS }    from './mockdata/mock-prescriptions';
import { VISITS }           from './mockdata/mock-visits';
import { INVOICES }         from './mockdata/mock-invoices';
import { LAB_RESULTS }      from './mockdata/mock-labResults';

@Injectable()
export class PatientService {
    getPatients() {
        // TODO make async with observables
        return Promise.resolve(PATIENTS);
    }

    getPatient(id) {
        // TODO make async with observables
        return Promise.resolve(PATIENT);
    }

    getPatientPhysician(id) {
        // TODO make async with observables
        return Promise.resolve(PHYSICIAN);
    }

    getPatientPrescriptions(id) {
        // TODO make async with observables
        return Promise.resolve(PRESCRIPTIONS);
    }

    getPatientVisits(id) {
        // TODO make async with observables
        return Promise.resolve(VISITS);
    }

    getPatientInvoices(id) {
        // TODO make async with observables
        return Promise.resolve(INVOICES);
    }

    getPatientLabResults(id) {
        // TODO make async with observables
        return Promise.resolve(LAB_RESULTS);
    }
}