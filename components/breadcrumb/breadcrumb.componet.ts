import {MenuItem} from "primeng/components/common/api";
import {Component, Output, Inject} from "@angular/core";
import {SiteBrowserState} from "../util/site-browser.state";
import {Subscription} from "rxjs";
import EventEmitter = NodeJS.EventEmitter;
import {SettingsService} from "../settings/shared/settings.service";

@Component({
    selector: 'breadcrumb',
    template: require('./breadcrumb.html'),
    styles: [require('./../app.css')],
    providers: [SettingsService]
})
@Inject('updateService')
export class BreadcrumbComponent {

    private pathItems: MenuItem[];
    subscription: Subscription;

    constructor(private updateService: SiteBrowserState) {
        this.buildMenuItemsFromURI(this.updateService.getURI());
        this.subscription = updateService.currentSite.subscribe(
            siteName => {
                this.onSiteChange(siteName);
            });
        this.subscription = updateService.currentFolder.subscribe(
            folderName => {
                this.onFolderClick(folderName);
            });
        this.subscription = updateService.currentURI.subscribe(
            uri => {
                this.buildMenuItemsFromURI(uri);
            });
    }

    onSiteChange(siteName: string) {
        this.pathItems = [];
        this.addSiteItem(siteName);
    }

    onFolderClick(folderName: string) {
        if (!folderName) {
            return
        }
        let uri : string = this.getCurrentURI() + "/" + folderName;
        this.addFolderItem(folderName);
    }

    private getCurrentURI() : string{
        let uri: string = "";
        for (let i = 1; i < this.pathItems.length; i++) {
            let pi: MenuItem = this.pathItems[i];
            uri = uri + "/" + pi.label;
        }
        return uri;
    }

    private addSiteItem(siteName : string){
        this.pathItems.push({
            label: siteName, command: (event: Event) => {
                this.updateService.changeSite(siteName);
                this.updateService.changeURI(null);
                this.updateService.changeFolder(null);
                setTimeout(() => {
                }, 100)
            }
        });
    }

    private addFolderItem(folderName : string){
        let currentURI : string = this.getCurrentURI();
        this.pathItems.push({
            label: folderName, command: (event: Event) => {
                this.updateService.changeURI(currentURI + "/" + folderName);
                setTimeout(() => {
                }, 100)
            }
        });
    }

    private buildMenuItemsFromURI(uri : string) {
        this.pathItems = [];
        let siteName: string = this.updateService.getSelectedSite();
        if (!siteName) {
            return
        }
        this.addSiteItem(siteName);
        if (uri) {
            let folders: string[] = uri.split("/");
            for (let i = 0; i < folders.length; i++) {
                this.onFolderClick(folders[i]);
            }
        }
    }

}