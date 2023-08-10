import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
 
recipes: Recipes[];
constructor(private recipeService: RecipeService){}

 ngOnInit() {
   this.recipes = this.recipeService.getRecipes();
 }

}
