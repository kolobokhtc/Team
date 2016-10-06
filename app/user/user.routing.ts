import {ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";
import {UserComponent} from "./user.component";
/**
 * Created by Vladimir Pavlov (kolobokhtc@gmail.com) on 06.10.2016.
 */

export const routing: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'user',
        component: UserComponent
    }
]);