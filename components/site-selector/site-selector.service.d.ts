import { Observable } from "rxjs";
import { HttpClient } from "../../core/util/http.service";
import { NotificationService } from "../../core/util/notification.service";
import { Site } from "../../core/treeable/shared/site.model";
export declare class SiteSelectorService {
    private httpClient;
    private notificationService;
    constructor(httpClient: HttpClient, notificationService: NotificationService);
    filterForSites(searchQuery: string): Observable<Site[]>;
    getSites(): Observable<Site[]>;
    private extractDataDropdown(res);
    private extractDataFilter(res);
    private handleError(error);
}
