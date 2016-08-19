webpackJsonp([1],{259:function(module,exports,__webpack_require__){"use strict";var __decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=this&&this.__metadata||function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)},core_1=__webpack_require__(0),mock_patients_1=__webpack_require__(776),mock_patient_1=__webpack_require__(775),mock_physician_1=__webpack_require__(777),mock_prescriptions_1=__webpack_require__(778),mock_visits_1=__webpack_require__(779),mock_invoices_1=__webpack_require__(773),mock_labResults_1=__webpack_require__(774),PatientService=function(){function PatientService(){}return PatientService.prototype.getPatients=function(){var patients=mock_patients_1.PATIENTS.map(function(patient){return patient.patient});return Promise.resolve(patients)},PatientService.prototype.getPatient=function(id){return Promise.resolve(mock_patient_1.PATIENT)},PatientService.prototype.getPatientPhysician=function(id){return Promise.resolve(mock_physician_1.PHYSICIAN)},PatientService.prototype.getPatientPrescriptions=function(id){return Promise.resolve(mock_prescriptions_1.PRESCRIPTIONS)},PatientService.prototype.getPatientVisits=function(id){return Promise.resolve(mock_visits_1.VISITS)},PatientService.prototype.getPatientInvoices=function(id){return Promise.resolve(mock_invoices_1.INVOICES)},PatientService.prototype.getPatientLabResults=function(id){return Promise.resolve(mock_labResults_1.LAB_RESULTS)},PatientService=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[])],PatientService)}();exports.PatientService=PatientService},403:function(module,exports,__webpack_require__){"use strict";var __decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=this&&this.__metadata||function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)},core_1=__webpack_require__(0),router_1=__webpack_require__(79),patient_service_1=__webpack_require__(259),PatientDetailComponent=function(){function PatientDetailComponent(patientService,route){this.patientService=patientService,this.route=route,this.prescriptions=[],this.visits=[],this.invoices=[],this.labResults=[],this.isEditMode=!1}return PatientDetailComponent.prototype.ngOnInit=function(){var _this=this;this.route.params.forEach(function(params){var id=+params.id;_this.patientService.getPatient(id).then(function(patient){return _this.patient=patient}),_this.patientService.getPatientPhysician(id).then(function(physician){return _this.physician=physician}),_this.patientService.getPatientPrescriptions(id).then(function(prescriptions){_this.prescriptions=prescriptions}),_this.patientService.getPatientVisits(id).then(function(visits){return _this.visits=visits}),_this.patientService.getPatientInvoices(id).then(function(invoices){return _this.invoices=invoices}),_this.patientService.getPatientLabResults(id).then(function(labResults){return _this.labResults=labResults})})},PatientDetailComponent.prototype.editPatient=function(){this.isEditMode=!0},PatientDetailComponent.prototype.savePatient=function(){this.isEditMode=!1},PatientDetailComponent=__decorate([core_1.Component({selector:"patient-detail",template:__webpack_require__(559),styles:[__webpack_require__(555)]}),__metadata("design:paramtypes",[patient_service_1.PatientService,router_1.ActivatedRoute])],PatientDetailComponent)}();exports.PatientDetailComponent=PatientDetailComponent},404:function(module,exports,__webpack_require__){"use strict";var __decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=this&&this.__metadata||function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)},core_1=__webpack_require__(0),router_1=__webpack_require__(79),patient_service_1=__webpack_require__(259),PatientsComponent=function(){function PatientsComponent(router,patientService){this.router=router,this.patientService=patientService}return PatientsComponent.prototype.ngOnInit=function(){this.getPatients()},PatientsComponent.prototype.getPatients=function(){var _this=this;this.patientService.getPatients().then(function(patients){return _this.patients=patients})},PatientsComponent.prototype.gotoPatientDetail=function(patient){this.router.navigate(["/patient",1])},PatientsComponent=__decorate([core_1.Component({selector:"patients",template:__webpack_require__(560),styles:[__webpack_require__(556)]}),__metadata("design:paramtypes",[router_1.Router,patient_service_1.PatientService])],PatientsComponent)}();exports.PatientsComponent=PatientsComponent},408:function(module,exports,__webpack_require__){"use strict";var __decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=this&&this.__metadata||function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)},core_1=__webpack_require__(0),platform_browser_1=__webpack_require__(69),forms_1=__webpack_require__(260),common_1=__webpack_require__(29),app_component_1=__webpack_require__(770),app_routing_1=__webpack_require__(771),patients_component_1=__webpack_require__(404),patient_detail_component_1=__webpack_require__(403),panel_component_1=__webpack_require__(772),patient_service_1=__webpack_require__(259),AppModule=function(){function AppModule(){}return AppModule=__decorate([core_1.NgModule({imports:[platform_browser_1.BrowserModule,forms_1.FormsModule,app_routing_1.routing],declarations:[app_component_1.AppComponent,patients_component_1.PatientsComponent,patient_detail_component_1.PatientDetailComponent,panel_component_1.PanelComponent],providers:[patient_service_1.PatientService,{provide:common_1.LocationStrategy,useClass:common_1.HashLocationStrategy}],bootstrap:[app_component_1.AppComponent]}),__metadata("design:paramtypes",[])],AppModule)}();exports.AppModule=AppModule},553:function(module,exports){},554:553,555:function(module,exports){module.exports=".panel-info {\n  height: 416px;\n}\n.panel-physician {\n  height: 416px;\n}\n.panel-body--image {\n  float: left;\n  width: 224px;\n}\n.panel-detail {\n  padding: 2px 0 0 21px;\n  display: inline-block;\n  white-space: nowrap;\n}\n.panel-name {\n  font-size: 1.75em;\n  font-weight: 700;\n  line-height: 0.75;\n}\n.panel-name p {\n  margin-bottom: 1em;\n}\n.panel-name input {\n  margin-bottom: calc(-8em);\n  margin-top: -9px;\n  margin-left: -1px;\n  border: 1px solid #dedede;\n}\n.panel-sectionheader {\n  color: #626262;\n}\n.panel-textdata {\n  font-size: 1.125em;\n  line-height: 1.33;\n  margin-top: 6px;\n}\n.panel-textdata p {\n  margin-bottom: 1em;\n}\n.panel-textdata input {\n  margin-bottom: calc(0em);\n  margin-top: -2px;\n  margin-left: -1px;\n  border: 1px solid #dedede;\n}\n.panel-button {\n  display: block;\n  float: right;\n  margin-top: 310px;\n  width: 140px;\n  height: 30px;\n  border-radius: 3px;\n  background-color: #ffffff;\n  font-size: 1em;\n  text-align: center;\n  color: #ff9900;\n}\n.panel-button--save {\n  margin-top: -8px;\n}\n.panel-button:hover {\n  background-color: #ff9900;\n  color: #ffffff;\n}\n.panel-button:focus {\n  background-color: #ffffff;\n  box-shadow: 0 0 10px 1px rgba(255, 153, 0, 0.5) inset;\n}\n.data-table {\n  width: 100%;\n}\n.data-header th {\n  padding: 10px 0;\n  border-bottom: 1px solid #dedede;\n}\n.data-body td {\n  padding: 6px 0;\n}\n.script-name {\n  width: 38%;\n  text-align: left;\n}\n.script-dosage {\n  width: 35%;\n  text-align: left;\n}\n.script-refill {\n  width: 27%;\n  text-align: center;\n}\n.visit-name {\n  width: 62%;\n  text-align: left;\n}\n.visit-date {\n  width: 38%;\n  text-align: left;\n}\n.invoice-amount {\n  width: 62%;\n  text-align: left;\n}\n.invoice-due-date {\n  width: 38%;\n  text-align: left;\n}\n.lab-test {\n  width: 38%;\n  text-align: left;\n}\nth.lab-result {\n  width: 12%;\n  text-align: left;\n}\ntd.lab-result {\n  width: 12%;\n  text-align: right;\n}\n.lab-level {\n  width: 50%;\n  padding-left: 40px;\n  text-align: center;\n}\n"},556:function(module,exports){module.exports=".listcontainer {\n  padding-left: 30px;\n}\n.listcontainer li {\n  margin-top: 30px;\n}\n.listrepeater {\n  width: 660px;\n  height: 170px;\n  border: 1px solid #c3c3c3;\n  background-color: #ffffff;\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);\n}\n.listrepeater-header {\n  padding: 3px 0 0 10px;\n  height: 28px;\n  background-color: #007fa3;\n}\n.listrepeater-header--title {\n  font-size: 0.571em;\n  font-weight: 400;\n  line-height: 1.38;\n  color: #ffffff;\n}\n.listrepeater-body {\n  padding: 8px 0 0 10px;\n}\n.listrepeater-image {\n  width: 125px;\n  float: left;\n}\n.listrepeater-text {\n  margin-top: 30px;\n  margin-left: 36px;\n  float: left;\n}\n.listrepeater-text p {\n  margin-bottom: 1em;\n}\n.listrepeater-button {\n  margin-top: 95px;\n  margin-right: 15px;\n  float: right;\n  width: 140px;\n  height: 30px;\n  border-radius: 3px;\n  background-color: #ffffff;\n  font-size: 0.571em;\n  font-weight: 400;\n  line-height: 1.38;\n  text-align: center;\n  color: #ff9900;\n}\n.listrepeater-button:hover {\n  background-color: #ff9900;\n  color: #ffffff;\n}\n.listrepeater-button:focus {\n  background-color: #ffffff;\n  box-shadow: 0 0 10px 1px rgba(255, 153, 0, 0.5) inset;\n}\n"},557:function(module,exports){module.exports=".page-header {\n  width: 720px;\n  height: 170px;\n  background-color: #007fa3;\n  padding: 40px 0 0 30px;\n}\n.page-header--text {\n  font-size: 1.143em;\n  font-weight: 400;\n  line-height: 1.38;\n  color: #ffffff;\n  margin-top: 12px;\n}\n.page-header--navicon {\n  width: 38px;\n  min-width: 38px;\n  max-width: 38px;\n  opacity: 0.2;\n}\n.page-header--navicon.active {\n  opacity: 1.0;\n}\n"},558:function(module,exports){module.exports=".panel {\n  font: 400 16px/1.38 Roboto;\n  margin-top: 20px;\n  margin-left: 30px;\n  width: 660px;\n  border: 1px solid #c3c3c3;\n  background-color: #ffffff;\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);\n}\n.panel-header {\n  height: 28px;\n  background-color: #007fa3;\n  padding: 4px 0 0 10px;\n  color: #ffffff;\n}\n.panel-body {\n  padding: 36px 20px 0 9px;\n  margin-bottom: 30px;\n}\n"},559:function(module,exports){module.exports='<div *ngIf="patient">\n    <panel title="Patient Information" class="panel-info">\n        <img class="panel-body--image" alt="patientIconLarge" src="{{patient.imageUrl}}">\n        <div class="panel-detail" *ngIf="!isEditMode">\n            <div class="panel-name">\n                <p>{{patient.lastName}},</p>\n                <p>{{patient.firstName}}</p>\n            </div>\n            <p class="panel-sectionheader">Patient Address</p>\n            <div class="panel-textdata">\n                <p>{{patient.addressLine1}}</p>\n                <p>{{patient.city}}, {{patient.state}} {{patient.zip}}</p>\n            </div>\n\n            <p class="panel-sectionheader">Patient Contact Information</p>\n            <div class="panel-textdata">\n                <p>{{patient.phone}}</p>\n                <p>{{patient.email}}</p>\n            </div>\n        </div>\n        <div *ngIf="isEditMode" class="panel-detail">\n            <div class="panel-name">\n                <input class="input--block" [(ngModel)]="patient.lastName">\n                <input [(ngModel)]="patient.firstName" >\n            </div>\n            <p class="panel-sectionheader">Patient Address</p>\n            <div class="panel-textdata">\n                <input class="input--block" [(ngModel)]="patient.addressLine1">\n                <input [(ngModel)]="patient.city" style="width:150px">, <input style="width:50px" [(ngModel)]="patient.state"> <input style="width:75px" [(ngModel)]="patient.zip">\n            </div>\n\n            <p class="panel-sectionheader">Patient Contact Information</p>\n            <div class="panel-textdata">\n                <input class="input--block" [(ngModel)]="patient.phone">\n                <input [(ngModel)]="patient.email">\n            </div>\n        </div>\n        <button *ngIf="!isEditMode" (click)="editPatient()" class="panel-button">EDIT</button>\n        <button *ngIf="isEditMode" (click)="savePatient()" class="panel-button panel-button--save">SAVE</button>\n    </panel>\n\n    <panel title="Physician Information" class="panel-physician">\n        <img class="panel-body--image" src="{{physician.imageUrl}}">\n        <div class="panel-detail">\n            <div class="panel-name">\n                <p>{{physician.lastName}},</p>\n                <p>{{physician.firstName}}</p>\n            </div>\n            <p class="panel-sectionheader">Physician Address</p>\n            <div class="panel-textdata">\n                <p>{{physician.addressLine1}}</p>\n                <p>{{physician.city}}, {{physician.state}} {{physician.zip}}</p>\n            </div>\n            <p class="panel-sectionheader">Physician Contact Information</p>\n            <div class="panel-textdata">\n                <p>{{physician.phone}}</p>\n                <p>{{physician.email}}<br></p>\n            </div>\n        </div>\n    </panel>\n\n    <panel title="Prescriptions List">\n        <table class="data-table">\n            <tr class="data-header">\n                <th class="script-name textheader" >Name</th>\n                <th class="script-dosage textheader">Dosage</th>\n                <th class="script-refill textheader">Refill (Y/N)</th>\n            </tr>\n            <tr class="data-body" *ngFor="let prescription of prescriptions">\n                <td class="script-name textheader">{{prescription.name}}</td>\n                <td class="script-dosage textheader">{{prescription.dosage}}</td>\n                <td class="script-refill textheader">{{prescription.refill}}</td>\n            </tr>\n        </table>\n    </panel>\n\n    <panel title="Prescriptions List">\n        <table class="data-table">\n            <tr class="data-header">\n                <th class="visit-date textheader">Date</th>\n                <th class="visit-name textheader">Physician Name</th>\n            </tr>\n            <tr class="data-body" *ngFor="let visit of visits">\n                <td class="visit-date textheader">{{visit.date}}</td>\n                <td class="visit-name textheader">{{visit.doctor}}</td>\n            </tr>\n        </table>\n    </panel>\n\n    <panel title="Invoices">\n        <table class="data-table">\n            <tr class="data-header">\n                <th class="invoice-due-date textheader">Due Date</th>\n                <th class="invoice-amount textheader">Amount (USD)</th>\n            </tr>\n            <tr class="data-body" *ngFor="let invoice of invoices">\n                <td class="invoice-due-date textheader">{{invoice.dueDate}}</td>\n                <td class="invoice-amount textheader">{{invoice.amount}}</td>\n            </tr>\n        </table>\n    </panel>\n\n    <panel title="Lab Results">\n        <table class="data-table">\n            <tr class="data-header">\n                <th class="lab-test textheader">Tests</th>\n                <th class="lab-result textheader">Results</th>\n                <th class="lab-level textheader">Level</th>\n            </tr>\n            <tr class="data-body" *ngFor="let lab of labResults">\n                <td class="lab-test textheader">{{lab.test}}</td>\n                <td class="lab-result textheader">{{lab.result}}</td>\n                <td class="lab-level textheader">{{lab.level}}</td>\n            </tr>\n        </table>\n    </panel>\n</div>\n'},560:function(module,exports){module.exports='    <ul class="listcontainer">\n        <li *ngFor="let patient of patients" >\n            <div class="listrepeater">\n                <div class="listrepeater-header">\n                    <p class="listrepeater-header--title">Patient Information</p>\n                </div>\n                <div class="listrepeater-body">\n                    <img class="listrepeater-image" alt="patientIconSmall" src="{{patient.imageUrl}}">\n                    <div class="listrepeater-text text-2">\n                        <p>{{patient.lastName}},</p>\n                        <p>{{patient.firstName}}</p>\n                    </div>\n                    <button (click)="gotoPatientDetail(patient)" class="listrepeater-button">DETAILS</button>\n                </div>\n            </div>\n        </li>\n    </ul>\n'},561:function(module,exports){module.exports='<div class="container clearfix">\n    <div class="container heading-container">\n        <div class="page-header">\n            <button type="button" [disabled]="!canGoBack" (click)="goBack()">\n                <img class="page-header--navicon" [class.active]="canGoBack" src="../../images/left-arrow.svg">\n            </button>\n            <p id="headerTitle" class="page-header--text">{{title}}</p>\n        </div>\n    </div>\n    <router-outlet></router-outlet>\n</div>\n'},562:function(module,exports){module.exports='<div class="panel patient-panel-info">\n    <div class="panel-header">\n        <p>{{title}}</p>\n    </div>\n    <div class="panel-body">\n        <ng-content></ng-content>\n    </div>\n</div>\n'},770:function(module,exports,__webpack_require__){"use strict";var __decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=this&&this.__metadata||function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)},core_1=__webpack_require__(0),router_1=__webpack_require__(79);__webpack_require__(554),__webpack_require__(553);var AppComponent=function(){function AppComponent(route,router){var _this=this;this.route=route,this.router=router,this.canGoBack=!1,this.title="Patient List",router.events.subscribe(function(event){if(event instanceof router_1.NavigationStart){var url="/"===event.url.substring(0,1)?event.url.substring(1):event.url;_this.canGoBack=!(""===url||"patients"===url)}})}return AppComponent.prototype.goBack=function(){window.history.back()},AppComponent=__decorate([core_1.Component({selector:"lcp-app",template:__webpack_require__(561),styles:[__webpack_require__(557)]}),__metadata("design:paramtypes",[router_1.ActivatedRoute,router_1.Router])],AppComponent)}();exports.AppComponent=AppComponent},771:function(module,exports,__webpack_require__){"use strict";var router_1=__webpack_require__(79),patients_component_1=__webpack_require__(404),patient_detail_component_1=__webpack_require__(403),appRoutes=[{path:"",redirectTo:"/patients",pathMatch:"full"},{path:"patients",component:patients_component_1.PatientsComponent,data:{title:"Patient List"}},{path:"patient/:id",component:patient_detail_component_1.PatientDetailComponent,data:{title:"Patient Detail"}}];exports.appRoutingProviders=[],exports.routing=router_1.RouterModule.forRoot(appRoutes)},772:function(module,exports,__webpack_require__){"use strict";var __decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=this&&this.__metadata||function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)},core_1=__webpack_require__(0),PanelComponent=function(){function PanelComponent(){this.title="",this["class"]=""}return __decorate([core_1.Input(),__metadata("design:type",String)],PanelComponent.prototype,"title",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],PanelComponent.prototype,"class",void 0),PanelComponent=__decorate([core_1.Component({selector:"panel",template:__webpack_require__(562),styles:[__webpack_require__(558)]}),__metadata("design:paramtypes",[])],PanelComponent)}();exports.PanelComponent=PanelComponent},773:function(module,exports){"use strict";exports.INVOICES=[{dueDate:"05/05/2016",amount:"100.00"},{dueDate:"03/05/2016",amount:"200.00"},{dueDate:"01/05/2016",amount:"100.00"},{dueDate:"05/05/2015",amount:"50.00"},{dueDate:"02/05/2015",amount:"70.00"}]},774:function(module,exports){"use strict";exports.LAB_RESULTS=[{test:"test 1",result:"2.0",level:"H"},{test:"test 2",result:"3.0",level:"N"},{test:"test 3",result:"20.0",level:"L"},{test:"test 4",result:"25.0",level:"N"},{test:"test 5",result:"200.0",level:"N"}]},775:function(module,exports){"use strict";exports.PATIENT={firstName:"Jane",lastName:"Doe",imageUrl:"images/patient-02.svg",addressLine1:"1234 Fake St.",city:"Burlington",state:"NC",zip:"12345",phone:"(123) 111-2222",email:"test@test.com"}},776:function(module,exports){"use strict";exports.PATIENTS=[{patient:{firstName:"Jane",lastName:"Doe",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"John",lastName:"Doe",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"John",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jane",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Scott",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jack",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jacob",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"James",lastName:"Doe",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"John",lastName:"Doe",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"John",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jane",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Scott",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jack",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jacob",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"James",lastName:"Doe",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"John",lastName:"Doe",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"John",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jane",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Scott",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jack",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jacob",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"James",lastName:"Doe",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"John",lastName:"Doe",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"John",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jane",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Scott",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jack",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jacob",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"James",lastName:"Doe",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"John",lastName:"Doe",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"John",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jane",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Scott",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jack",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jacob",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"James",lastName:"Doe",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"John",lastName:"Doe",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"John",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jane",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Scott",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jack",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jacob",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"James",lastName:"Doe",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"John",lastName:"Doe",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"John",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jane",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Scott",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jack",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jacob",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"James",lastName:"Doe",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"John",lastName:"Doe",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"John",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jane",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Scott",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jack",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jacob",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"James",lastName:"Doe",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"John",lastName:"Doe",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"John",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jane",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Scott",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jack",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jacob",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"James",lastName:"Doe",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"John",lastName:"Doe",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"John",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jane",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Scott",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jack",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jacob",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"James",lastName:"Doe",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"John",lastName:"Doe",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"John",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jane",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Scott",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jack",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jacob",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"James",lastName:"Doe",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"John",lastName:"Doe",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"John",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jane",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Scott",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jack",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jacob",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"James",lastName:"Doe",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"John",lastName:"Doe",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"John",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jane",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Scott",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jack",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"Jacob",lastName:"Smith",imageUrl:"images/patient-02.svg"}},{patient:{firstName:"James",lastName:"Doe",imageUrl:"images/patient-02.svg"}}]},777:function(module,exports){"use strict";exports.PHYSICIAN={firstName:"Jane",lastName:"Doc",imageUrl:"images/doctor-01.svg",addressLine1:"1234 Doc St.",city:"Burlington",state:"NC",zip:"12345",phone:"(123) 111-2222",email:"test@test.com"}},778:function(module,exports){"use strict";exports.PRESCRIPTIONS=[{name:"Drug 1",dosage:"250mg",refill:"Y"},{name:"Drug 2",dosage:"200mg",refill:"Y"},{name:"Drug 3",dosage:"150mg",refill:"Y"},{name:"Drug 4",dosage:"50mg",refill:"N"},{name:"Drug 5",dosage:"200mg",refill:"N"}]},779:function(module,exports){"use strict";exports.VISITS=[{date:"05/05/2016",doctor:"Dr. Joe Doc"},{date:"03/05/2016",doctor:"Dr. Joe Doc"},{date:"01/05/2016",doctor:"Dr. Joe Doc"},{date:"05/05/2015",doctor:"Dr. Joe Doc"},{date:"02/05/2015",doctor:"Dr. Joe Doc"}]},781:function(module,exports,__webpack_require__){"use strict";var platform_browser_dynamic_1=__webpack_require__(166),core_1=__webpack_require__(0),app_module_1=__webpack_require__(408);core_1.enableProdMode(),platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)}},[781]);