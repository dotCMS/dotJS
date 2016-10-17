import { JWTAuthService } from "../../core/util/jwt-auth.service";
import { SettingsStorageService } from "../../core/util/settings-storage.service";
export declare class ConfigSettings {
    siteURL: string;
    userName: string;
    password: string;
}
export declare class SettingsService {
    private authService;
    private settingsStorageService;
    configKey: string;
    configSettings: ConfigSettings;
    constructor(authService: JWTAuthService, settingsStorageService: SettingsStorageService);
}
