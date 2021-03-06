import {Injectable} from "@angular/core";

/**
 * LocalStoreService. Basic wraper for localStorage
 */
@Injectable()
export class LocalStoreService{

    /**
     * Stores Value in localstorage
     * @param key
     * @param value
     */
    storeValue(key:string,value:any){
        localStorage.setItem(key,value);
        // storage.set(key, value, callback);
    }

    /**
     * Gets a value from localstorage
     * @param key
     * @returns {any}
     */
    getValue(key:string):any{
        return localStorage.getItem(key);
        // return storage.get(key, callback);
    }

    /**
     * Clears a value from localstorage
     * @param key
     */
    clearValue(key:string){
        localStorage.removeItem(key);
    }

    /**
     * Clears all localstorage
     */
    clear(){
        localStorage.clear();
    }

}