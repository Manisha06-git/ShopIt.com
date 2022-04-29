import { Component, OnInit } from '@angular/core';

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
  products:any[] = [
    {
      "Id":1,
      "Name":"Shampoo1",
      "Price":500,
      "starRating":3,
      "imageUrl":"assets/Images/shampoo.jfif"
    },
    {
      "Id":2,
      "Name":"Shampoo2",
      "Price":500,
      "starRating":5,
      "imageUrl":"assets/Images/shampoo.jfif"
    },
    {
      "Id":3,
      "Name":"Shampoo3",
      "Price":100,
      "starRating":5,
      "imageUrl":"assets/Images/shampoo.jfif"
    },
    {
      "Id":4,
      "Name":"Shampoo4",
      "Price":100,
      "starRating":2,
      "imageUrl":"assets/Images/shampoo.jfif"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
