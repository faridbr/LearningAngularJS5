import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/Router';

import { Recipe } from '../recipe-list/recipe.model';
import { RecipeService } from '../../shared/services/recipe.service';
import { Ingredient } from '../../shared/ingredient.model';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

   recipe: Recipe;
   id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {
   }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{
      this.id = +params['id']
      this.recipe = this.recipeService.getRecipe(this.id);
    })
  }

  onAddIngredientsToShoppingList(ingredients: Ingredient[]){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
    //this.router.navigate(['../', this.id,'edit'], {relativeTo: this.route}); Or
    //because we are already in recipe and we know the id
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
