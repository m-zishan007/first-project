import { Component } from '@angular/core';
import { Recipes } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
selectedRecipe: Recipes;
constructor(){}

ngOnInit(){}
}
