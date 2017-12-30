import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shared/services/shopping-list.service';
import { ActivatedRoute } from '@angular/Router';
import { Params } from '@angular/Router';
import { Router } from '@angular/Router';
import { AfterContentInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit  {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Input() ingredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService, private route: ActivatedRoute, private router: Router) {}

  id: number = -1;

  ngOnInit() {
    this.onClearForm();
    
    this.route.params.subscribe((params: Params)=>{
      if(params['id']){
        this.id = +params['id'];
        this.ingredient = this.shoppingListService.getIngredient(this.id);
        this.shoppingListService.isAddingShopping.next(false);
      }else{
        this.shoppingListService.isAddingShopping.next(true);
        this.id = -1;
      }
    })
  }

  onClearForm(){

    this.ingredient = new Ingredient('', null);
  }

  onAddItem(){
    const ing = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.shoppingListService.addIngredient(ing);
    this.ingredient = new Ingredient('', null);
  }

  onUpdateItem(){
    const ing = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.shoppingListService.updateIngredient(ing, this.id);
  }

  onDeleteItem(){
    this.shoppingListService.deleteIngredient(this.id);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

resetForm(form: NgForm) {
  form.reset();
  }

}
