import {ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";
import {UserDetailComponent} from "./user-detail.component";
import {AuthGuard} from "../core/auth-guard.service";
import {UserListComponent} from "./user-list.component";
/**
 * Created by Vladimir Pavlov (kolobokhtc@gmail.com) on 06.10.2016.
 */

export const routing: ModuleWithProviders = RouterModule.forChild([
    {path: '', redirectTo:'list', pathMatch: 'full'},
    {path: 'list', component: UserListComponent, canActivate: [AuthGuard]},
    {path: ':id', component: UserDetailComponent, canActivate: [AuthGuard]},
]);