import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';

import * as fromApp from '../store/app.reducers';
import * as fromAuth from './store/auth.reducers'; 

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private store: Store<fromApp.IAppState>) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('auth')
    .take(1)
    .map((authState: fromAuth.IState)=>{
      return authState.authenticated;
    });
  }

  canLoad(){
    return this.store.select('auth')
    .take(1)
    .map((authState: fromAuth.IState)=>{
      return authState.authenticated;
    });
  }
}
