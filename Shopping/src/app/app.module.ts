import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/Router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';

import { SharedModule } from './shared/shared.module';
import { ShoppingModule } from './shopping-list/shopping.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    HttpModule,

    ShoppingModule,
    AuthModule,
    SharedModule,
    CoreModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
}
