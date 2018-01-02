import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/Router";

import { HomeComponent } from "./core/home/home.component";
import { AuthGuard } from "./shared/guard/auth-guard.service";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";


const appRoutes: Routes = [
    {path: '', component: RecipeStartComponent},
    {path: '/recipes', loadChildren: './recipes/recipes.module#RecipesModule'} //load leazily
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}