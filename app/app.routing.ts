import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {AppLoginComponent} from "./app-login.component";
/**
 * Created by Vladimir Pavlov (kolobokhtc@gmail.com) on 06.10.2016.
 */

export const routes: Routes = [
    {path: '', redirectTo: 'user', pathMatch: 'full'},
    {path: 'login', component: AppLoginComponent, pathMatch: 'full'},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'},

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);