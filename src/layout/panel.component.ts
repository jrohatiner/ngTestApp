import { Component, Input }        from '@angular/core';

@Component({
    selector: 'panel',
    template: require('./panel.component.html'),
    styles: [require('!!raw!less!./panel.component.css')]
})
export class PanelComponent {
    @Input() title: string = "";
    @Input() class: string = "";
}
