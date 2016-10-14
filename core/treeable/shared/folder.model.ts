import {Treeable} from "./treeable.model";

/**
 * Model Object for the Folder Object in dotCMS
 */
export class Folder extends Treeable{
    constructor(){super();this.displayType="Folder"}
    showOnMenu : boolean;
    sortOrder : number;
    hostId : string;
    filesMasks : string;
    defaultFileType : string;
    path : string;
}
