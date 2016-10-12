import {OpaqueToken} from "@angular/core";

export let APP_CONFIG = new OpaqueToken('app.config');

export interface AppConfig {
    iconPath: string;
    dotCMSURLKey : string;
}

export const DOT_CONFIG: AppConfig = {
    iconPath: './assets/images/icons',
    dotCMSURLKey: 'siteURLJWT'
};
