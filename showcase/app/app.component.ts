import { Component, ViewEncapsulation } from '@angular/core';
import { SettingsService } from "../services/settings.services";
import { MenuItem } from 'primeng/primeng';

@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    styles: [require('./app.component.css')],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    private items: MenuItem[];

    constructor(settingsService: SettingsService) {

    }

    ngOnInit() {
        this.items = [
            {
                label: 'Breadcrumb',
                routerLink: ['breadcrumb']
            },
            {
                label: 'Site Datatable',
                routerLink: ['site-datatable']
            },
            {
                label: 'Site Selector',
                routerLink: ['site-selector']
            },
            {
                label: 'Site Treetable',
                routerLink: ['site-treetable']
            },
            {
                label: 'Treeable Detail',
                routerLink: ['treable-detail']
            },
        ];
    }
}