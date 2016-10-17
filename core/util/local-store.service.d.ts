/**
 * LocalStoreService. Basic wraper for localStorage
 */
export declare class LocalStoreService {
    /**
     * Stores Value in localstorage
     * @param key
     * @param value
     */
    storeValue(key: string, value: any): void;
    /**
     * Gets a value from localstorage
     * @param key
     * @returns {any}
     */
    getValue(key: string): any;
    /**
     * Clears a value from localstorage
     * @param key
     */
    clearValue(key: string): void;
    /**
     * Clears all localstorage
     */
    clear(): void;
}
