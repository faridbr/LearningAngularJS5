import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/Router';

import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AuthGuard } from '../shared/guard/auth-guard.service';

const recipesRoutes: Routes = [
  {path: 'recipes', component: RecipesComponent, canActivate: [AuthGuard], 
      children:[
          {path: '', component: RecipeStartComponent, canActivate: [AuthGuard]},
          {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
          {path: ':id', component: RecipeDetailComponent, canActivate: [AuthGuard]},
          {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
      ]
  },
];

@NgModule({  
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [
    RouterModule]
})
export class RecipesRoutingModule { }
