import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Input() ingredient: Ingredient;
  selectedIngredientId: number;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.onClearForm();
    this.shoppingListService.selectedIngredient.subscribe((id: number)=>{
      this.selectedIngredientId = id;
      this.ingredient = this.shoppingListService.getIngredient(id);
    })
  }

  onClearForm(){
    this.ingredient = new Ingredient('', null);
  }

  onAddItem(){
    const ing = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.shoppingListService.addIngredient(ing);
    this.onClearForm();
  }

  onUpdateItem(){
    const ing = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.shoppingListService.updateIngredient(ing, this.selectedIngredientId);
    this.onClearForm();
  }

  onDeleteItem(){
    this.shoppingListService.deleteIngredient(this.selectedIngredientId);
    this.onClearForm();
  }
}
