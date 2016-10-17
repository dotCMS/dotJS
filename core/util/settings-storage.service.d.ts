import { LocalStoreService } from "./local-store.service";
import { DotSettings } from "./settings.model";
import { AppConfig } from "../app.config";
import { SiteBrowserState } from "./site-browser.state";
/**
 * Stores and returns the DotSettings class
 */
export declare class SettingsStorageService {
    private localStoreService;
    private siteBrowserState;
    configKey: string;
    constructor(config: AppConfig, localStoreService: LocalStoreService, siteBrowserState: SiteBrowserState);
    getSettings(): DotSettings;
    /**
     * Stores the DotSettings object
     * @param siteURL
     * @param JWT
     */
    storeSettings(siteURL: string, JWT: string): void;
    /**
     * removes stored settings
     */
    clearSettings(): void;
}
