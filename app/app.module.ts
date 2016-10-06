import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {routing} from "./app.routing";
import {UserModule} from "./user/user.module";
import {CoreModule} from "./core/core.module";
import {AppLoginComponent} from "./app-login.component";

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        routing
    ],
    declarations:[
        AppComponent,
        AppLoginComponent
    ],
    bootstrap: [
        AppComponent
    ]

})
export class AppModule{}