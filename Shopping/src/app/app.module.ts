import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/Router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ShoppingListService } from './shared/services/shopping-list.service';
import { RecipeService } from './shared/services/recipe.service';
import { DataStorageService } from './shared/services/data-storage.service';
import { AuthService } from './shared/services/auth.service';

import { RecipeModule } from './recipes/recipe.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingModule } from './shopping-list/shopping.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AuthModule } from './auth/auth.module';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],

  imports: [
    BrowserModule,
    HttpModule,

    RecipeModule,
    ShoppingModule,
    AuthModule,
    SharedModule,
    RouterModule.forRoot(appRoutes),
  ],

  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { 
}
