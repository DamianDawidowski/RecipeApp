import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ingredientService } from '../shared/ingredients.services';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppingListComponent {
ingredients: Ingredient[] = [];

constructor(private ingredientService: ingredientService) {}

// addIngredient(ingredient: Ingredient) {
//   this.ingredients.push(ingredient)
// }

ngOnInit(): void {
  this.ingredients = this.ingredientService.ingredients;
  
}


}