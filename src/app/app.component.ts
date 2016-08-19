import { Component }        from '@angular/core';
import { ActivatedRoute, Router, NavigationStart }    from '@angular/router';

import '../../styles/standardize.css';
import '../../styles/index.css';

@Component({
    selector: 'lcp-app',
    template: require('./app.component.html'),
    styleUrls: ['/app.component.css']
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



