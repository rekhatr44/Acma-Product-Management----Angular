import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, catchError, map, tap, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'api/products.json';
  constructor(private http:HttpClient) {}

 
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(tap(data => console.log('All',JSON.stringify(data))), catchError(this.handleError));
}

private handleError(err:HttpErrorResponse){
  let errorMessage = ' ';
  if(err.error instanceof ErrorEvent){
    errorMessage = `An error occured: $(err.status), error message is: ${err.message}`;
  }

  console.error(errorMessage);
  return throwError(()  => errorMessage);
}



getProduct(id: number): Observable<IProduct | undefined> {
  return this.getProducts().pipe(
    map((products: any[]) => products.find(product => product.productId === id)),
    tap(data => console.log('Product detail', data)),
    catchError(this.handleError)
  );

}
}