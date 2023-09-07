import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { recipesService } from 'src/app/shared/recipes.services';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input('recipe') recipe: {name: string, description: string, imagePath: string}
   constructor(private recipesService: recipesService) {}


  clickedRecipe() { 
    this.recipesService.recipeSelected.emit(this.recipe)
  }
    



}
