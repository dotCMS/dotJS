import {Treeable} from "./treeable.model";

/**
 * Model object for the FileAsset Object in dotCMS.
 */
export class File extends Treeable {
    constructor(){super();this.displayType="File";}
    languageId : number;
    path : string;
    parent : string;
    mimeType : string;
    fileName : string;
    modUserName : string;

    /**
     * Convenience method to check the mimetype and so if it starts with image
     * @returns {boolean}
     */
    isImage():boolean{
        return this.mimeType.startsWith("image");
    }
}