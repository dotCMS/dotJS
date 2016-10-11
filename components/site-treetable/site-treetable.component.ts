import {Component, Inject} from "@angular/core";
import {Message, TreeNode} from "primeng/components/common/api";
import {FileSystemService} from "../util/filesystem.service"
import {SiteBrowserState} from "../util/site-browser.state";
import {Subscription} from "rxjs";
import {SiteTreetableService} from "./site-treetable.service";
import {NotificationService} from "../util/notification.service";
import {LoggerService} from "../util/logger.service";
import {SettingsService} from "../settings/shared/settings.service";

let fs = require('fs');

@Component({
    selector: 'site-treetable',
    template: require('./site-treetable.html'),
    styles: [require('./../app.css')]
})

@Inject('log')
@Inject('updateService')
export class SiteTreeTableComponent {

    dropzoneStylesVisible: boolean = true;
    siteName: string;
    msgs: Message[];
    lazyFiles: TreeNode[];
    selectedNode: TreeNode;
    subscription: Subscription;

    constructor(private updateService: SiteBrowserState,
                private fsService: FileSystemService,
                private log: LoggerService,
                private siteTreetableService: SiteTreetableService,
                private messageService: NotificationService) {

        this.siteName = updateService.getSelectedSite();
        if(updateService.getURI()){this.loadFolder(updateService.getURI())};
        this.subscription = updateService.currentSite
            .subscribe(siteName => {
                if (siteName){this.loadHost(siteName)}
            });
        this.subscription = updateService.currentURI
            .subscribe(uri => {
                if(uri){this.loadFolder(uri);}
            });
        setTimeout(() => {
        }, 100)
    }

    handleDragOver(e) {
        this.dropzoneStylesVisible = true;
    }

    handleDrop(e) {
        e.preventDefault();
        let pathToUploadTo: string;
        var files: File = e.dataTransfer.files;
        let folderTitle: string = e.path[0].innerText;
        console.log(files);

        for (let i = 0; i < this.lazyFiles.length; i++) {
            let node: TreeNode = this.lazyFiles[i];
            if (node.data.title == folderTitle && node.data.type == "folder") {
                pathToUploadTo = node.data.path;
                break;
            }
        }
        this.log.debug("Path : " + pathToUploadTo);
        console.log("Is Directory : " + fs.statSync(files[0].path).isDirectory());
        this.messageService.displayInfoMessage("Path is " + pathToUploadTo);


        // console.log("Is Directory : " + this.fsService.isDirectory(files[0].path));

        return false;
    }

    loadHost(siteName: string) {
        this.siteName = siteName;
        this.siteTreetableService.getAssetsUnderSite(siteName)
            .subscribe(items => this.lazyFiles = items);
        setTimeout(() => {
        }, 100)
    }

    loadFolder(uri: string) {
        this.log.debug("loading folder with URI : " + uri);
        this.siteTreetableService.getAssetsUnderFolder(this.siteName, uri)
            .subscribe(items => this.lazyFiles = items);
        this.log.debug("done loading folder with URI : " + uri);
        setTimeout(() => {
        }, 100)
    }

    nodeSelect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Selected', detail: event.node.data.name});
    }

    nodeUnselect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Unselected', detail: event.node.data.name});
    }

    nodeExpand(event) {
        let pathName: string = (<string>event.node.data.path);
        pathName = pathName.slice(0, pathName.length - 1);
        pathName = pathName.slice(pathName.lastIndexOf("/") + 1, pathName.length)
        this.updateService.changeFolder(pathName);
        this.updateService.changeURI(event.node.data.path);
        if (event.node) {
            this.siteTreetableService.getAssetsUnderFolder(this.siteName, event.node.data.path)
                .subscribe(items => this.lazyFiles = items);
        }
        setTimeout(() => {
        }, 100)
    }
}
