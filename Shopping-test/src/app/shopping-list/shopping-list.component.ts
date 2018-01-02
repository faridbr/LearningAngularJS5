import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/Router';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shared/services/shopping-list.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  isCreatingNewShoppingSubscription: Subscription;
  ingredientsChangedSubscription: Subscription;
  isCreatingNewShopping = false;
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService, private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.ingredients;
    this.ingredientsChangedSubscription = this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[])=>{
      this.ingredients = ingredients;
    })

    this.isCreatingNewShoppingSubscription = this.shoppingListService.isAddingShopping.subscribe((showNew: boolean)=>{
      this.isCreatingNewShopping = showNew;
    });
  }

  addShopping(){
    if(!this.authService.isAuthenticated())
      this.router.navigate(['/recipes']);
    else{
      this.isCreatingNewShopping = true;
      this.router.navigate(['new'], {relativeTo: this.route});
    }
  }

  onShoppingSelect(index: number){
    this.shoppingListService.isAddingShopping.next(false);
    this.router.navigate([index], {relativeTo: this.route});
  }

  ngOnDestroy(){
    this.ingredientsChangedSubscription.unsubscribe();
    this.isCreatingNewShoppingSubscription.unsubscribe();
  }
}
