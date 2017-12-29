import { Observable } from "rxjs/Observable";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/Router";

export interface ICanComponentDeactivate{
    canDeactivate: ()=>Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<ICanComponentDeactivate> {

        canDeactivate(  component: ICanComponentDeactivate,
                        currentRoute: ActivatedRouteSnapshot, 
                        currentState: RouterStateSnapshot, 
                        nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return component.canDeactivate();
        }
}