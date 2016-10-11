import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Treeable} from "../treeable/shared/treeable.model";

@Injectable()
export class SiteBrowserState {

    private currentSiteSubject : BehaviorSubject<string> = new BehaviorSubject<string>(null);
    private currentFolderSubject : BehaviorSubject<string> = new BehaviorSubject<string>(null);
    private currentURISubject : BehaviorSubject<string> = new BehaviorSubject<string>(null);
    private currentTreeableSubject : BehaviorSubject<Treeable> = new BehaviorSubject<Treeable>(null);
    private currentSettingsUpdatedSubject : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

    currentSite = this.currentSiteSubject.asObservable();
    currentFolder = this.currentFolderSubject.asObservable();
    currentURI = this.currentURISubject.asObservable();
    currentTreeable = this.currentTreeableSubject.asObservable();
    currentSetingsUpdated = this.currentSettingsUpdatedSubject.asObservable();

    changeSite(siteName: string) {
        this.currentSiteSubject.next(siteName);
    }

    getSelectedSite() : string {
        return <string>this.currentSiteSubject.getValue();
    }

    changeFolder(folderName: string) {
        this.currentFolderSubject.next(folderName);
    }

    getSelectedFolder() : string {
        return <string>this.currentFolderSubject.getValue();
    }

    changeURI(uri: string) {
        this.currentURISubject.next(uri);
    }
    getURI() : string {
        return <string>this.currentURISubject.getValue();
    }

    changeTreeable(treeable: Treeable) {
        this.currentTreeableSubject.next(treeable);
    }

    getSelectedTreeable() : Treeable {
        return <Treeable>this.currentTreeableSubject.getValue();
    }

    changeSettingsUpdated(settingsUpdated: boolean) {
        this.currentSettingsUpdatedSubject.next(settingsUpdated);
    }

    getSettingsUpdated() : boolean {
        return <boolean>this.currentSettingsUpdatedSubject.getValue();
    }

}