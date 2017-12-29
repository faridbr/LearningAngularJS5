import { NgModule } from "@angular/core";
import { Routes } from "@angular/Router";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RouterModule } from "@angular/Router";
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuard } from "./can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "./server.resolver.service";

const appRoutes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'}, 
    {path: 'users', component: UsersComponent, children:[//localhost:3002/users for router-outlet
      {path: ':id/:name', component: UserComponent},
    ]},
    {path: 'servers',canActivateChild: [AuthGuard], component: ServersComponent, children: [ //add children to route servers 
      {path: ':id', component: ServerComponent, resolve: {server: ServerResolver}},
      {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]}
    ]},
    //{path:'not-found', component: PageNotFoundComponent},
    {path:'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
    {path: '**', redirectTo: '/not-found'}
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes) //useHash compatible for old browser it add /#/ in url
        //RouterModule.forRoot(appRoutes, {useHash: true}) //useHash compatible for old browser it add /#/ in url
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{

}