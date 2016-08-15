import { Component, onInit }    from '@angular/core';
import { Router }               from '@angular/router';
import { PatientService }       from './patient.service';

@Component({
    selector: 'patients',
    template: `
        <div class="listcontainer">
            <ul>
                <li class="clearfix" *ngFor="let patient of patients" >
                    <div id="infoSnippet" class="containerrepeater">
                        <div id="listRepeater" class="element element-3">
                            <div id="listRepeaterHeader" class="element-2">
                                <p id="listRepeaterTitle" class="textheader">Patient Information</p>
                            </div>
                            <div class="element-5">
                                <img class="image" alt="patientIconSmall" src="{{patient.patient.imageUrl}}">
                                <div id="patientName" class="text text-2">
                                    <p>{{patient.patient.lastName}},</p>
                                    <p>{{patient.patient.firstName}}</p>
                                </div>
                                <button (click)="gotoPatientDetail(patient)" class="_button">DETAILS</button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    `,
    styles: [`
        .listcontainer {
            padding-left: 30px;
        }
        
        .listcontainer li {
            margin-bottom: 30px;
        }
        .containerrepeater {
            position: relative;
            /*top: 205px;*/
            /*left: 30px;*/
            z-index: 8;
            width: 660px;
            height: 170px;
        }
        
        .containerrepeater .element {
            top: 0;
            width: 660px;
        }
        
        .containerrepeater .image {
            top: 36px;
            left: 10px;
            z-index: 7;
            width: 125px;
        }
        
        .containerrepeater .text {
            top: 66px;
            left: 171px;
            z-index: 3;
            font-size: 1em;
            color: rgb(0, 0, 0);
        }
        .element {
          position: absolute;
          left: 0;
        }
        
        .image {
          display: block;
          position: absolute;
          height: auto;
          overflow: hidden;
        }
        
        .text {
          position: absolute;
        }
        .text-2 p {
            margin-bottom: 1em;
        }
        
        .textheader {
            position: absolute;
            top: 4px;
            left: 10px;
            z-index: 5;
            font-size: 0.571em;
            font-weight: 400;
            line-height: 1.38;
            color: rgb(255, 255, 255);
        }
        
        ._button {
            display: block;
            position: absolute;
            top: 131px;
            left: 496px;
            z-index: 6;
            width: 140px;
            height: 30px;
            border-radius: 3px;
            background-color: rgb(255, 255, 255);
            font-size: 0.571em;
            font-weight: 400;
            line-height: 1.38;
            text-align: center;
            color: rgb(255, 153, 0);
        }
        
        ._button:hover {
            background-color: rgb(255, 153, 0);
            color: rgb(255, 255, 255);
        }
        
        ._button:focus {
            background-color: rgb(255, 255, 255);
            box-shadow: 0 0 10px 1px rgba(255, 153, 0, 0.5) inset;
        }
        
        .element-2 {
            z-index: 4;
            height: 28px;
            background-color: rgb(0, 127, 163);
        }
        
        .element-3 {
            z-index: 2;
            height: 170px;
            border: 1px solid rgb(195, 195, 195);
            background-color: rgb(255, 255, 255);
            box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
        }
    `]

})
export class PatientsComponent implements OnInit {
    patients: Patient[];
    selectedPatient: Patient;

    constructor(
        private router: Router,
        private patientService: PatientService) {
        // console.info('AppComponent.xtor', this.patients);
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
