import {Component, Inject} from "@angular/core";
import {HttpClient} from "../util/http.service";
import {Response} from "@angular/http";

import 'rxjs/add/operator/map';
import {Observable, Subscription} from "rxjs";
import {SiteBrowserState} from "../util/site-browser.state";
import {Site} from "../treeable/shared/site.model";
import {NotificationService} from "../util/notification.service";
import {SiteSelectorService} from "./site-selector.service";
import {SettingsService} from "../settings/shared/settings.service";

@Inject('updateService')
@Component({
    selector: 'site-selector',
    template: require('./site-selector.html'),
    styles: [require('./../app.css')]
})
export class SiteSelectorComponent {

    sites: Site[];
    filteredHosts: any[];
    host: string = '';

    constructor(
        private _httpClient: HttpClient,
        private updateService: SiteBrowserState,
        private messageService: NotificationService,
        private siteSelectorService : SiteSelectorService
    )
    {
        this.host = updateService.getSelectedSite();
    }

    siteSelected(event){
        this.updateService.changeSite(this.host);
    }

    filterHosts(event) {
        this.siteSelectorService.filterForSites(event.query)
            .subscribe((sites: Site[]) => this.handleSiteResults(sites,event));
        setTimeout(() => {}, 100)
    }

    handleDropdownClick() {
        this.filteredHosts = [];
        this.siteSelectorService.getSites()
            .subscribe((sites: Site[]) => this.handleSiteResults(sites));
        setTimeout(() => {}, 100)
    }

    private handleSiteResults(hosts : Site[], event :any = 0) {
        this.filteredHosts = [];
        this.sites = hosts;
        for (let i = 0; i < this.sites.length; i++) {
            let site = this.sites[i].hostname;
            if(event && site.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredHosts.push(site);
            }else{
                this.filteredHosts[i] = this.sites[i].hostname;
            }
        }
    }
}
