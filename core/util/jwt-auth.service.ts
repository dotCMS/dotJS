import {Injectable} from "@angular/core";
import {NotificationService} from "./notification.service";
import {LoggerService} from "./logger.service";
import {Http, Headers, Response, RequestMethod, RequestOptions} from '@angular/http';
import {Observable} from "rxjs";

/**
 * Service for managing JWT Auth Token from dotCMS Site/Host
 */
@Injectable()
export class JWTAuthService{

    constructor
    (
        private http: Http,
        private notificationService: NotificationService,
        private loggerService: LoggerService
    )
    {}

    /**
     * Will POST to the dotCMS to retrieve a dotCMS Auth Token
     * @param siteURL Site/Host of dotCMS
     * @param username
     * @param password
     * @returns {Observable<R>} String return for the token
     */
    getJWT(siteURL:string,username:string,password:string):Observable<string> {
        console.log(siteURL);
        var data = {
            user: username,
            password: password,
            expirationDays: 30
        }
        return this.doPostAuth(siteURL,data)
            .map((res:Response) => this.extractJWT(res))
            .catch(error => this.handleError(error));
    }

    private doPostAuth(siteUrl:string, data:any) : Observable<Response>{
        let opts: RequestOptions = new RequestOptions();
        opts.method = RequestMethod.Post;
        opts.headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(siteUrl + '/api/v1/authentication/api-token',JSON.stringify(data),opts);
    }

    private extractJWT(res: Response): string {
        let token: string;
        let obj = JSON.parse(res.text());
        let results: string = obj.entity.token;
        return results;
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        if (errMsg) {
            this.loggerService.error(errMsg);
            this.notificationService.displayErrorMessage("There was an error; please try again : " + errMsg)
            return Observable.throw(errMsg);
        }
    }

}