import { Action } from "@ngrx/store";
import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.actions";

export interface IState {
    ingredients: Ingredient[],
    editedIngredient: Ingredient,
    editedIngredientId: number
}

const initialState: IState = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
        ],
        editedIngredient: null,
        editedIngredientId: -1
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions){
    switch(action.type){
        case ShoppingListActions.ADD_INGREDIENT:{
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload] //add new ingredient to other ingredient
            };
        }
        case ShoppingListActions.ADD_INGREDIENTS:{
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload] //add new ingredients to other ingredient
            };
        }
        case ShoppingListActions.UPDATE_INGREDIENT:{
            const ingredient = state.ingredients[state.editedIngredientId];
            const UpdatedIngredient = {
                ...ingredient,
                ...action.payload.ingredient
            };
            const ingredients = [...state.ingredients];
            ingredients[state.editedIngredientId] = UpdatedIngredient;
            return {
                ...state,
                ingredients: ingredients,
                editedIngredient: null,
                editedIngredientId: -1
            };
        }
        case ShoppingListActions.DELETE_INGREDIENT:{
            const ingredients = [...state.ingredients];
            ingredients.splice(state.editedIngredientId, 1);
            return {
                ...state,
                ingredients: ingredients,
                editedIngredient: null,
                editedIngredientId: -1

            };
        }
        case ShoppingListActions.START_EDIT:{
            const editedIngredient = {...state.ingredients[action.payload]};
            return {
                ...state,
                editedIngredient: editedIngredient,
                editedIngredientId: action.payload
            }
        }
        case ShoppingListActions.STOP_EDIT:{
            return {
                ...state,
                editedIngredient: null,
                editedIngredientId: -1
            };
        }
        default:
            return state;
    }
}