import { EventEmitter } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "./ingredient.model";

export class recipesService {
recipeSelected = new EventEmitter<Recipe>();

private recipes: Recipe[] = [
   new Recipe('A Pizza', 
   'A tasty pizza',
   'https://upload.wikimedia.org/wikipedia/commons/5/54/Cheese_and_Pepperoni_Pizza_%284825046245%29.jpg',
   [
    new Ingredient('flour', 1),
    new Ingredient('cheese' ,3),
    new Ingredient('tomato', 2),
    new Ingredient('sausage', 3),
    new Ingredient('egg', 1)
   ]),
   new Recipe('A Salad', 
   'A tasty salad',
   'https://upload.wikimedia.org/wikipedia/commons/8/89/Food-salad-healthy-vegetables-1_%2823959011279%29.jpg',
   [
    new Ingredient('cucumber', 1),
    new Ingredient('tomato' ,1),
    new Ingredient('ham', 1),
    new Ingredient('cheese', 3)
   ])
      ];

getRecipes() {
    return this.recipes.slice();
}

getRecipe(id: number) {
    return this.recipes[id];
}

}