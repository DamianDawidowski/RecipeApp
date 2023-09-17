import { NgModule } from "@angular/core";
import { StartComponentComponent } from "../start-component/start-component.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeBookComponent } from "./recipe-list/recipe-list.component";
import { RecipesComponent } from "./recipes.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component"; 
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RecipesRoutingModule } from "./recipes-routing.module"; 
import { SharedModule } from "../shared/shared.module";
  
@NgModule({
    declarations: [
        StartComponentComponent,
        RecipeEditComponent,
        RecipeBookComponent,
        RecipesComponent,
        RecipeDetailComponent,
        RecipeItemComponent,  
    ],
    exports: [ 
    ],
    imports: [
      RouterModule,   
      ReactiveFormsModule,
      RecipesRoutingModule, 
      CommonModule,
      SharedModule
    ],
})
export class RecipesModule {}