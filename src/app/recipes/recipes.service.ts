import {EventEmitter, Injectable} from '@angular/core';
import { Recipes } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
 export class RecipeService{
  recipeSelected = new EventEmitter<Recipes>();


   private recipes: Recipes[] = [
  new Recipes(
    'A Test Recipe', 
    'This is simple a test',
    'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg',
    [ new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
  new Recipes(
    'Another Test Recipe', 
    'This is simple a test',
    'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg',
    [new Ingredient('Buns', 1),
    new Ingredient('Meat', 2)
    ])
 ];

 constructor(private slService: ShoppingListService){

 }
 getRecipes(){
  return this.recipes.slice();
 }

 addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
 }
 }