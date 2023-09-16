import { Ingredient } from "./ingredient.model";
import { Subject } from 'rxjs';

export class ingredientService {
ingredientsChanged = new Subject<Ingredient[]>();
startedEditing = new Subject<number>();
private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 2)
  ];

getIngredient(index: number) {
  return this.ingredients[index];
}

getIngredients() {
  return this.ingredients.slice();
}

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addAllIngredients(newIngredients: Ingredient[]) {
    this.ingredients.push(...newIngredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  updateInredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice())
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice())
  }

}