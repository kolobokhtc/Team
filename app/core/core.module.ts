/**
 * Created by Vladimir Pavlov (kolobokhtc@gmail.com) on 06.10.2016.
 */

import {NgModule} from "@angular/core";
import {AuthService} from "./auth.service";
import {AuthGuard} from "./auth-guard.service";
@NgModule({
    providers: [
        AuthService,
        AuthGuard
    ]
})
export class CoreModule{}