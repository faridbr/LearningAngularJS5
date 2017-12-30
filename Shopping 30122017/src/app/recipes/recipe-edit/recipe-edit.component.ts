import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../shared/services/recipe.service';
import { ActivatedRoute, Params } from '@angular/Router';
import { Recipe } from '../recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe;
  id: number;
  editMode = false;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{
      this.id = +params['id'];
      this.editMode  = params['id'] != null;
      if(this.editMode)
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }
}
