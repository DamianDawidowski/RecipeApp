import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "./ingredient.model";
import { Subject } from "rxjs";

export class recipesService {
// recipeSelected = new Subject<Recipe>();
recipesChanges = new Subject<Recipe[]>;

// private recipes: Recipe[] = [
//    new Recipe('A Pizza', 
//    'A tasty awesome pizza',
//    'https://upload.wikimedia.org/wikipedia/commons/5/54/Cheese_and_Pepperoni_Pizza_%284825046245%29.jpg',
//    [
//     new Ingredient('flour', 1),
//     new Ingredient('cheese' ,3),
//     new Ingredient('tomato', 2),
//     new Ingredient('sausage', 3),
//     new Ingredient('egg', 1)
//    ]),
//    new Recipe('A Salad', 
//    'A tasty vegan salad...plus ham&egg&cheese',
//    'https://upload.wikimedia.org/wikipedia/commons/8/89/Food-salad-healthy-vegetables-1_%2823959011279%29.jpg',
//    [
//     new Ingredient('cucumber', 1),
//     new Ingredient('tomato' ,1),
//     new Ingredient('ham', 1),
//     new Ingredient('cheese', 3)
//    ])
//       ];

private recipes: Recipe[] = [];

setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanges.next(this.recipes.slice());
}

getRecipes() {
    return this.recipes.slice();
}

getRecipe(id: number) {
    return this.recipes[id];
}

addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanges.next(this.recipes.slice())
}

updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanges.next(this.recipes.slice())
}

deleteRecipe(index: number) {
    this.recipes.splice(index,1);
    this.recipesChanges.next(this.recipes.slice())
}
}