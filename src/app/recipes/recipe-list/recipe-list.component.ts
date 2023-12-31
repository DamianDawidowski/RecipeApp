import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { recipesService } from 'src/app/shared/recipes.services';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeBookComponent implements OnInit, OnDestroy{
  recipes: Recipe[] = [];
  subscription: Subscription;

  constructor(private recipesService: recipesService,
    private router: Router,
    private route: ActivatedRoute) {}   
  // @Input('recipeClicked_1') recipe: {name: string, description: string, imagePath: string}
  
 
  ngOnInit() {
   this.subscription =  this.recipesService.recipesChanges
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      });
   
    this.recipes = this.recipesService.getRecipes();
    }

    toStart() {
      this.router.navigate(['new'], {relativeTo: this.route})
    }
   
  
  // ngAfterContentChecked() {
  //    console.log('clicked recipe is '+this.recipe)
  //   this.sendDetails.emit({ 
  //     recipeToSend: this.recipe });
  //   }
 
  ngOnDestroy() {
    this.subscription.unsubscribe;
  }

}