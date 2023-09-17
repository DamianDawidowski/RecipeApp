import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';  
  
const routes: Routes = [
    { path: '', redirectTo: 'recipes', pathMatch: 'full'},   
    { path: 'recipes', loadChildren: () => import('./recipes/recipes.module')
    .then(m => m.RecipesModule)},     
    { path: 'auth', loadChildren: () => import('./auth/auth.module')
    .then(m => m.AuthModule)},   
    { path: 'shopping-list', loadChildren: () => import('./shopping-list/shopping-list-routing.module')
    .then(m => m.ShoppingListRoutingModule)},   
 
    // { path: 'auth', component: AuthComponent },
    { path: '**', redirectTo: 'recipes'}
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
