/**
 * Created by Vladimir Pavlov (kolobokhtc@gmail.com) on 06.10.2016.
 */

import {NgModule} from "@angular/core";
import {AuthService} from "./auth.service";
@NgModule({
    providers: [
        AuthService
    ]
})
export class CoreModule{}