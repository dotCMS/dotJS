import { Observable } from "rxjs";
import { Treeable } from "../treeable/shared/treeable.model";
/**
 * Manages the state of objects in dotcms-js so compoents can Observe changes and reload as needed
 */
export declare class SiteBrowserState {
    private currentSiteSubject;
    private currentFolderSubject;
    private currentURISubject;
    private currentTreeableSubject;
    private currentSettingsUpdatedSubject;
    currentSite: Observable<string>;
    currentFolder: Observable<string>;
    currentURI: Observable<string>;
    currentTreeable: Observable<Treeable>;
    currentSetingsUpdated: Observable<boolean>;
    changeSite(siteName: string): void;
    getSelectedSite(): string;
    changeFolder(folderName: string): void;
    getSelectedFolder(): string;
    changeURI(uri: string): void;
    getURI(): string;
    changeTreeable(treeable: Treeable): void;
    getSelectedTreeable(): Treeable;
    changeSettingsUpdated(settingsUpdated: boolean): void;
    getSettingsUpdated(): boolean;
}
