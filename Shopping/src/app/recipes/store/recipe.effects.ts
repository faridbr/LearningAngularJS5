import { Effect, Actions } from "@ngrx/effects";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/withLatestFrom";
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store/";

import * as fromRecipe from '../store/recipe.reducers';
import * as RecipeActions from '../store/recipe.actions';
import { Recipe } from "../recipe.model";

@Injectable()
export class RecipeEffects {
    @Effect()
    recipeFetch = this.actions$
    .ofType(RecipeActions.FETCH_RECIPES)
    .switchMap((action: RecipeActions.FetchRecipes)=>{
        return  this.httpClient.get<Recipe[]>('https://ng-recipe-book-88223.firebaseio.com/recipe.json', {
            observe: 'body', 
            responseType: 'json'
          });
    })
    .map(
        (recipes) => {
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return {
            type: RecipeActions.SET_RECIPES,
            payload: recipes    
            };
        }
      );

    @Effect({dispatch: false})
    recipeStore = this.actions$
    .ofType(RecipeActions.STORE_RECIPES)
    .withLatestFrom(this.store.select('recipes'))
    .switchMap(([action, state])=>{
        const req = new HttpRequest('PUT', 'https://ng-recipe-book-88223.firebaseio.com/recipe.json', 
            state.recipes, {
            reportProgress: true,
          });
        return this.httpClient.request(req);
    })
    
    constructor(private actions$: Actions, 
                private httpClient: HttpClient,
                private store: Store<fromRecipe.FeatureState>){}
}