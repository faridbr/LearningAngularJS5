import { CanActivate } from "@angular/Router";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/Router/src/router_state";
import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { CanLoad } from "@angular/Router";

@Injectable()
export class AuthGuard implements CanActivate, CanLoad{

    constructor(private authService: AuthService){}

    canActivate(){
        return this.authService.isAuthenticated();
    }

    canLoad(){
        return this.authService.isAuthenticated();
    }
}