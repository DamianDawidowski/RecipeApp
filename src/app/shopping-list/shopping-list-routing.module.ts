import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { ShoppingListComponent } from "./shoppinglist.component";
import { CommonModule } from "@angular/common";
 

const appRoutesInList: Routes = [
    { path: 'shopping-list', component: ShoppingListComponent}, 
]
 
@NgModule({ 
    imports: [RouterModule.forChild(appRoutesInList)],
    exports: [RouterModule]
})

export class ShoppingListRoutingModule {}