import { Component, Output, EventEmitter, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ingredientService } from 'src/app/shared/ingredients.services';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @Output() ingredientCreated = new EventEmitter<Ingredient>();
  @ViewChild('f',{static: false} ) ingredientForm: NgForm;
  ingredientName = '';
  number: number = 0;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
 
  constructor(private ingredientService: ingredientService) {}

  ngOnInit() {
   this.subscription = this.ingredientService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.ingredientService.getIngredient(index);
          this.ingredientForm.setValue({
            ingredientName: this.editedItem.name,
            number: this.editedItem.amount
          })
        }
      );
  } 
  submitIngredient() {  
    const newIngredient = new Ingredient(this.ingredientForm.value.ingredientName, 
    this.ingredientForm.value.number);
    if (this.editMode) {
      this.ingredientService.updateInredient(this.editedItemIndex, newIngredient)
    } else {
      this.ingredientService.addIngredient(newIngredient);
    } 
    this.editMode = false;
    this.ingredientForm.reset();
  
}

onClear() {
  this.ingredientForm.reset();
  this.editMode = false;
}

onDelete() {
  this.ingredientService.deleteIngredient(this.editedItemIndex);
  this.onClear();
}

ngOnDestroy(){
  this.subscription.unsubscribe();
}
}