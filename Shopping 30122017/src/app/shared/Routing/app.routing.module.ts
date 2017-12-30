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

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent, 
        children:[
            {path: '', component: RecipeStartComponent },
            {path: 'new', component: RecipeEditComponent},
            {path: ':id', component: RecipeDetailComponent},
            {path: ':id/edit', component: RecipeEditComponent}
        ]
    },
    {path: 'shopping-list', component: ShoppingListComponent,
        children:[
            {path: 'new', component: ShoppingEditComponent},
            {path: ':id', component: ShoppingEditComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}