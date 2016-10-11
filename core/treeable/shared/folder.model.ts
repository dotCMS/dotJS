import {Treeable} from "./treeable.model";

export class Folder extends Treeable{
    constructor(){super();this.displayType="Folder"}
    showOnMenu : boolean;
    sortOrder : number;
    hostId : string;
    filesMasks : string;
    defaultFileType : string;
    path : string;
}
