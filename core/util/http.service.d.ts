import { Http, Headers, Response } from '@angular/http';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { SettingsStorageService } from "./settings-storage.service";
/**
 * The HTTPClient will use the JWTToken and Host/Site set in the SettingsStorageService to connect dotCMS REST Endpoints
 *
 */
export declare class HttpClient {
    private http;
    private settingsStorageService;
    private progressObserver;
    progress$: any;
    private progress;
    constructor(http: Http, settingsStorageService: SettingsStorageService);
    /**
     * Will append JWT Header to passed in Headers
     * @param headers
     */
    createAuthorizationHeader(headers: Headers): void;
    /**
     * Currently uses a debouce time of 400 and distinctUntilChanged flags on a GET request.  This is intended to
     * limit unecessary requests to the dotCMS Endpoints. Will append needed dotCMS Host/Site and JWT AUth Token
     * @param path Endpoint path
     * @returns {Observable<Response>}
     */
    get(path: string): Observable<Response>;
    /**
     * Currently uses a debouce time of 400 and distinctUntilChanged flags on a GET request.  This is intended to
     * limit unecessary requests to the dotCMS Endpoints. Will append needed dotCMS Host/Site and JWT AUth Token
     * @param path path Endpoint path
     * @param data Object to be PUT.  Will be converted to JSON String(JSON.stringify)
     * @returns {Observable<Response>}
     */
    put(path: String, data: Object): Observable<Response>;
    /**
     * Currently uses a debouce time of 400 and distinctUntilChanged flags on a GET request.  This is intended to
     * limit unecessary requests to the dotCMS Endpoints. Will append needed dotCMS Host/Site and JWT AUth Token
     * @param path path Endpoint path
     * @param data Object to be POSTed.  Will be converted to JSON String(JSON.stringify)
     * @returns {Observable<Response>}
     */
    post(path: String, data: Object): Observable<Response>;
    /**
     * Intended to simply saving FileAssets to dotCMS. Currently uses a debouce time of 400 and distinctUntilChanged flags on a GET request.  This is intended to
     * limit unecessary requests to the dotCMS Endpoints. Will append needed dotCMS Host/Site and JWT AUth Token
     * @param path path Endpoint path
     * @param file Binary file to save
     * @param jsonData Object to be POSTed.  Will be converted to JSON String(JSON.stringify)
     * @returns {any}
     */
    filePut(path: String, file: File, data: Object): Observable<any>;
}
