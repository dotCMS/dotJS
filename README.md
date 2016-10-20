# DotCMS Angular 2 Library
This is a library of services and components to interact with a [DotCMS](http://dotcms.com) instance from [Angular 2](https://angular.io/).

## Install

```shell
npm install dotcms-js --save
```

## Usage

### Import Services

```typescript
import {APP_CONFIG, DOT_CONFIG} from "dotcms-js/core/app.config";
import {FileSystemService} from "dotcms-js/core/util/filesystem.service";
import {HttpClient} from "dotcms-js/core/util/http.service";
import {JWTAuthService} from "dotcms-js/core/util/jwt-auth.service";
import {LocalStoreService} from "dotcms-js/core/util/local-store.service";
import {LoggerService} from "dotcms-js/core/util/logger.service";
import {NotificationService} from "dotcms-js/core/util/notification.service";
import {SettingsStorageService} from "dotcms-js/core/util/settings-storage.service";
import {SiteBrowserService} from "dotcms-js/core/util/site-browser.service";
import {SiteBrowserState} from "dotcms-js/core/util/site-browser.state";

@NgModule({
    providers: [
        {provide: APP_CONFIG, useValue: DOT_CONFIG},
        {provide: FileSystemService, useClass: FileSystemService},
        {provide: HttpClient, useClass: HttpClient},
        {provide: JWTAuthService, useClass: JWTAuthService},
        {provide: LocalStoreService, useClass: LocalStoreService},
        {provide: LoggerService, useClass: LoggerService},
        {provide: NotificationService, useClass: NotificationService},
        {provide: SettingsStorageService, useClass: SettingsStorageService},
        {provide: SiteBrowserService, useClass: SiteBrowserService},
        {provide: SiteBrowserState, useClass: SiteBrowserState}
    ],
})
```

### Authorization
In order to start using the components you need to make sure you have a Auth Token. To get it we provide a ```login``` method in the ```JWTAuthService``` class.

If the login it's succefull the ```login``` method will save an Auth Token to the localStorage in the browser so other services can use it, more info in our [documentation](http://dotcms.com/dotcms-js/docs/).

In this example we are doing the login from the ```app.component.ts``` but you can do it from aywhere you need.

```typescript
import {Component, ViewEncapsulation} from '@angular/core';
import {JWTAuthService} from "dotcms-js/core/util/jwt-auth.service";

@Component({
    selector: 'my-app',
    template: '<h1>My App Component</h1>',
})
export class AppComponent {

    constructor(authService: JWTAuthService) {
        authService.login("http://demo.dotcms.com", "admin@dotcms.com", "admin").subscribe(token => {
            console.log('Login successfully');
        }, (err) => {
            console.log('Error on login', err);
        });
    }
}
```

### Import Components

```typescript
import {BreadcrumbComponent} from "dotcms-js/components/breadcrumb/breadcrumb.componet";

@NgModule({
    declarations: [
        BreadcrumbComponent
    ],
})
````

##### Use the component in your templates

```html
<breadcrumb></breadcrumb>
```

## Changelog

### 0.0.3
- Update npmingnore

### 0.0.2
- Add login method to JWTAuthService
- Update showcase login.

### 0.0.1
Initial commit


## To build the project locally
After you clone the repo

1. ```npm i```
2. ```typings install```
3. ```npm run build```