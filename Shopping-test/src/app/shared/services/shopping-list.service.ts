import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { DataStorageService } from './data-storage.service';
import { Ingredient } from '../ingredient.model';

@Injectable()
export class ShoppingListService implements OnDestroy {

  isAddingShopping = new Subject<boolean>();
  ingredientsChanged = new Subject<Ingredient[]>()
  ingredientsSoubscription: Subscription;

  private AllIngredients = new Array<Ingredient>();

  constructor(private dataStorageService: DataStorageService ) { 
    this.ingredientsSoubscription = this.dataStorageService.ingredientsLoaded.subscribe(
      (ingredients: Ingredient[])=>{
        this.AllIngredients = ingredients;
        this.ingredientsChanged.next(this.ingredients);
      })
  }

  ngOnDestroy(){
    this.ingredientsSoubscription.unsubscribe();
  }

  get ingredients(){
    //return this.AllIngredients;
    return this.AllIngredients.slice();
  }

  getIngredient(id: number){
    return this.AllIngredients[id];
  }

  addIngredient(ingredient: Ingredient){
    this.AllIngredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients);
  }

  addIngredients(ingredients: Ingredient[]){
    // ingredients.forEach(ingredient => {
    //   this.AllIngredients.push(ingredient);  
    // });
    this.AllIngredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients);
  }

  updateIngredient(ingredient: Ingredient, id: number){
    const ing = this.AllIngredients[id];
    ing.name = ingredient.name;
    ing.amount = ingredient.amount;
    this.ingredientsChanged.next(this.ingredients);
  }

  deleteIngredient(id: number){
    this.AllIngredients.splice(id, 1);
    this.ingredientsChanged.next(this.ingredients);
  }
}

