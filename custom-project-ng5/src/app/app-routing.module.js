import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
var appRoutes = [
    { path: '', component: HomeComponent },
    { path: 'users', loadChildren: './users/users.module#UsersModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
export { AppRoutingModule };
