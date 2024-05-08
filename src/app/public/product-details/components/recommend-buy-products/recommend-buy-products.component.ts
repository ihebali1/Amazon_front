import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ProductTypeEnum } from 'src/app/shared/models/simple-product';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recommend-buy-products',
  templateUrl: './recommend-buy-products.component.html',
  styleUrls: ['./recommend-buy-products.component.scss']
})
export class RecommendBuyProductsComponent implements OnInit {
  products: any;
  selectedProducts: any;
  @Input() product!: any;
  server: string;
  horizontalPosition: MatSnackBarHorizontalPosition = "start";
  verticalPosition: MatSnackBarVerticalPosition = "bottom";
  constructor(private productService: ProductService,
    private cartService: CartService,
    private _snackBar: MatSnackBar,) {
    this.server = environment.server;
  }


  ngOnInit(): void {
    this.getRecommendedProducts();
  }

  getCartItems() {
    this.cartService.getCartItems().subscribe((res: any) => {
      this.cartService.update(res?.cartItems);
    });
  }

  openSnackBar() {
    this._snackBar.open("تمت إضافة المنتج إلى عربة التسوق بنجاح", "", {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000,
    });
  }

  addToCart() {
    this.cartService
      .addToCart({
        product: this.product.id,
        quantity: 1,
      })
      .subscribe(
        (res) => {
          this.getCartItems();
          this.openSnackBar();
        },
        (err) => {
          this._snackBar.open(err.error.message, "", {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 2000,
          });
        }
      );

    for (const product of this.products)
      if (product.isSelected)

        this.cartService
          .addToCart({
            product: product.id,
            quantity: 1,
          })
          .subscribe(
            (res) => {

            },
            (err) => {

            }
          );
  }


  getTotal() {
    let total = this.product.price;
    for (const product of this.products) {
      if (product.isSelected)
        total += product.price
    }
    return total;
  }

  getRecommendedProducts = () => {
    this.productService.getBuyableTogetherProduct(this.product.id).subscribe(
      res => {
        this.products = res;
        for (const product of this.products) {
          product.isSelected = true;
        }

      }
    )
  }

}
