import { Component }        from '@angular/core';

@Component({
    selector: 'lcp-app',
    template: `
        <div id="appContainer" class="container clearfix">
            <div id="appContainer" class="container heading-container">
                <div id="header" class="element element-1">
                    <img class="image image-1" src="images/left-arrow.svg" (click)="goBack()">
                    <p id="headerTitle" class="text text-1">{{title}}</p>
                </div>
            </div>
            <!--<patient-detail [patient]="selectedPatient"></patient-detail>-->
            <!--<a routerLink="/patients">Patient List</a>-->
            <router-outlet></router-outlet>
            <!--<patients></patients>-->
        </div>
        `,
    styles: [`
        .container {
          /*position: relative;*/
          float: left;
          width: 720px;
          /*height: 1280px;*/
        }
        
        .container .container {
          z-index: 0;
          margin-top: -5px;
          margin-bottom: 170px;
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
        
        .element-1 {
          top: 0;
          z-index: 9;
          width: 720px;
          height: 170px;
          background-color: rgb(0, 127, 163);
        }
        
        .element-4 {
          visibility: hidden;
          top: 170px;
          z-index: 1;
          width: 720px;
          height: 1110px;
          background-color: rgb(222, 222, 222);
        }
        
        .image-1 {
          top: 40px;
          left: 30px;
          z-index: 11;
          width: 38px;
          min-width: 38px;
          max-width: 38px;
          opacity: 0.2;
        }
        
        .text-1 {
          top: 95px;
          left: 30px;
          z-index: 10;
          font-size: 1.143em;
          font-weight: 400;
          line-height: 1.38;
          color: rgb(255, 255, 255);
        }
    `]})
export class AppComponent {
    title = 'Patient List';

    constructor() {

    }

    goBack() {
        window.history.back();
    }
}



