import { Component }        from '@angular/core';
import { ActivatedRoute, Router, NavigationStart }    from '@angular/router';

@Component({
    selector: 'lcp-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
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
                    let url = event.url;
                    if (event.url && event.url.substring(0,1) === "/") {
                        url = url.substring(1);
                    }
                    if (url === "" || url === "patients") {
                        this.canGoBack = false;
                    } else {
                        this.canGoBack = true;
                    }
                }

            });
    }

    goBack() {
        window.history.back();
    }
}



