import { Logger } from "angular2-logger/core";
/**
 * LoggerService to log.  Allows logger to be changed at runtime
 * To set the logger level in the console run logger.level=logger.Level.DEBUG
 */
export declare class LoggerService {
    private logger;
    constructor(logger: Logger);
    info(message: string): void;
    error(message: string): void;
    warn(message: string): void;
    debug(message: string): void;
}
