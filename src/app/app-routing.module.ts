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
import { RecipesResolverService } from './recipes/recipes-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'recipes', pathMatch: 'full'}, 
    { path: 'recipes', 
    component: RecipesComponent, 
    canActivate: [AuthGuard],
    children: [ 
      { path: '', component: StartComponentComponent}, 
      { path: 'new', component: RecipeEditComponent}, 
      { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService]},   
      { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]},  
        ],
 
}, 
    { path: 'shopping-list', component: ShoppingListComponent}, 
    { path: 'auth', component: AuthComponent}, 
    
    {path: '**', redirectTo: 'recipes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
