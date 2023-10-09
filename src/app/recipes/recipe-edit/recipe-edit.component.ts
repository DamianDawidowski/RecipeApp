import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { recipesService } from 'src/app/shared/recipes.services';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

id: number;
 editMode = false;
 recipeForm: FormGroup;

 constructor(private route: ActivatedRoute, private recipeService: recipesService,
 private router: Router) {}

ngOnInit() {
  this.route.params
  .subscribe(
    (params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null; 
      this.initForm();
}) 
 

};

onSubmit() {
  // const newRecipe = new Recipe(
  //   this.recipeForm.value['name'],
  //   this.recipeForm.value['description'],
  //   this.recipeForm.value['imagePath'],
  //   this.recipeForm.value['ingredients'],
  // )
 if(this.editMode) {
  this.recipeService.updateRecipe(this.id, this.recipeForm.value )
 } else {
  this.recipeService.addRecipe(this.recipeForm.value)
 };
 this.sendToRecipePage();
}

onAddIngredient() {
  (<FormArray>this.recipeForm.get('ingredients')).push(
    new FormGroup({
      'name':new FormControl(null, Validators.required),
      'amount':new FormControl(null,
        [Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
    })
  );
}

private initForm() { 
  let recipeName = '';
  let recipeImagePath ='';
  let recipeDescription='';
  let recipeIngredients = new FormArray([])

  if(this.editMode) {
    const recipe = this.recipeService.getRecipe(this.id);
    recipeName = recipe.name;
    recipeImagePath = recipe.imagePath;
    recipeDescription = recipe.description;
    if (recipe['ingredients']) {
      for(let ingredient of recipe.ingredients) {
        recipeIngredients.push(
          new FormGroup({
            'name':new FormControl(ingredient.name, Validators.required),
            'amount':new FormControl(ingredient.amount,
              [Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
          })
        )
      }
    }
  }

  this.recipeForm = new FormGroup({
    'name': new FormControl(recipeName, Validators.required),
    'imagePath': new FormControl(recipeImagePath, Validators.required),
    'description': new FormControl(recipeDescription, Validators.required),
    'ingredients': recipeIngredients,
  });
}


sendToRecipePage() {
  this.router.navigate([ '../'], {relativeTo: this.route})
}

onDeleteIngredient(index: number) {
(<FormArray>this.recipeForm.get('ingredients')).removeAt(index)
 
}

get controls() {  
  return (<FormArray>this.recipeForm.get('ingredients')).controls;
}
}
 