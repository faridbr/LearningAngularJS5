import { Component, OnInit, OnDestroy} from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../../shared/services/recipe.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  recipesChangesSubscription: Subscription

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.recipes;
    this.recipesChangesSubscription = this.recipeService.recipesChanged.subscribe((recipes: Recipe[])=>{
      this.recipes = recipes;
    });
  }

  ngOnDestroy(){
    this.recipesChangesSubscription.unsubscribe();
  }
}
