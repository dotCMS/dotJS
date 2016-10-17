import { Subscription } from "rxjs";
import { Treeable } from "../../core/treeable/shared/treeable.model";
import { SiteBrowserState } from "../../core/util/site-browser.state";
import { FileSystemService } from "../../core/util/filesystem.service";
import { LoggerService } from "../../core/util/logger.service";
import { SiteBrowserService } from "../../core/util/site-browser.service";
import { SettingsStorageService } from "../../core/util/settings-storage.service";
import { NotificationService } from "../../core/util/notification.service";
export declare class SiteDatatableComponent {
    private updateService;
    private fsService;
    private log;
    private siteBrowserService;
    private settingsStorageService;
    private messageService;
    dotCMSURL: string;
    siteName: string;
    treeables: Treeable[];
    subscription: Subscription;
    constructor(updateService: SiteBrowserState, fsService: FileSystemService, log: LoggerService, siteBrowserService: SiteBrowserService, settingsStorageService: SettingsStorageService, messageService: NotificationService);
    doubleClick(event: any): void;
    selectTreeable(event: any): void;
    loadFolder(uri: string): void;
    loadSite(siteName: string): void;
    handleDragOver(e: any): void;
    handleDrop(e: any): boolean;
}
