import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Iproduct } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 
  private productUrl = 'assets/products.json';
 
  constructor(private http:HttpClient) {
  
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
   getProduct():Iproduct[]{
        return this.products;
   }

  getProductViaUrl():Observable <Iproduct[]>{
    return this.http.get<Iproduct[]>(this.productUrl);
  }

  getProductViaUrlWithErrorHandled():Observable <Iproduct[]>{
    return this.http.get<Iproduct[]>(this.productUrl).pipe(
      tap(data=>console.log('all:',JSON.stringify(data))),
      catchError(this.handleError)
      );
  }
  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
