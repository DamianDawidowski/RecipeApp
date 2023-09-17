import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { AuthGuard } from "./auth.guard";
 
@NgModule({
    declarations: [AuthComponent],
    imports: [CommonModule, FormsModule, 
    //   RouterModule.forChild([{ path: 'auth', component: AuthComponent }]), 
      SharedModule] 
}) 

export class AuthModule {}