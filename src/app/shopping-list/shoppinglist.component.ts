import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ingredientService } from '../shared/ingredients.services';
import { Subscription } from 'rxjs'; 

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{
ingredients: Ingredient[] = [];
private subscription: Subscription;

constructor(private ingredientService: ingredientService) {}
  
ngOnInit(): void {
  this.ingredients = this.ingredientService.getIngredients();
  this.subscription = this.ingredientService.ingredientsChanged
  .subscribe(
    (ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    })  
}

onEditItem(index: number) {
  this.ingredientService.startedEditing.next(index)
}
 
ngOnDestroy() {
  this.subscription.unsubscribe();
}
}