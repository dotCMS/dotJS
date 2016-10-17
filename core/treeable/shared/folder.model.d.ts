import { Treeable } from "./treeable.model";
/**
 * Model Object for the Folder Object in dotCMS
 */
export declare class Folder extends Treeable {
    constructor();
    showOnMenu: boolean;
    sortOrder: number;
    hostId: string;
    filesMasks: string;
    defaultFileType: string;
    path: string;
}
