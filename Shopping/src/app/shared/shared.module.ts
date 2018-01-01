import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DropdownDirective } from "./directives/dropdown.directive";
import { AuthGuard } from "./guard/auth-guard.service";

@NgModule({
    declarations: [
        DropdownDirective,
    ],
    exports:[
        CommonModule,

        DropdownDirective,
    ],
    providers: [AuthGuard],
})
export class SharedModule{

}