import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  createWishList(wishListData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}wishlists`, wishListData)
  }

  addProductToWishList(wishListData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}product-wish-details`, wishListData)
  }

  removeProductFromWishList(wishListProductId: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}product-wish-details/${wishListProductId}`)
  }

  getMyWishLists(): Observable<any> {
    return this.http.get(`${environment.apiUrl}wishlists/mine`)
  }

  removeWishList(wishListId: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}wishlists/${wishListId}`)
  }
}
