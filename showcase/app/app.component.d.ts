import { SiteBrowserState } from "../../core/util/site-browser.state";
import { SettingsService } from "../services/settings.services";
export declare class AppComponent {
    private updateService;
    private settingsService;
    private items;
    constructor(updateService: SiteBrowserState, settingsService: SettingsService);
    ngOnInit(): void;
}
