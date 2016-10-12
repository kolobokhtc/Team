import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {routing} from "./app.routing";
import {CoreModule} from "./core/core.module";
import {AppLoginComponent} from "./app-login.component";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "@angular/material";
import {AppUserComponent} from "./appUser.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        CoreModule,
        MaterialModule.forRoot(),
        CommonModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        AppLoginComponent,
        AppUserComponent
    ],
    bootstrap: [
        AppComponent
    ]

})
export class AppModule {
}