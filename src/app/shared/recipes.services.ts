import { EventEmitter } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "./ingredient.model";

export class recipesService {
recipeSelected = new EventEmitter<Recipe>();

private recipes: Recipe[] = [
   new Recipe('A test Recipe', 'This is simply a test','https://cdn.pixabay.com/photo/2023/07/23/20/44/pastry-shop-8145805_960_720.jpg'),
   new Recipe('A test Recipe2', 'This is simply a test2','https://cdn.pixabay.com/photo/2023/07/23/20/44/pastry-shop-8145805_960_720.jpg')
      ];

getRecipes() {
    return this.recipes.slice();
}

//   addIngredient(ingredient: Ingredient) {
//     this.ingredients.push(ingredient)
//   }

}