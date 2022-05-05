import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Iproduct } from './products';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[ProductsService]
})
export class ProductsComponent implements OnInit, OnDestroy {
  pageTitle:string = "Product List";
  imageWidth:number = 50;
  imageMargin:number = 2;
  imageHeight = 30;
  showImage:boolean = false;
  private _listFilter:string = '';
  private _productService;
  
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter = value;
    console.log('In setter', value);
    this.filteredProducts = this.performFilter(value);
  }
  performFilter(filterBy:string):Iproduct[]{
    filterBy = filterBy.toLowerCase();

    return this.products.filter(
        (product:Iproduct) => 
        product.Name.toLowerCase().includes(filterBy)
    );
  }
  
  products:Iproduct[] = [];
  errorMessage = "";
  sub!: Subscription;
  constructor(private productsService:ProductsService) {
    this._productService = productsService;
   }
  
  filteredProducts:Iproduct[] = [];
  ngOnInit(): void {
     //this.products = this._productService.getProduct();

    this.sub = this._productService.getProductViaUrlWithErrorHandled()
    .subscribe({
      next:products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error:err => this.errorMessage = err

    });
    
  }
  ngOnDestroy() {
   this.sub.unsubscribe();
  }
  toggleImage():void{
    this.showImage = !this.showImage;
  }

  onRatingClicked( message:string):void{
    alert(message);
  }
}
