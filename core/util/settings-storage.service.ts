import {LocalStoreService} from "./local-store.service";
import {DotSettings} from "./settings.model";
import {APP_CONFIG, AppConfig} from "../app.config";
import {Inject, Injectable} from "@angular/core";
import {SiteBrowserState} from "./site-browser.state";

/**
 * Stores and returns the DotSettings class
 */
@Injectable()
export class SettingsStorageService {

    configKey : string;

    constructor(
        @Inject(APP_CONFIG) config: AppConfig,
        private localStoreService : LocalStoreService,
        private siteBrowserState : SiteBrowserState
    ) {
        this.configKey = config.dotCMSURLKey;
    }

    getSettings():DotSettings{
        return JSON.parse(this.localStoreService.getValue(this.configKey));
    }

    /**
     * Stores the DotSettings object
     * @param siteURL
     * @param JWT
     */
    storeSettings(siteURL : string, JWT : string){
        let dSettings : DotSettings = new DotSettings();
        dSettings.site = siteURL;
        dSettings.jwt = JWT;
        this.localStoreService.storeValue(this.configKey,JSON.stringify(dSettings));
    }

    /**
     * removes stored settings
     */
    clearSettings(){
        this.localStoreService.clearValue(this.configKey);
    }

}