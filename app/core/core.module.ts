/**
 * Created by Vladimir Pavlov (kolobokhtc@gmail.com) on 06.10.2016.
 */

import {NgModule, SkipSelf, Optional} from "@angular/core";
import {AuthService, SecureHttp} from "./auth.service";
import {AuthGuard} from "./auth-guard.service";

@NgModule({
    providers: [
        AuthService,
        SecureHttp,
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