import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestMethod, RequestOptions} from '@angular/http';
import {Observable} from "rxjs";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {SettingsStorageService} from "./settings-storage.service";

@Injectable()
export class HttpClient {
    public progress$
    private progress
    private progressObserver

    constructor(
        private http: Http,
        private settingsStorageService: SettingsStorageService

    ) {
        // this.http = http;
        // this.settingsService=settingsService;
        this.progress$ = Observable.create(observer => {
            this.progressObserver = observer
        }).share();
    }

    createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', 'Bearer ' + this.settingsStorageService.getSettings().jwt);
    }

    get(path): Observable<Response> {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(this.settingsStorageService.getSettings().site + path, {headers: headers})
            .debounceTime(400)
            .distinctUntilChanged();
    }

    put(path: String, data: Object) {
        let opts: RequestOptions = new RequestOptions();
        opts.method = RequestMethod.Put;
        opts.headers = new Headers({'Content-Type': 'application/json'});
        this.createAuthorizationHeader(opts.headers);
        return this.http.put(this.settingsStorageService.getSettings().site + path.toString(), JSON.stringify(data), opts)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    post(path: String, data: Object):Observable<Response>{
        let opts: RequestOptions = new RequestOptions();
        opts.method = RequestMethod.Post;
        opts.headers = new Headers({'Content-Type': 'application/json'});
        this.createAuthorizationHeader(opts.headers);
        return this.http.post(this.settingsStorageService.getSettings().site + path,JSON.stringify(data),opts);
    }

    filePut(path: String, file: File, jsonData: Object): Observable<Object> {
        return Observable.create(observer => {
            let formData: FormData = new FormData(), xhr: XMLHttpRequest = new XMLHttpRequest();
            formData.append('json', JSON.stringify(jsonData));

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

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    }
}