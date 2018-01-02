import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { LocalStorageService } from "./local-storage.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private localStorageService: LocalStorageService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const token = this.localStorageService.getItem('token');
        console.log('Intercepted', req);
        const copiedReq = req.clone({params: new HttpParams().set('auth', token)});
        return next.handle(copiedReq);
    }
}