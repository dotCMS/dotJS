import {Component} from "@angular/core";
import {Subscription} from "rxjs";
import {Treeable} from "../../core/treeable/shared/treeable.model";
import {SiteBrowserState} from "../../core/util/site-browser.state";
import {FileSystemService} from "../../core/util/filesystem.service";
import {LoggerService} from "../../core/util/logger.service";
import {SiteBrowserService} from "../../core/util/site-browser.service";
import {SettingsStorageService} from "../../core/util/settings-storage.service";
import {NotificationService} from "../../core/util/notification.service";
import {Folder} from "../../core/treeable/shared/folder.model";

@Component({
    selector: 'site-datatable',
    template: require('./site-datatable.html'),
    styles: [require('./../app.css')]
})
export class SiteDatatableComponent {

    dotCMSURL: string ="";
    siteName: string = "";
    treeables: Treeable[];
    subscription: Subscription;

    constructor(private updateService: SiteBrowserState,
                private fsService: FileSystemService,
                private log: LoggerService,
                private siteBrowserService: SiteBrowserService,
                private settingsStorageService: SettingsStorageService,
                private messageService: NotificationService) {

        if(settingsStorageService.getSettings()){this.dotCMSURL=settingsStorageService.getSettings().site};
        this.siteName = updateService.getSelectedSite();
        if (updateService.getURI()) {
            this.loadFolder(updateService.getURI())
        }
        ;
        this.subscription = updateService.currentSite
            .subscribe(siteName => {
                if (siteName) {
                    this.loadSite(siteName)
                }
            });
        this.subscription = updateService.currentURI
            .subscribe(uri => {
                if (uri) {
                    this.loadFolder(uri);
                }
            });
        setTimeout(() => {
        }, 100)
    }

    doubleClick(event){
        if(event.data.type!='folder'){return;}
        let pathName: string = (<string>event.data.path);
        pathName = pathName.slice(0, pathName.length - 1);
        pathName = pathName.slice(pathName.lastIndexOf("/") + 1, pathName.length)
        this.updateService.changeFolder(pathName);
        this.updateService.changeURI(event.data.path);
        let folder : Folder = event.data;
        let uri = this.updateService.getURI();
        if(!uri){uri="";}
        this.loadFolder(folder.path);
        setTimeout(() => {
        }, 100)
    }

    selectTreeable(event){
        this.updateService.changeTreeable(event.data);
    }

    loadFolder(uri : string) {
        this.siteBrowserService.getTreeableAssetsUnderFolder(this.siteName,uri)
            .subscribe((treeables: Treeable[]) => this.treeables=treeables)
        setTimeout(() => {}, 100);
    }

    loadSite(siteName: string) {
        this.siteName = siteName;
        this.siteBrowserService.getTreeableAssetsUnderSite(siteName)
            .subscribe((treeables: Treeable[]) => this.treeables=treeables)
        setTimeout(() => {}, 100)
    }

    handleDragOver(e) {
        // this.dropzoneStylesVisible = true;
    }

    handleDrop(e) {
        e.preventDefault();
        let pathToUploadTo: string;
        let files: File = e.dataTransfer.files;
        let folderTitle: string = e.path[0].innerText;
        console.log(files);
        files[0].
        // for (let i = 0; i < this.treeables.length; i++) {
        //     let node: Treeable = this.treeables[i];
        //     if (node.title == folderTitle && node.type == "folder") {
        //         pathToUploadTo = (<Folder>node).path;
        //         break;
        //     }
        // }
        this.log.debug("Path : " + pathToUploadTo);
        // console.log("Is Directory : " + fs.statSync(files[0].path).isDirectory());
        this.messageService.displayInfoMessage("Path is " + pathToUploadTo);


        // console.log("Is Directory : " + this.fsService.isDirectory(files[0].path));

        return false;
    }

}