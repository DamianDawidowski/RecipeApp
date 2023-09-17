import { NgModule } from "@angular/core";
import { ingredientService } from "./shared/ingredients.services";
import { recipesService } from "./shared/recipes.services";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";


@NgModule({
    providers: [
        ingredientService, recipesService, 
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
    ]
})

export class CoreModule {}