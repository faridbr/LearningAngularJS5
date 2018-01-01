import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";

import { SharedModule } from "../shared/shared.module";
import { ShoppingRoutingModule } from "./shopping-routing.module";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ShoppingRoutingModule,
        SharedModule
    ],
    declarations:[
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
})
export class ShoppingModule{
}