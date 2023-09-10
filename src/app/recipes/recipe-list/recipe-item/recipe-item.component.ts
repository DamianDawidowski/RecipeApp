import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { recipesService } from 'src/app/shared/recipes.services';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  constructor(private recipeService: recipesService) {}
  @Input() index: number;
  @Input() recipe: Recipe;


    nOnInit() {
   
    }


}
