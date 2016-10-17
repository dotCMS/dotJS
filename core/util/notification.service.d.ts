import { AppConfig } from "../app.config";
/**
 * NotificationService will notify using Desktop Notifications
 * https://developer.mozilla.org/en-US/docs/Web/API/notification
 * Can change icons by setting iconPath in the AppConfig if needed
 */
export declare class NotificationService {
    iconPath: string;
    constructor(config: AppConfig);
    displayErrorMessage(body: string): void;
    displaySuccessMessage(body: string): void;
    displayInfoMessage(body: string): void;
    displayMessage(title: string, body: string, type: string): void;
}
