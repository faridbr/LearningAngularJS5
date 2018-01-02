import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/Router";

import { HomeComponent } from "./core/home/home.component";
import { AuthGuard } from "./shared/guard/auth-guard.service";


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', canLoad: [AuthGuard]} //load leazily
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}