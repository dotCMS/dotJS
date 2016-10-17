import { NotificationService } from "./notification.service";
/**
 * FileSystemService provides helper utilities to read and crawl the local filesystem
 */
export declare class FileSystemService {
    private messageService;
    constructor(messageService: NotificationService);
    /**
     * Utility method to help crawl a local directoy returning all folders and files underneath it
     * @param directory Local Filesystem Directory to crawl
     * @param files Can be NULL. Is a list of Strings to local File paths that will be returned.
     * @returns {String[]} List of File and Folder Paths under the passed in path added to the passed in files[]
     */
    recurseDirectory(directory: string, files: String[]): String[];
    /**
     * Tests if a local file path is a directory or not
     * @param localPath local file or directory path
     * @returns {boolean}
     */
    isDirectory(localPath: string): boolean;
    private logFileReadingError(err);
}
