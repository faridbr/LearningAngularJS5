import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe 1','Simply Test 1','https://photos.smugmug.com/Thai-Recipes-2017/i-cbT2RpB/0/f743dc95/X3/thai-cashew-chicken-recipe-30-X3.jpg'),
    new Recipe('A test recipe 2','Simply Test 2','https://photos.smugmug.com/Thai-Recipes-2017/i-cbT2RpB/0/f743dc95/X3/thai-cashew-chicken-recipe-30-X3.jpg'),
    new Recipe('A test recipe 3','Simply Test 3','https://photos.smugmug.com/Thai-Recipes-2017/i-cbT2RpB/0/f743dc95/X3/thai-cashew-chicken-recipe-30-X3.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
