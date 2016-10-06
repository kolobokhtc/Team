import {AuthService} from "./auth.service";
import {Router, CanActivate} from "@angular/router";
/**
 * Created by Vladimir Pavlov (kolobokhtc@gmail.com) on 06.10.2016.
 */

export class AuthGuard implements CanActivate{

    canActivate(): boolean {
        if (!this.auth.loggedIn()){
            this.router.navigate(['']);
            return false;
        }

        return true;
    }

    constructor(private auth: AuthService, private router: Router){

    }

}