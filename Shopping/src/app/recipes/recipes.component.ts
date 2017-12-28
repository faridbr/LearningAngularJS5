import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor() { }
  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe){
    this.selectedRecipe = recipe;
  }
}
