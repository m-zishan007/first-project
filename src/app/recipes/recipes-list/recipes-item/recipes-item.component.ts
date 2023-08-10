import { Component, Input, OnInit } from '@angular/core';
import { Recipes } from '../../recipes.model';
import { RecipeService } from '../../recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipes;
 
  constructor(private recipeService: RecipeService){}
  ngOnInit(){
    
  } 
  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
