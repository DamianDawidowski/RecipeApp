import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';     
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core.module'; 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,   
  ],
  imports: [ 
    BrowserModule,   
    HttpClientModule,  
    AppRoutingModule, 
    SharedModule,
    CoreModule, 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }