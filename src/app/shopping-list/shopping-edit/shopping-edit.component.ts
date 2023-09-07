import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ingredientService } from 'src/app/shared/ingredients.services';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @Output() ingredientCreated = new EventEmitter<Ingredient>();
 
  // @ViewChild ('nameInput', {static: true}) ingredientName: ElementRef;
  // @ViewChild ('amountInput', {static: true}) ingredientAmount: ElementRef;

  constructor(private ingredientService: ingredientService) {}


  addIngredient(nameInput: HTMLInputElement, amountInput: HTMLInputElement) { 
    this.ingredientService.addIngredient(new Ingredient(nameInput.value, amountInput.valueAsNumber))
    // let ingredientName: string = nameInput.value;
    // let ingredientAmount: number = amountInput.valueAsNumber;
    // let ingredient = new Ingredient(ingredientName, ingredientAmount)
    // // console.log(nameInput.value)
    // this.ingredientCreated.emit(ingredient)

}
}