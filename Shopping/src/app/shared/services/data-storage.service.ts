import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { Recipe } from '../../recipes/recipe-list/recipe.model';
import { Ingredient } from '../ingredient.model';

@Injectable()
export class DataStorageService {

  recipesLoaded = new Subject<Recipe[]>()
  ingredientsLoaded = new Subject<Ingredient[]>()

  constructor(private http: Http) { }

  loadData(){
    this.loadIngredients();
    this.loadRecipes();
  }

  saveData(recipes: Recipe[], ingredients: Ingredient[]){
    this.saveIngredients(ingredients);
    this.saveRecipies(recipes);
  }

  private saveIngredients(ingredients: Ingredient[]){
    this.http.put('https://ng-recipe-book-88223.firebaseio.com/ingredient.json', ingredients)
      .subscribe(
        (response: Response)=>{console.log('Ingredients saved');},
        (error: Response)=>{console.log('Something went wrong when storing ingredients');}
    );
  }

  private saveRecipies(recipes: Recipe[]){
    this.http.put('https://ng-recipe-book-88223.firebaseio.com/recipe.json', recipes)
      .subscribe(
        (response: Response)=>{console.log('Recipes saved');},
        (error: Response)=>{console.log('Something went wrong when storing recipes');}
      );
  }

  private loadRecipes(){
    this.http.get('https://ng-recipe-book-88223.firebaseio.com/recipe.json')
      .map(
        (response: Response)=>{
          const recipes: Recipe[] = response.json();
          recipes.forEach(element => {
            if(!element.ingredients) element.ingredients = [];
          });
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[])=>{this.recipesLoaded.next(recipes); console.log('Recipes loaded succefully');},
        (error: Response)=>{console.log('Something went wrong when loading recipes');}
      );
  }

  private loadIngredients(){
    this.http.get('https://ng-recipe-book-88223.firebaseio.com/ingredient.json')
      .subscribe(
        (response: Response)=>{this.ingredientsLoaded.next(response.json()); console.log('Ingredients loaded succefully');},
        (error: Response)=>{console.log('Something went wrong when loading ingredients');}
    );
  }
}