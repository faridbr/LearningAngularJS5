import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/Router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit  {

  shoppingForm: FormGroup

  constructor(private shoppingListService: ShoppingListService, private route: ActivatedRoute, private router: Router) {}

  id: number;
  editMode = true;

  ngOnInit() {
    this.createChildConrols();
    this.getInitialParams();
   
  }

  createChildConrols(){
    this.shoppingForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, Validators.required),
    });
  }
 
  getInitialParams(){
    this.route.params.subscribe((params: Params)=>{
      this.hideNewButton(params['id']);
      if(params['id']){
        this.id = +params['id'];
        const ingredient = this.shoppingListService.getIngredient(this.id);
        this.setShoppingForm(ingredient);
      }
    })
  }

  hideNewButton(editMode: boolean){
    this.editMode = editMode;
    this.shoppingListService.isAddingShopping.next(!this.editMode);
  }

  setShoppingForm(ingredient: Ingredient){
    this.shoppingForm.setValue({
      'name': ingredient.name,
      'amount': ingredient.amount
    });
  }

  onClearForm(){
    this.shoppingForm.reset();
  }

  onSaveShopping(){
    if(!this.editMode)
      this.addItem();
    else{
      this.updateItem();
      this.hideNewButton(false);
      this.router.navigate(['../new'], {relativeTo: this.route});
    }
  }

  addItem(){
    const ing = new Ingredient(this.shoppingForm.value.name, this.shoppingForm.value.amount);
    this.shoppingListService.addIngredient(ing);
    this.onClearForm();
  }

  updateItem(){
    const ing = new Ingredient(this.shoppingForm.value.name, this.shoppingForm.value.amount);
    this.shoppingListService.updateIngredient(ing, this.id);
    this.onClearForm();
  }

  onDeleteItem(){
    this.shoppingListService.deleteIngredient(this.id);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
