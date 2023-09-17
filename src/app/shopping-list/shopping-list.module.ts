import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shoppinglist.component";
import { RouterModule } from "@angular/router"; 
import { ShoppingListRoutingModule } from "./shopping-list-routing.module";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
 

@NgModule({
    declarations: [  
    ShoppingListComponent, 
    ShoppingEditComponent,
      ],
    imports: [
        RouterModule,   
        FormsModule,
        ReactiveFormsModule,
        ShoppingListRoutingModule,
        SharedModule
    ]
}) 

export class ShoppingListModule {}