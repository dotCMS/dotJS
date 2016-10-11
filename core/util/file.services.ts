import {Injectable} from "@angular/core";
import {NotificationService} from "./notification.service";
import {LoggerService} from "./logger.service";
import {HttpClient} from "./http.service";
import {Observable} from "rxjs";
import {SiteBrowserState} from "./site-browser.state";

@Injectable()
export class FileService {

    constructor
    (private httpClient: HttpClient,
     private siteBrowserState : SiteBrowserState,
     private fileService: FileService,
     private loggerService: LoggerService,
     private notificationService: NotificationService) {
    }

    saveFiles(fileList: File[]) {

    }

    uploadFile(file: File, path : string) {
        let data: {
            stName: string;
            hostFolder: string;
            title: string;
            fileName: string;
            type: string;
        } = {
            stName: "",
            hostFolder: this.siteBrowserState.getSelectedSite() + ":" + path,
            title: file.name,
            fileName: file.name,
            type: file.type
        };

        this.httpClient.filePut('/api/content/publish/1', file, data).subscribe();
    }

    uploadDirectories(directories: File[]) {

    }

    private handleError(error: any) :Observable<string> {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        if (errMsg) {
            this.loggerService.error(errMsg);
            this.notificationService.displayErrorMessage("There was an error uploading file; please try again : " + errMsg)
            return Observable.throw(errMsg);
        }
    }

}
