import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http'

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AuthGuard } from '../auth/auth-guard.service';
import { AuthInterceptor } from '../shared/auth.interceptor';
import { LogginInterceptor } from '../shared/loggin.interceptor';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LogginInterceptor, multi: true}
  ]
})
export class CoreModule {}
