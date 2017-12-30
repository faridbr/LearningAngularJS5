import { Injectable } from '@angular/core';
import { Recipe } from '../../recipes/recipe-list/recipe.model';
import { Ingredient } from '../ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {

  private allRecipes: Recipe [] = [
    new Recipe('Burger','Fish burger','http://bk-ca-prd.s3.amazonaws.com/sites/burgerking.ca/files/THMB-QUAD%20Stacker_1.png',[
      new Ingredient('patatoes',2),
      new Ingredient('salt',2),
    ]),
    new Recipe('Libanes plate','Shish taouk','https://photos.smugmug.com/Thai-Recipes-2017/i-cbT2RpB/0/f743dc95/X3/thai-cashew-chicken-recipe-30-X3.jpg',[
      new Ingredient('bananas',3),
      new Ingredient('milk',500),
    ]),
    new Recipe('Couscous','Algerian Couscous','https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fwww.2Ecuisineactuelle.2Efr.2Fvar.2Fcui.2Fstorage.2Fimages.2Frecettes-de-cuisine.2Fplat.2Fcouscous.2Fcouscous-algerien-facile-238583.2F1682054-2-fre-FR.2Fcouscous-algerien-facile.2Ejpg/748x372/quality/80/crop-from/center/couscous-algerien-facile.jpeg',[
      new Ingredient('flower',20),
      new Ingredient('water',15),
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  get recipes(){
    //slice for getting a copy of allRecipes array
    return this.allRecipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.allRecipes[id]
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }

}
