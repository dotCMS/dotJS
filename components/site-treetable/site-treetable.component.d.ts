import { Message, TreeNode } from "primeng/components/common/api";
import { Subscription } from "rxjs";
import { SiteTreetableService } from "./site-treetable.service";
import { SiteBrowserState } from "../../core/util/site-browser.state";
import { FileSystemService } from "../../core/util/filesystem.service";
import { LoggerService } from "../../core/util/logger.service";
import { NotificationService } from "../../core/util/notification.service";
export declare class SiteTreeTableComponent {
    private updateService;
    private fsService;
    private log;
    private siteTreetableService;
    private messageService;
    dropzoneStylesVisible: boolean;
    siteName: string;
    msgs: Message[];
    lazyFiles: TreeNode[];
    selectedNode: TreeNode;
    subscription: Subscription;
    constructor(updateService: SiteBrowserState, fsService: FileSystemService, log: LoggerService, siteTreetableService: SiteTreetableService, messageService: NotificationService);
    handleDragOver(e: any): void;
    handleDrop(e: any): boolean;
    loadHost(siteName: string): void;
    loadFolder(uri: string): void;
    nodeSelect(event: any): void;
    nodeUnselect(event: any): void;
    nodeExpand(event: any): void;
}
