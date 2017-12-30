import { Injectable } from '@angular/core';
import { Ingredient } from '../ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {

  isAddingShopping = new Subject<boolean>();
  ingredientsChanged = new Subject<Ingredient[]>()

  private AllIngredients: Ingredient[] = [
                                            new Ingredient('Apples', 5),
                                            new Ingredient('Tomatoes', 10)
                                        ];

  constructor() { }

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

