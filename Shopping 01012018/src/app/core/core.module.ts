import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AuthGuard } from '../shared/guard/auth-guard.service';
import { AuthService } from '../shared/services/auth.service';
import { DataStorageService } from '../shared/services/data-storage.service';
import { RecipeService } from '../shared/services/recipe.service';
import { ShoppingListService } from '../shared/services/shopping-list.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports:[
    SharedModule,
    AppRoutingModule
  ],
  exports:[
    HeaderComponent,
    AppRoutingModule
  ],
  providers: [
    ShoppingListService, 
    RecipeService, 
    DataStorageService, 
    AuthService, 
    AuthGuard
  ],
})
export class CoreModule { }
