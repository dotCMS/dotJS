import {Treeable} from "./treeable.model";

export class Site extends Treeable{
    hostname: string;
    aliases : string;
    identifier: string;
    inode: string;
}