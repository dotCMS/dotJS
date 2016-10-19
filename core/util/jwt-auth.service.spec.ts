import {inject, TestBed} from '@angular/core/testing';
import {BaseRequestOptions, ConnectionBackend, Http} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

import {APP_CONFIG, DOT_CONFIG} from "../app.config";
import {FileSystemService} from "./filesystem.service";
import {JWTAuthService} from './jwt-auth.service'
import {LocalStoreService} from "./local-store.service";
import {LoggerService} from "./logger.service";
import {Logger} from "angular2-logger/core";
import {NotificationService} from "./notification.service";
import {SettingsStorageService} from "./settings-storage.service";
import {SiteBrowserState} from "./site-browser.state";

describe('JWT Auth Service', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                BaseRequestOptions,
                MockBackend,
                Logger,
                {
                    provide: Http,
                    useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
                        return new Http(backend, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                },
                {provide: APP_CONFIG, useValue: DOT_CONFIG},
                {provide: FileSystemService, useClass: FileSystemService},
                {provide: JWTAuthService, useClass: JWTAuthService},
                {provide: LoggerService, useClass: LoggerService},
                {provide: NotificationService, useClass: NotificationService},
                {provide: SettingsStorageService, useClass: SettingsStorageService},
                {provide: LocalStoreService, useClass: LocalStoreService},
                {provide: SiteBrowserState, useClass: SiteBrowserState}
            ],
        });
    });

    it('get auth token', inject([JWTAuthService], (jWTAuthService: JWTAuthService) => {
        jWTAuthService.getJWT('http://demo37.dotcms.com', 'admin@dotcms.com', 'admin').subscribe(res => {
            expect(res).toBeNull();
        })

    }));

});