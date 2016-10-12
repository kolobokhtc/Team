import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, RequestOptionsArgs, Request, RequestMethod} from "@angular/http";
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/map';

import {AuthData} from "./auth-data";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

    public token: string;
    public authData: AuthData;

    private url = 'https://devstat.briz.ua/apirest/LoginRest';

    constructor(private http: Http, private router: Router) {
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

    setCredentials() {

    }

    clearCredentials() {
        this.authData = new AuthData();
        localStorage.removeItem('authData');
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

export class SecureHttpError extends Error {
}

@Injectable()
export class SecureHttp {

    constructor(private authService: AuthService, private http: Http, private requestOptions: RequestOptions) {}

    private requestWithToken(request: Request, token: string): Observable<Response>{

        if (this.authService.isExpiredToken()){
            return new Observable<Response>((obs: any) => {
                obs.error(new SecureHttpError('token is expired or invalid'));
            })
        }

        request.headers.set('Authorization', 'Bearer ' + token);

        return this.http.request(request);

    }

    private requestHelper(requestArgs: RequestOptionsArgs, additionalOptions?: RequestOptionsArgs): Observable<Response> {
        let options = new RequestOptions(requestArgs);
        if (additionalOptions) {
            options.merge(additionalOptions);
        }
        return this.request(new Request(options));
    }

    public request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {

        if (typeof url === 'string') {
            return this.get(url, options);
        }

        let request: Request = url as Request;
        let token: string = this.authService.getToken();

        return this.requestWithToken(request, token);

    }

    public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.requestHelper({body: '', method: RequestMethod.Get, url: url}, options);
    }

    public post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return this.requestHelper({body: body, method: RequestMethod.Post, url: url}, options);
    }

    public put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return this.requestHelper({body: body, method: RequestMethod.Put, url: url}, options);
    }

    public delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.requestHelper({body: '', method: RequestMethod.Delete, url: url}, options);
    }

    public patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return this.requestHelper({body: body, method: RequestMethod.Patch, url: url}, options);
    }

    public head(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.requestHelper({body: '', method: RequestMethod.Head, url: url}, options);
    }

    public options(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.requestHelper({body: '', method: RequestMethod.Options, url: url}, options);
    }

}