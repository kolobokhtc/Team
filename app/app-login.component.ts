/**
 * Created by Vladimir Pavlov (kolobokhtc@gmail.com) on 06.10.2016.
 */


import {Component, OnInit} from "@angular/core";
import {AuthService} from "./core/auth.service";
import {Router} from "@angular/router";
@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './app-login.component.html'
})

export class AppLoginComponent implements OnInit{
    model: any = {};
    loading = false;
    error = '';

    ngOnInit(): void {
        if (this.auth.loggedIn()) {
            this.router.navigate(['']);
        }
    }

    constructor(private auth: AuthService, private router: Router) {}

    login() {
        this.auth.login(this.model.username, this.model.password).subscribe(result => {
            if (result === true) {
                this.router.navigate(['']);
            } else {
                this.error = 'Username or Password incorrect'
                this.loading = false;
            }

        }, err => {
            this.error = 'Username or Password incorrect'
            this.loading = false;
        });
    }
}