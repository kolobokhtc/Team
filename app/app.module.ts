import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {routing} from "./app.routing";
import {CoreModule} from "./core/core.module";
import {AppLoginComponent} from "./app-login.component";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        CoreModule,
        CommonModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        AppLoginComponent
    ],
    bootstrap: [
        AppComponent
    ]

})
export class AppModule {
}