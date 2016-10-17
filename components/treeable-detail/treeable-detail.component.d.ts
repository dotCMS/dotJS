import { Subscription } from "rxjs";
import { Treeable } from "../../core/treeable/shared/treeable.model";
import { SiteBrowserState } from "../../core/util/site-browser.state";
import { SettingsStorageService } from "../../core/util/settings-storage.service";
export declare class TreeableDetailComponent {
    private updateService;
    private settingsStorageService;
    dotCMSURL: string;
    treeable: Treeable;
    subscription: Subscription;
    constructor(updateService: SiteBrowserState, settingsStorageService: SettingsStorageService);
}
