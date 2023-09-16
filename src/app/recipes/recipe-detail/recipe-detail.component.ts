import { Component, Input } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ingredientService } from 'src/app/shared/ingredients.services';
import { recipesService } from 'src/app/shared/recipes.services';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
 recipe: Recipe;
 id: number;
 
  constructor(private ingredientService: ingredientService, 
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: recipesService) {}

ngOnInit() {
  this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id']; 
        this.recipe = this.recipeService.getRecipe(this.id)
})
}
  sendToShopList() {
    this.ingredientService.addAllIngredients(this.recipe.ingredients)
  }
  
  sendToEditPage() {
    this.router.navigate(['../',this.id,'edit'], {relativeTo: this.route})
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes'])
  }
  
}
