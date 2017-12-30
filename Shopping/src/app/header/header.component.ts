import {Component} from "@angular/core";
import { ShoppingListService } from "../shared/services/shopping-list.service";
import { ActivatedRoute } from "@angular/Router";
import { Router } from "@angular/Router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{

    constructor(private shoppingListService: ShoppingListService, private route: ActivatedRoute, private router: Router){}

    onShoppingSelect(){
        this.shoppingListService.isAddingShopping.next(false);
        this.router.navigate(['shopping-list'],{relativeTo: this.route});
    }
}

