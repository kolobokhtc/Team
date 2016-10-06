import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
/**
 * Created by Vladimir Pavlov (kolobokhtc@gmail.com) on 06.10.2016.
 */

export const routes: Routes = [
    {
        path: '', redirectTo: 'user', pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);