import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';
import { RecipeService } from '../../shared/services/recipe.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

   @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {
   }

  ngOnInit() {
  }

  onAddIngredientsToShoppingList(ingredients: Ingredient[]){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
