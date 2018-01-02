import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/Router';

import { AuthGuard } from '../shared/guard/auth-guard.service';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';


const shoppingRoutes: Routes = [
  {
      path: '', component: ShoppingListComponent, canActivate: [AuthGuard],
      children:[
          {path: 'new', component: ShoppingEditComponent, canActivate: [AuthGuard]},
          {path: ':id', component: ShoppingEditComponent, canActivate: [AuthGuard]}
      ]
  },
];

@NgModule({  
  imports: [RouterModule.forChild(shoppingRoutes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
