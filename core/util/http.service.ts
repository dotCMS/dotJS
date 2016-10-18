import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestMethod, RequestOptions} from '@angular/http';
import {Observable} from "rxjs";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {SettingsStorageService} from "./settings-storage.service";

/**
 * The HTTPClient will use the JWTToken and Host/Site set in the SettingsStorageService to connect dotCMS REST Endpoints
 *
 */
@Injectable()
export class HttpClient {
    private progressObserver :any
    public progress$ : any
    private progress : number


    constructor(
        private http: Http,
        private settingsStorageService: SettingsStorageService

    ) {
        // this.http = http;
        // this.settingsService=settingsService;
        this.progress$ = Observable.create((observer:any) => {
            this.progressObserver = observer
        }).share();
    }

    /**
     * Will append JWT Header to passed in Headers
     * @param headers
     */
    createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', 'Bearer ' + this.settingsStorageService.getSettings().jwt);
    }

    /**
     * Currently uses a debouce time of 400 and distinctUntilChanged flags on a GET request.  This is intended to
     * limit unecessary requests to the dotCMS Endpoints. Will append needed dotCMS Host/Site and JWT AUth Token
     * @param path Endpoint path
     * @returns {Observable<Response>}
     */
    get(path : string): Observable<Response> {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(this.settingsStorageService.getSettings().site + path, {headers: headers})
            .debounceTime(400)
            .distinctUntilChanged();
    }

    /**
     * Currently uses a debouce time of 400 and distinctUntilChanged flags on a GET request.  This is intended to
     * limit unecessary requests to the dotCMS Endpoints. Will append needed dotCMS Host/Site and JWT AUth Token
     * @param path path Endpoint path
     * @param data Object to be PUT.  Will be converted to JSON String(JSON.stringify)
     * @returns {Observable<Response>}
     */
    put(path: String, data: Object) :Observable<Response> {
        let opts: RequestOptions = new RequestOptions();
        opts.method = RequestMethod.Put;
        opts.headers = new Headers({'Content-Type': 'application/json'});
        this.createAuthorizationHeader(opts.headers);
        return this.http.put(this.settingsStorageService.getSettings().site + path.toString(), JSON.stringify(data), opts)
            .debounceTime(400)
            .distinctUntilChanged();
    }

    /**
     * Currently uses a debouce time of 400 and distinctUntilChanged flags on a GET request.  This is intended to
     * limit unecessary requests to the dotCMS Endpoints. Will append needed dotCMS Host/Site and JWT AUth Token
     * @param path path Endpoint path
     * @param data Object to be POSTed.  Will be converted to JSON String(JSON.stringify)
     * @returns {Observable<Response>}
     */
    post(path: String, data: Object):Observable<Response>{
        let opts: RequestOptions = new RequestOptions();
        opts.method = RequestMethod.Post;
        opts.headers = new Headers({'Content-Type': 'application/json'});
        this.createAuthorizationHeader(opts.headers);
        return this.http.post(this.settingsStorageService.getSettings().site + path,JSON.stringify(data),opts);
    }

    /**
     * Intended to simply saving FileAssets to dotCMS. Currently uses a debouce time of 400 and distinctUntilChanged flags on a GET request.  This is intended to
     * limit unecessary requests to the dotCMS Endpoints. Will append needed dotCMS Host/Site and JWT AUth Token
     * @param path path Endpoint path
     * @param file Binary file to save
     * @param jsonData Object to be POSTed.  Will be converted to JSON String(JSON.stringify)
     * @returns {any}
     */
    filePut(path: String, file: File, data: Object): Observable<any> {
        return Observable.create((observer:any) => {
            let formData: FormData = new FormData(), xhr: XMLHttpRequest = new XMLHttpRequest();
            formData.append('json', JSON.stringify(data));

            console.log(file);
            formData.append("fileAsset", file);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    } else {
                        observer.error(xhr.response);
                    }
                }
            };

            xhr.upload.onprogress = (event) => {
                this.progress = Math.round(event.loaded / event.total * 100);

                this.progressObserver.next(this.progress);
            };

            xhr.open('PUT', this.settingsStorageService.getSettings().site + path.toString(), true);
            xhr.setRequestHeader('Authorization', 'Bearer ' + this.settingsStorageService.getSettings().jwt)
            console.log(formData);
            xhr.send(formData);
        });
    }

}