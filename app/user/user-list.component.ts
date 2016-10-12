/**
 * Created by Vladimir Pavlov (kolobokhtc@gmail.com) on 06.10.2016.
 */
import {Component, OnInit} from "@angular/core";
import {AuthService, SecureHttp} from "../core/auth.service";

import "rxjs/add/operator/toPromise";

@Component({
    moduleId: module.id,
    selector: 'user-list',
    template: `<h3>THIS IS user list</h3>
<button (click)="logout()">LOGOUT</button>`
})
export class UserListComponent implements OnInit{
    constructor(private authService: AuthService, private secureHttp: SecureHttp) {
    };

    logout() {
        this.authService.logout();
    }

    ngOnInit(){

    }

}