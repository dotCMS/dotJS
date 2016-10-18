import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from '@angular/http';
import {LocationStrategy, HashLocationStrategy} from "@angular/common";


import { AppComponent } from './app.component';

import {SiteSelectorService} from "../../components/site-selector/site-selector.service";
import {HttpClient} from "../../core/util/http.service";
import {SiteBrowserState} from "../../core/util/site-browser.state";
import {NotificationService} from "../../core/util/notification.service";


import {APP_CONFIG, DOT_CONFIG} from "../../core/app.config";
import {BreadcrumbModule} from "primeng/components/breadcrumb/breadcrumb";
import {ButtonModule} from "primeng/components/button/button";
import {CodeHighlighterModule} from 'primeng/components/codehighlighter/codehighlighter';
import {DataTableModule} from "primeng/components/datatable/datatable";
import {DragDropModule} from "primeng/components/dragdrop/dragdrop";
import {FileSystemService} from "../../core/util/filesystem.service";
import {InputTextModule} from "primeng/components/inputtext/inputtext";
import {JWTAuthService} from "../../core/util/jwt-auth.service";
import {LocalStoreService} from "../../core/util/local-store.service";
import {LoggerService} from "../../core/util/logger.service";
import {MenuModule} from "primeng/components/menu/menu";
import {PasswordModule} from "primeng/components/password/password";
import {SettingsStorageService} from "../../core/util/settings-storage.service";
import {SiteBrowserService} from "../../core/util/site-browser.service";
import {SiteTreetableService} from "../../components/site-treetable/site-treetable.service";
import {TieredMenuModule} from 'primeng/primeng';
import {TreeTableModule, SharedModule, TreeModule, AutoCompleteModule} from 'primeng/primeng';


import {Logger, LOG_LOGGER_PROVIDERS, Options as LoggerOptions, Level as LoggerLevel} from "angular2-logger/core";
import {SettingsService} from "../services/settings.services";
import {routing} from "./app.routing";

// DOTJS COMPONENTS
import {BreadcrumbComponent} from "../../components/breadcrumb/breadcrumb.componet";
import {SiteDatatableComponent} from "../../components/site-datatable/site-datatable.component";
import {SiteSelectorComponent} from '../../components/site-selector/site-selector.component';
import {SiteTreeTableComponent} from "../../components/site-treetable/site-treetable.component";
import {TreeableDetailComponent} from "../../components/treeable-detail/treeable-detail.component";


// SHOWCASE PAGES
import {BreadcrumbDemoShowcase} from "../components/breadcrumb/breadcrumb";
import {SiteDatatableDemoShowcase} from "../components/site-datatable/site-datatable";
import {SiteSelectorDemoShowcase} from "../components/site-selector/site-selector";
import {SiteTreeTableDemoShowcase} from "../components/site-treetable/site-treetable";
import {TreeableDetailComponentDemoShowcase} from "../components/treeable-detail/treeable-detail";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,

        TreeTableModule,
        SharedModule,
        TreeModule,
        AutoCompleteModule,
        BreadcrumbModule,
        MenuModule,
        DragDropModule,
        DataTableModule,
        InputTextModule,
        ButtonModule,
        PasswordModule,
        CodeHighlighterModule,
        TieredMenuModule,

        routing,
    ],
    declarations: [
        AppComponent,
        BreadcrumbComponent,
        BreadcrumbDemoShowcase,
        SiteDatatableComponent,
        SiteDatatableDemoShowcase,
        SiteSelectorComponent,
        SiteSelectorDemoShowcase,
        SiteTreeTableComponent,
        SiteTreeTableDemoShowcase,
        TreeableDetailComponent,
        TreeableDetailComponentDemoShowcase
    ],
    providers: [
        Logger,
        {provide: HttpClient, useClass: HttpClient},
        {provide: APP_CONFIG, useValue: DOT_CONFIG},
        {provide: SettingsService, useClass: SettingsService},
        {provide: NotificationService, useClass: NotificationService},
        {provide: FileSystemService, useClass: FileSystemService},
        {provide: SiteTreetableService, useClass: SiteTreetableService},
        {provide: SiteBrowserService, useClass: SiteBrowserService},
        {provide: SiteSelectorService, useClass: SiteSelectorService},
        {provide: LoggerOptions, useValue: { level: LoggerLevel.INFO } },
        {provide: LoggerService, useClass: LoggerService},
        {provide: JWTAuthService, useClass: JWTAuthService},
        {provide: SiteBrowserState, useClass: SiteBrowserState},
        {provide: SettingsStorageService, useClass: SettingsStorageService},
        {provide: LocalStoreService, useClass: LocalStoreService},
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }