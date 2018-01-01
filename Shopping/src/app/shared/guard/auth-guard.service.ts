import { CanActivate } from "@angular/Router";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/Router/src/router_state";
import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private authService: AuthService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.authService.isAuthenticated();
    }

}