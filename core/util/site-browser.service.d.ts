import { HttpClient } from "./http.service";
import { Observable } from "rxjs";
import { Treeable } from "../treeable/shared/treeable.model";
import { NotificationService } from "./notification.service";
/**
 * SiteBrowserService will allows operations against the set dotCMS Site/Host for Tree operations. Treeable assets
 * in dotCMS are anything that live on a host/folder.
 */
export declare class SiteBrowserService {
    private httpClient;
    private notificationService;
    constructor(httpClient: HttpClient, notificationService: NotificationService);
    /**
     * Returns the Treeable assets (files, folders) under a host/folder
     * @param siteName dotCMS Site to load assets for
     * @returns {Observable<R>} Gets the Treeable objects. If a file the Treeable will be File as File extends Treeable
     */
    getTreeableAssetsUnderSite(siteName: String): Observable<Treeable[]>;
    /**
     * Returns the Treeable assets (files, folders) under a host/folder
     * @param siteName dotCMS Site to load assets for
     * @param uri Path to load assets from
     * @returns {Observable<R>} Gets the Treeable objects. If a file the Treeable will be File as File extends Treeable
     */
    getTreeableAssetsUnderFolder(siteName: String, uri: String): Observable<Treeable[]>;
    private extractDataFilter(res);
    private handleError(error);
}
