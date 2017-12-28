import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  selectedIngredient: Ingredient;

  constructor() { }
  ngOnInit() {
  }

  onSelect(ingredient: Ingredient){
    this.selectedIngredient = ingredient;
  }

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

  onIngredientDeleted(name: string){
    this.ingredients.forEach( (item, index) => {
      if(item.name === name) {
        this.ingredients.splice(index, 1);
        return;
      }
    });
  }
}
