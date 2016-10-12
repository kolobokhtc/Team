/**
 * Created by Vladimir Pavlov (kolobokhtc@gmail.com) on 06.10.2016.
 */
import {Component, OnInit} from "@angular/core";
import {AuthService} from "../core/auth.service";
import {Router} from "@angular/router";

import "rxjs/add/operator/toPromise";
import {Http} from "@angular/http";


@Component({
    moduleId: module.id,
    selector: 'user-list',
    template: `<h3>THIS IS user list</h3>
<button (click)="logout()">LOGOUT</button>`
})
export class UserListComponent implements OnInit{
    constructor(private authService: AuthService, private http: Http, private router: Router) {
    };

    logout() {
        this.authService.logout();
    }

    ngOnInit(){

    }

}