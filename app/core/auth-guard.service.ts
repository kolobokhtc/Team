import {AuthService} from "./auth.service";
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
/**
 * Created by Vladimir Pavlov (kolobokhtc@gmail.com) on 06.10.2016.
 */

@Injectable()
export class AuthGuard implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
        if (!this.auth.loggedIn()) {
            this.router.navigate(['login']);
            return false;
        }

        return true;
    }

    constructor(private auth: AuthService, private router: Router) {

    }

}