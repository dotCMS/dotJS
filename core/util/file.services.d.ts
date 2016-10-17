import { NotificationService } from "./notification.service";
import { LoggerService } from "./logger.service";
import { HttpClient } from "./http.service";
import { SiteBrowserState } from "./site-browser.state";
/**
 * Can be used for CRUD operations on dotCMS FileAssets. Not all CRUD operations are currently implemented
 */
export declare class FileService {
    private httpClient;
    private siteBrowserState;
    private fileService;
    private loggerService;
    private notificationService;
    constructor(httpClient: HttpClient, siteBrowserState: SiteBrowserState, fileService: FileService, loggerService: LoggerService, notificationService: NotificationService);
    /**
     * Will save an array of local files and upload them to dotCMS. The dotCMS File Object will be built by the upload method
     * which means it will not set a Structure/Content Type and will not set the Identifier if the file already exists
     * in dotCMS.  dotCMS will create a new version if the file already exists on the uploaded path or create a new one.
     * The Structure/Content Type is set accordig to the default type on the uploaded dotCMS Folder
     * @param fileList array of File objects to be POSTED to dotCMS
     */
    saveFiles(fileList: File[]): void;
    /**
     * Will upload a local file to dotCMS
     * @param file File from teh File System to upload
     * @param path dotCMS Path to upload file to
     */
    uploadFile(file: File, path: string): void;
    /**
     * Will post to dotCMS an array of the FolderNames to create. If the folder already exists nothing will happen.
     * Even if there are failure it will create the Folders it is able to and log any error on folders it could not create
     * @param directories list of local File System directories to create on dotCMS
     */
    uploadDirectories(directories: File[]): void;
    private handleError(error);
}