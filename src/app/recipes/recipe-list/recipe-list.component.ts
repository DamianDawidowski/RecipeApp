import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { recipesService } from 'src/app/shared/recipes.services';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeBookComponent implements OnInit{
  recipes: Recipe[] = [];

  constructor(private recipesService: recipesService) {}   
  // @Input('recipeClicked_1') recipe: {name: string, description: string, imagePath: string}
  
 
  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
    }

 
   
  
  // ngAfterContentChecked() {
  //    console.log('clicked recipe is '+this.recipe)
  //   this.sendDetails.emit({ 
  //     recipeToSend: this.recipe });
  //   }
 
  

}