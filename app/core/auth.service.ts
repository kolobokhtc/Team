import {Injectable} from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs";

import 'rxjs/add/operator/map';

import {AuthData} from "./auth-data";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

    public token: string;
    public authData: AuthData;

    private url = 'https://devstat.briz.ua/apirest/LoginRest';

    constructor(private http: Http, private router: Router){
        var currentUser = JSON.parse(localStorage.getItem('authData'));
        this.authData = currentUser;
        console.log(this.authData);
    }

    login(username, password): Observable<boolean>{

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
                if (result.token){

                    this.authData = result;
                    localStorage.setItem('authData', JSON.stringify(this.authData));
                    return true;
                }
                return false;
            })

    }
    logout(){
        this.authData = new AuthData();
        localStorage.removeItem('authData');
        this.router.navigate(['login']);
    }

    isExpiredToken(): boolean{

        if(!this.authData.token_expire){
            return true;
        }

        var date = new Date();
        var current_time = date.getTime();

        if (this.authData.token_expire*1000 <= current_time){
            return true;
        }

        return false;

    }

    loggedIn(): boolean{

        if (!this.authData){
            return false;
        }

        if (!this.authData.token){
            return false;
        }

        if (this.isExpiredToken()){
            return false;
        }

        return true;

    }

    getToken(): string | boolean{

        if (!this.loggedIn()){
            return false
        }

        return this.authData.token;

    }

}