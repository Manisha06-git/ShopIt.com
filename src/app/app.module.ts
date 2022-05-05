import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';

import { FormsModule } from '@angular/forms';
import { CovertToSpacesPipe } from 'src/Shared/ConvertToSpaces.pipe';
import { StarComponent } from 'src/Shared/star.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailsComponent } from './products/product-details.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { ProductDetailGuard } from './products/product-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CovertToSpacesPipe,
    StarComponent,
    ProductDetailsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'products',component:ProductsComponent},
      {path:'products/:id', 
      canActivate:[ProductDetailGuard],
      component:ProductDetailsComponent
    
    },
      {path:'welcome', component:WelcomeComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**', redirectTo:'welcome', pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
