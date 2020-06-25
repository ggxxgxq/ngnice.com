import { DocgeniTemplateModule, CONFIG_TOKEN, routes, RootComponent, initializeDocgeniSite, GlobalContext } from '@docgeni/template';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { config } from './content/config';
import { RouterModule } from '@angular/router';
import { LIB_EXAMPLE_LOADER_PROVIDER } from './content/example-loader';
import { EXAMPLE_MODULES } from './content/example-modules';
import './content/navigations.json';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [
        AppRoutingModule,
        DocgeniTemplateModule,
        RouterModule.forRoot(routes, {
            // scrollPositionRestoration: 'enabled',
            anchorScrolling: 'disabled'
            // relativeLinkResolution: 'corrected'
        }),
        ...EXAMPLE_MODULES
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: initializeDocgeniSite,
            deps: [GlobalContext],
            multi: true
        },
        LIB_EXAMPLE_LOADER_PROVIDER,
        {
            provide: CONFIG_TOKEN,
            useValue: config
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {}
}