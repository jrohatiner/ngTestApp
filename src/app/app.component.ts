import { Component }        from '@angular/core';
import { ActivatedRoute, Router, NavigationStart }    from '@angular/router';

import '../../styles/standardize.css';
import '../../styles/index.css';

@Component({
    selector: 'lcp-app',
    template: require('./app.component.html'),
    styles: [require('!!raw!less!./app.component.css')] //thne style-loader will change the css and return an object, vs a raw file
    //so I am overriding it to just plaing text
})
export class AppComponent {
    public canGoBack = false;
    title = 'Patient List';

    constructor(
        private route: ActivatedRoute,
        private router: Router) {

        router.events
            .subscribe((event) => {
                if (event instanceof NavigationStart) {
                    let url = event.url.substring(0,1) === "/" ? event.url.substring(1) : event.url;
                    this.canGoBack = !(url === "" || url === "patients");
                }

            });
    }

    goBack() {
        window.history.back();
    }
}



