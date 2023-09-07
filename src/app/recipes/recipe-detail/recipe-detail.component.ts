import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input('recipe') recipe: {name: string, description: string, imagePath: string}
  


  
  ngAfterContentChecked() {
    console.log("at recipe detail :"+this.recipe)
    }
}
