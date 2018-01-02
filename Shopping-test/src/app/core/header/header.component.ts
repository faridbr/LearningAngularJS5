import {Component} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/Router";

import { ShoppingListService } from "../../shared/services/shopping-list.service";
import { RecipeService } from "../../shared/services/recipe.service";
import { DataStorageService } from "../../shared/services/data-storage.service";
import { AuthService } from "../../shared/services/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
}) 
export class HeaderComponent{

    userIsAuthenticated = false;

    constructor(private shoppingListService: ShoppingListService, 
                private recipeService: RecipeService,     
                private dataStorageService: DataStorageService, 
                private authService: AuthService,
                private router: Router){}

    onShoppingSelect(){
        this.shoppingListService.isAddingShopping.next(false);
        this.router.navigate(['shopping-list']);
    }

    onSave(){
        this.dataStorageService.saveData(this.recipeService.recipes, this.shoppingListService.ingredients);
    }
    
    onFetch(){
        this.dataStorageService.loadData();
    }

    sinOut(){
        this.authService.signOut();
        this.router.navigate(["/signin"]);
    }
}
