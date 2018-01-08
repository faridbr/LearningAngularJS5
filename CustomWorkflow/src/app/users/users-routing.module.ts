import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UsersComponent } from "./users.component";

const usersRoutes: Routes = [
    {path: 'users', component: UsersComponent}
]

@NgModule({
    imports: [RouterModule.forChild(usersRoutes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {}