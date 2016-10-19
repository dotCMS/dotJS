import {inject, TestBed} from '@angular/core/testing';
import {FileSystemService} from "./filesystem.service";
import {NotificationService} from "./notification.service";
import {APP_CONFIG, DOT_CONFIG} from "../app.config";

describe('Local Store Service', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {provide: APP_CONFIG, useValue: DOT_CONFIG},
                {provide: NotificationService, useClass: NotificationService},
                {provide: FileSystemService, useClass: FileSystemService},
            ],
        });
    });

    it('should run', inject([FileSystemService], (fileSystemService: FileSystemService) => {
        console.log(fileSystemService);
        expect(1).toBe(1);
    }));

});