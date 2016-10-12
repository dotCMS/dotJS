import {Inject, Injectable} from "@angular/core";
import {Logger} from "angular2-logger/core";

/**
 * To set the logger level in the console run logger.level=logger.Level.DEBUG
 */

@Injectable()
@Inject('logger')
export class LoggerService {

    constructor
    (
        private logger: Logger
    )
    {
    }

    info(message : string){
        this.logger.info(message);
    }

    error(message : string){
        this.logger.error(message);
    }

    warn(message : string){
        this.logger.warn(message);
    }

    debug(message : string){
        this.logger.debug(message);
    }
}