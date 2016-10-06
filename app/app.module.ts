import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {routing} from "./app.routing";
import {UserModule} from "./user/user.module";
import {CoreModule} from "./core/core.module";

@NgModule({
    imports: [
        BrowserModule,
        UserModule,
        CoreModule,
        routing
    ],
    declarations:[
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]

})
export class AppModule{}