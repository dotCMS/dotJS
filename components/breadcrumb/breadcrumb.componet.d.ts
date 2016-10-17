import { Subscription } from "rxjs";
import { SiteBrowserState } from "../../core/util/site-browser.state";
export declare class BreadcrumbComponent {
    private updateService;
    private pathItems;
    subscription: Subscription;
    constructor(updateService: SiteBrowserState);
    onSiteChange(siteName: string): void;
    onFolderClick(folderName: string): void;
    private getCurrentURI();
    private addSiteItem(siteName);
    private addFolderItem(folderName);
    private buildMenuItemsFromURI(uri);
}
