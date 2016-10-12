import {Injectable} from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/map';

import {AuthData} from "./auth-data";
import {Router} from "@angular/router";
import {HttpClientService} from "./http-client.service";

@Injectable()
export class AuthService {

    public token: string;
    public authData: AuthData;

    private url = 'https://devstat.briz.ua/apirest/LoginRest';

    constructor(private http: Http, private httpClient: HttpClientService, private router: Router) {
        var currentUser = JSON.parse(localStorage.getItem('authData'));
        this.authData = currentUser;

        this.setCredentials();
    }

    login(username, password): Observable<boolean> {

        var headers = new Headers();

        headers.append('Accept', 'json');
        headers.append('apiKey', username);
        headers.append('secretKey', password);
        headers.append('loginType', 'user');

        return this.http.get(this.url,
            {
                headers: headers
            })
            .map((response: Response) => {
                let result = response.json();
                if (result.token) {

                    this.authData = result;
                    localStorage.setItem('authData', JSON.stringify(this.authData));
                    this.setCredentials();
                    return true;
                }
                return false;
            })

    }

    setCredentials(){
        this.httpClient.addHeader("Authorization", 'Bearer ' + this.getToken());
    }

    clearCredentials(){
        this.authData = new AuthData();
        localStorage.removeItem('authData');
        this.httpClient.addHeader("Authorization", '');
    }

    logout() {
        this.clearCredentials();
        this.router.navigate(['login']);
    }

    isExpiredToken(): boolean {

        if (!this.authData.token_expire) {
            return true;
        }

        var date = new Date();
        var current_time = date.getTime();

        if (this.authData.token_expire * 1000 <= current_time) {
            return true;
        }

        return false;

    }

    loggedIn(): boolean {

        if (!this.authData) {
            return false;
        }

        if (!this.authData.token) {
            return false;
        }

        if (this.isExpiredToken()) {
            return false;
        }

        return true;

    }

    getToken(): string {

        if (!this.loggedIn()) {
            return ''
        }

        return this.authData.token;

    }

}

@Injectable()
export class SecuredHttp{

}