import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecipeApp';
  targetSection: string = 'recipe';

  changeToRecipes() {
this.targetSection = 'recipe'
  }

  changeToList() {
    // console.log('works')
    this.targetSection = 'list'
  }


}
