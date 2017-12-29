import { Routes } from '@angular/Router';

import { HomeComponent } from '../home/home.component';
import { UsersComponent } from '../users/users.component';
import { ServersComponent } from '../servers/servers.component';
import { UserComponent } from '../users/user/user.component';
import { ServerComponent } from '../servers/server/server.component';
import { EditServerComponent } from '../servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

export class Configuration{

    static appRoutes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'}, 
    {path: 'users', component: UsersComponent, children:[//localhost:3002/users for router-outlet
      {path: ':id/:name', component: UserComponent},
    ]},
    {path: 'servers', component: ServersComponent, children: [ //add children to route servers 
      {path: ':id', component: ServerComponent},
      {path: ':id/edit', component: EditServerComponent}
    ]},
    {path:'not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/not-found'}
  ];
}