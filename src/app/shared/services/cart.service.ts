import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ENDPOINTS } from '../constants/endpoints';

export interface Cart {

  cartItems: any[];
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cart = new BehaviorSubject<Cart>({
    cartItems: [],
  });

  readonly cart$ = this._cart.asObservable();
  private cart: Cart = {
    cartItems: [],
  };

  constructor(private http: HttpClient) { }


  loadAll() {
    this.cart = {
      cartItems: [],
    };
    this._cart.next(this.cart);
  }
  update(data: any[]) {
    this.cart = {
      cartItems: [],
    };
    this.cart.cartItems = data;
    console.log(this.cart);
    this._cart.next(Object.assign([], this.cart));
  }

  create() {
    this._cart.next(
      Object.assign([], {
        cartItems: [],
      })
    );
  }

  getCartItems() {
    return this.http.get(`${environment.apiUrl}${ENDPOINTS.CART.GET}`);
  }

  addToCart(cartItem: any) {
    return this.http.patch(`${environment.apiUrl}${ENDPOINTS.CART.ADD_PRODUCT}`,cartItem);
  }

  removeFromCart(cartItem: any) {
    return this.http.patch(`${environment.apiUrl}${ENDPOINTS.CART.REMOVE_PRODUCT}`,cartItem);
  }

  increaseQuantity(cartItem: any) {
    return this.http.patch(`${environment.apiUrl}${ENDPOINTS.CART.INCREASE_QUANTITY}`,cartItem);
  }

  decreaseQuantity(cartItem: any) {
    return this.http.patch(`${environment.apiUrl}${ENDPOINTS.CART.DECREASE_QUANTITY}`,cartItem);
  }
}
