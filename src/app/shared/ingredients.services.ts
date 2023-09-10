import { EventEmitter } from "@angular/core";
import { Ingredient } from "./ingredient.model";

export class ingredientService {

ingredientsChanged = new EventEmitter<Ingredient[]>();
private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 2)
  ];

getIngredients() {
  return this.ingredients.slice();
}

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addAllIngredients(newIngredients: Ingredient[]) {
    this.ingredients.push(...newIngredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}