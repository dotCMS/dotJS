import { Treeable } from "./treeable.model";
/**
 * Model object for the FileAsset Object in dotCMS.
 */
export declare class File extends Treeable {
    constructor();
    languageId: number;
    path: string;
    parent: string;
    mimeType: string;
    fileName: string;
    modUserName: string;
    /**
     * Convenience method to check the mimetype and so if it starts with image
     * @returns {boolean}
     */
    isImage(): boolean;
}
