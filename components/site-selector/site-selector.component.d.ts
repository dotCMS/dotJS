import 'rxjs/add/operator/map';
import { SiteSelectorService } from "./site-selector.service";
import { Site } from "../../core/treeable/shared/site.model";
import { HttpClient } from "../../core/util/http.service";
import { SiteBrowserState } from "../../core/util/site-browser.state";
import { NotificationService } from "../../core/util/notification.service";
export declare class SiteSelectorComponent {
    private _httpClient;
    private updateService;
    private messageService;
    private siteSelectorService;
    sites: Site[];
    filteredHosts: any[];
    host: string;
    constructor(_httpClient: HttpClient, updateService: SiteBrowserState, messageService: NotificationService, siteSelectorService: SiteSelectorService);
    siteSelected(event: any): void;
    filterHosts(event: any): void;
    handleDropdownClick(): void;
    private handleSiteResults(hosts, event?);
}
