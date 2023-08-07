import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
@Output() recipeWasSelected = new EventEmitter<Recipes>();
  recipes: Recipes[] = [
  new Recipes('A Test Recipe', 'This is simple a test','https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg'),
  new Recipes('Another Test Recipe', 'This is simple a test','https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg')
 ];

 ngOnInit() {
   
 }
 onRecipeSelected(recipe: Recipes){
  this.recipeWasSelected.emit(recipe);
 }
}
