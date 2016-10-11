import {Treeable} from "./treeable.model";

export class File extends Treeable {
    constructor(){super();this.displayType="File";}
    languageId : number;
    path : string;
    parent : string;
    mimeType : string;
    fileName : string;
    modUserName : string;

    isImage():boolean{
        return this.mimeType.startsWith("image");
    }
}