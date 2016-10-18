import {Injectable} from "@angular/core";
import {JWTAuthService} from "../../core/util/jwt-auth.service";
import {SettingsStorageService} from "../../core/util/settings-storage.service";

export class ConfigSettings {
    siteURL : string = "http://demo37.dotcms.com"
    userName : string = "admin@dotcms.com"
    password : string = "admin"
}


@Injectable()
export class SettingsService {
    configKey : string;
    configSettings : ConfigSettings;

    constructor(
        private authService : JWTAuthService,
        private settingsStorageService : SettingsStorageService,
    ) {
        this.configSettings = new ConfigSettings();

        this.authService.getJWT(this.configSettings.siteURL, this.configSettings.userName, this.configSettings.password)
            .subscribe(
                token => {
                    this.settingsStorageService.storeSettings(this.configSettings.siteURL, token)
                });
    }

}