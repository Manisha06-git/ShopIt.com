import { Component, OnInit } from '@angular/core';
import { Iproduct } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  pageTitle:string = "Product List";
  imageWidth:number = 50;
  imageMargin:number = 2;
  imageHeight = 30;
  showImage:boolean = false;
  private _listFilter:string = 'shampoo';

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
  
  products:Iproduct[] = [
    {
      "Id":1,
      "Name":"Shampoo-dove",
      "Price":500,
      "starRating":3,
      "imageUrl":"assets/Images/shampoo.jfif"
    },
    {
      "Id":2,
      "Name":"Shampoo-vatika",
      "Price":500,
      "starRating":5,
      "imageUrl":"assets/Images/shampoo.jfif"
    },
    {
      "Id":3,
      "Name":"Shampoo-clinic plus",
      "Price":100,
      "starRating":5,
      "imageUrl":"assets/Images/shampoo.jfif"
    },
    {
      "Id":4,
      "Name":"Shampoo-head&shoulders",
      "Price":100,
      "starRating":2,
      "imageUrl":"assets/Images/shampoo.jfif"
    }
  ];
  constructor() { }
  filteredProducts:Iproduct[] = this.products;
  ngOnInit(): void {
    console.log("application started");
    this._listFilter = 'shampoo'
  }
  toggleImage():void{
    this.showImage = !this.showImage;
  }

  onRatingClicked( message:string):void{
    alert(message);
  }
}
