import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { recipesService } from '../shared/recipes.services';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  selectedRecipe: Recipe;
  // @Input('recipeClicked_3') recipeDetail: {name: string, description: string, imagePath: string}
   
   constructor(private recipesService: recipesService) {}
   
   ngOnInit() {
    this.recipesService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe
      }
    )
   }


  // ngAfterContentChecked() {
  //   this.sendDetails.emit({ 
  //     recipeToSend: this.recipe });
  //   }


}
