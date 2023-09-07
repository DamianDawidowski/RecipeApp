import { Ingredient } from "./ingredient.model";

export class ingredientService {


ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 2)
  ];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
  }

}