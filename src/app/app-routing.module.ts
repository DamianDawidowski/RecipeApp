import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shoppinglist.component';
import { AppComponent } from './app.component';
import { RecipeBookComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { StartComponentComponent } from './start-component/start-component.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const routes: Routes = [
    { path: '', redirectTo: 'recipes', pathMatch: 'full'}, 
    { path: 'recipes', component: RecipesComponent, children: [ 
      { path: '', component: StartComponentComponent}, 
      { path: ':id', component: RecipeDetailComponent},  
      { path: 'new', component: RecipeEditComponent},  
        ],
 
}, 
    { path: 'shopping-list', component: ShoppingListComponent}, 
    
    {path: '**', redirectTo: 'recipes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
