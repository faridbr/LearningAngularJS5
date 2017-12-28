import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipes/recipe-list/recipe.model';
import { Ingredient } from '../ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private allRecipes: Recipe [] = [
    new Recipe('Burger','Fish burger','https://photos.smugmug.com/Thai-Recipes-2017/i-cbT2RpB/0/f743dc95/X3/thai-cashew-chicken-recipe-30-X3.jpg',[
      new Ingredient('patatoes',2),
      new Ingredient('salt',2),
    ]),
    new Recipe('Libanes plate','Shish taouk','https://photos.smugmug.com/Thai-Recipes-2017/i-cbT2RpB/0/f743dc95/X3/thai-cashew-chicken-recipe-30-X3.jpg',[
      new Ingredient('bananas',3),
      new Ingredient('milk',500),
    ]),
    new Recipe('Couscous','Algerian Couscous','https://photos.smugmug.com/Thai-Recipes-2017/i-cbT2RpB/0/f743dc95/X3/thai-cashew-chicken-recipe-30-X3.jpg',[
      new Ingredient('flower',20),
      new Ingredient('water',15),
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  get recipes(){
    //slice for getting a copy of allRecipes array
    return this.allRecipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }

}
