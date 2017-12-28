import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef, Input } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new  EventEmitter<Ingredient>();
  @Output() ingredientDeleted = new  EventEmitter<string>();
  @Input() ingredient: Ingredient;

  constructor() {
   }

  ngOnInit() {
  }

  onClearForm(){
    this.ingredient = new Ingredient('', 0);
  }

  onAddItem(){
    this.ingredientAdded.emit(new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value));
    this.onClearForm();
  }

  onDeleteItem(name: string){
    this.ingredientDeleted.emit(name);
    this.onClearForm();
  }
}
