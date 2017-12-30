import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../ingredient.model';

@Injectable()
export class ShoppingListService {

  selectedIngredient = new EventEmitter<number>();
  ingredientsChanged = new EventEmitter<Ingredient[]>();

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
    this.ingredientsChanged.emit(this.ingredients);
  }

  addIngredients(ingredients: Ingredient[]){
    // ingredients.forEach(ingredient => {
    //   this.AllIngredients.push(ingredient);  
    // });
    this.AllIngredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients);
  }

  updateIngredient(ingredient: Ingredient, id: number){
    const ing = this.AllIngredients[id];
    ing.name = ingredient.name;
    ing.amount = ingredient.amount;
    this.ingredientsChanged.emit(this.ingredients);
  }

  deleteIngredient(id: number){
    this.AllIngredients.splice(id, 1);
    this.ingredientsChanged.emit(this.ingredients);
  }
}

