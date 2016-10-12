/**
 * Created by Vladimir Pavlov (kolobokhtc@gmail.com) on 06.10.2016.
 */

import {NgModule, SkipSelf, Optional} from "@angular/core";
import {AuthService} from "./auth.service";
import {AuthGuard} from "./auth-guard.service";
import {HttpClientService} from "./http-client.service";

@NgModule({
    providers: [
        AuthService,
        HttpClientService,
        AuthGuard
    ]
})
export class CoreModule{
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}