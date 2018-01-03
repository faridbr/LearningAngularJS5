import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import  'rxjs/add/operator/switchMap';
import  'rxjs/add/operator/take';
import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';

import { LocalStorageService } from "./local-storage.service";
import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/store/auth.reducers'; 

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private store: Store<fromApp.IAppState>){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        return this.store.select('auth')
        .take(1) //unsubscribe after one request
        .switchMap(
            (authState: fromAuth.IState)=>{
                const copiedReq = req.clone({params: new HttpParams().set('auth', authState.token)});
                return next.handle(copiedReq);        
        });
    }
}