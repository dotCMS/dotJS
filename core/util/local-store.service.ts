import {Injectable} from "@angular/core";

@Injectable()
export class LocalStoreService{

    storeValue(key:string,value:any){
        localStorage.setItem(key,value);
        // storage.set(key, value, callback);
    }

    getValue(key:string):any{
        return localStorage.getItem(key);
        // return storage.get(key, callback);
    }

    clearValue(key:string){
        localStorage.removeItem(key);
    }

    clear(){
        localStorage.clear();
    }

}