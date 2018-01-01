import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/Router";

import { RecipesComponent } from "../../recipes/recipes.component";
import { RecipeListComponent } from "../../recipes/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "../../recipes/recipe-list/recipe-item/recipe-item.component";
import { RecipeDetailComponent } from "../../recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "../../recipes/recipe-edit/recipe-edit.component";
import { ShoppingListComponent } from "../../shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "../../shopping-list/shopping-edit/shopping-edit.component";
import { RecipeStartComponent } from "../../recipes/recipe-start/recipe-start.component";
import { SignupComponent } from "../../auth/signup/signup.component";
import { SigninComponent } from "../../auth/signin/signin.component";
import { AuthGuard } from "../guard/auth-guard.service";

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent, canActivate: [AuthGuard], 
        children:[
            {path: '', component: RecipeStartComponent, canActivate: [AuthGuard]},
            {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
            {path: ':id', component: RecipeDetailComponent, canActivate: [AuthGuard]},
            {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
        ]
    },
    {path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard],
        children:[
            {path: 'new', component: ShoppingEditComponent, canActivate: [AuthGuard]},
            {path: ':id', component: ShoppingEditComponent, canActivate: [AuthGuard]}
        ]
    },
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}