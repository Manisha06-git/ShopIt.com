import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';

import { FormsModule } from '@angular/forms';
import { CovertToSpacesPipe } from 'src/Shared/ConvertToSpaces.pipe';
import { StarComponent } from 'src/Shared/star.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CovertToSpacesPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
