import { Component, OnInit } from "@angular/core";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { Product } from "src/app/shared/models/product";
import { Vendor } from "src/app/shared/models/vendor";
import { Cart, CartService } from "src/app/shared/services/cart.service";
import { ShippingService } from "src/app/shared/services/shipping.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  server: string;
  cart$!: Observable<Cart>;
  cartItems: any;
  horizontalPosition: MatSnackBarHorizontalPosition = "start";
  verticalPosition: MatSnackBarVerticalPosition = "bottom";
  subTotal: number = 0;
  shippingCosts: any;
  shippingTotalPrice = 0;
  states: any;
  selectedState: any;
  constructor(
    private cartService: CartService,
    private _snackBar: MatSnackBar,
    private shippingService: ShippingService
  ) {
    this.server = environment.server;
  }

  getCartItems() {
    this.cartService.getCartItems().subscribe((res: any) => {
      this.cartItems = res?.cartItems;
      this.cartService.update(this.cartItems);
      this.subTotal = 0;
      this.cartItems.forEach((item: any) => {
        this.subTotal += item.quantity * item.product.price;
      });
    });
  }

  getStates() {
    this.shippingService.getStates().subscribe((res) => {
      this.states = res;
      this.selectedState = this.states[0]?.id;
      this.getShippingCost()
    });
  }

  getSubTotal(cartItems: any) {
    this.subTotal = 0;
    if (cartItems)
      cartItems.forEach((item: any) => {
        this.subTotal += item.quantity * item.product.price
      });
    return this.subTotal;
  }

  increaseQuantity(productId: string) {
    this.cartService
      .increaseQuantity({
        product: productId,
      })
      .subscribe((res) => {
        this.getCartItems();
        this.openSnackBar();
      });
  }

  decreaseQuantity(productId: string) {
    this.cartService
      .decreaseQuantity({
        product: productId,
      })
      .subscribe((res) => {
        this.getCartItems();
        this.openSnackBar();
      });
  }

  removeItem(productId: string) {
    this.cartService
      .removeFromCart({
        product: productId,
      })
      .subscribe((res) => {
        this.getCartItems();
        this.openSnackBar();
      });
  }

  openSnackBar() {
    this._snackBar.open("تم تحديث عنصر سلة التسوق بنجاح", "", {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000,
    });
  }

  getShippingCost() {
    this.shippingService
      .getShippingCost(this.selectedState)
      .subscribe((res) => {
        console.log(res);
        this.shippingCosts = res;
        this.shippingTotalPrice = 0;
        for (let shippingCost of this.shippingCosts) {
          this.shippingTotalPrice += shippingCost.cost;
        }
      });
  }

  ngOnInit(): void {
    this.getCartItems();
    this.getStates();
    this.cart$ = this.cartService.cart$;
  }
}

export class ShippingCost {
  vendor!: Vendor;
  cost!: number;
  shippingFrom!: string;
  products: Product[] = [];
}
