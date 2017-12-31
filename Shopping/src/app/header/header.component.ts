import {Component} from "@angular/core";
import { ActivatedRoute } from "@angular/Router";
import { Router } from "@angular/Router";
import { Response } from "@angular/http";

import { ShoppingListService } from "../shared/services/shopping-list.service";
import { RecipeService } from "../shared/services/recipe.service";
import { DataStorageService } from "../shared/services/data-storage.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{

    constructor(private shoppingListService: ShoppingListService, 
                private recipeService: RecipeService,     
                private dataStorageService: DataStorageService, 
                private route: ActivatedRoute, 
                private router: Router){}

    onShoppingSelect(){
        this.shoppingListService.isAddingShopping.next(false);
        this.router.navigate(['shopping-list'],{relativeTo: this.route});
    }

    onSave(){
        this.dataStorageService.saveData(this.recipeService.recipes, this.shoppingListService.ingredients);
    }
    
    onFetch(){
        this.dataStorageService.loadData();
    }
}
