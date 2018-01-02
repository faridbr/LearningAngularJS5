import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';


@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
    // return this.httpClient.put('https://ng-recipe-book-88223.firebaseio.com/recipe.json', 
    //                           this.recipeService.getRecipes(),{
    //                             //observe: 'events'
    //                             params: new HttpParams().set('auth',token)
    //                           });

    const req = new HttpRequest('PUT', 'https://ng-recipe-book-88223.firebaseio.com/recipe.json', this.recipeService.getRecipes(),{
      reportProgress: true,
    });
    return this.httpClient.request(req);
  }

  getRecipes() {
    // this.httpClient.get<Recipe[]>('https://ng-recipe-book-88223.firebaseio.com/recipe.json?auth=' + token)
    //   .map(
    //     (recipes) => {
    //       for (let recipe of recipes) {
    //         if (!recipe['ingredients']) {
    //           recipe['ingredients'] = [];
    //         }
    //       }
    //       return recipes;
    //     }
    //   )
    //   .subscribe(
    //     (recipes: Recipe[]) => {
    //       this.recipeService.setRecipes(recipes);
    //     }
    //   );

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
