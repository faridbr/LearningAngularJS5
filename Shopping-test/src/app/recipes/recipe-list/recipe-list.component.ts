import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Recipe } from './recipe.model';
import { RecipeService } from '../../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  recipesChangesSubscription: Subscription

  constructor(  private recipeService: RecipeService,
                private router: Router,
                private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.recipes;
    this.recipesChangesSubscription = this.recipeService.recipesChanged.subscribe((recipes: Recipe[])=>{
      this.recipes = recipes;
    });
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(){
    this.recipesChangesSubscription.unsubscribe();
  }
}
