/**
 * Created by Vladimir Pavlov (kolobokhtc@gmail.com) on 06.10.2016.
 */

import {NgModule} from "@angular/core";
import {routing} from "./user.routing";
import {UserComponent} from "./user.component";
import {UserDetailComponent} from "./user-detail.component";
import {UserListComponent} from "./user-list.component";
@NgModule({
    imports: [
        routing
    ],
    declarations: [
        UserComponent,
        UserDetailComponent,
        UserListComponent
    ]
})
export class UserModule {}