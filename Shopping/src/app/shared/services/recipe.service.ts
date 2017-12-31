import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../../recipes/recipe-list/recipe.model';
import { Ingredient } from '../ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { DataStorageService } from './data-storage.service';

@Injectable()
export class RecipeService implements OnDestroy {

  recipesChanged = new Subject<Recipe[]>()
  recipeLoadedSoubscription: Subscription;

  private allRecipes = new Array<Recipe>();

  constructor(private shoppingListService: ShoppingListService, private dataStorageService: DataStorageService ) { 
    this.recipeLoadedSoubscription = this.dataStorageService.recipesLoaded.subscribe(
      (recipes: Recipe[])=>{
        this.allRecipes = recipes;
        this.refreshRecipes();
      })
  }

  ngOnDestroy(){
    this.recipeLoadedSoubscription.unsubscribe();
  }
  
  get recipes(){
    return this.allRecipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.allRecipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.allRecipes.push(recipe);
    this.refreshRecipes();
  }

  updateRecipe(id: number, recipe: Recipe) {
    this.allRecipes[id] = recipe;
    this.refreshRecipes();
  }

  deleteRecipe(id: number) {
    this.allRecipes.splice(id, 1);
    this.refreshRecipes();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
    this.refreshRecipes();
  }

  private refreshRecipes(){
    this.recipesChanged.next(this.recipes);
  }
}
