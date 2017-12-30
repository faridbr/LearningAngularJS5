import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe)=>{
      this.selectedRecipe = recipe;
    });
  }

  onRecipeSelected(recipe:Recipe){
    this.selectedRecipe = recipe;
  }
}
