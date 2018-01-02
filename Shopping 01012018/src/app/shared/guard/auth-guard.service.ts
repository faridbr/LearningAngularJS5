import { Injectable } from "@angular/core";
import { CanLoad, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/Router";

import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanLoad{

    constructor(private authService: AuthService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.authService.isAuthenticated();
    }

    canLoad(){
        return this.authService.isAuthenticated();
    }
}