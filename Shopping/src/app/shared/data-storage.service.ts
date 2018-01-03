import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,) {
  }

  storeRecipes() {
    const req = new HttpRequest('PUT', 'https://ng-recipe-book-88223.firebaseio.com/recipe.json', this.recipeService.getRecipes(),{
      reportProgress: true,
    });
    return this.httpClient.request(req);
  }

  getRecipes() {
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-88223.firebaseio.com/recipe.json', {
        observe: 'body', 
        responseType: 'json'
        //headers: new HttpHeaders().set('Authorization','')
      })
    .map(
      (recipes) => {
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    )
    .subscribe(
      (recipes) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
