import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ImageItem } from 'ng-gallery';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cart, CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  @Input() product:any
  server: string;
  images: any;
  quantity=1;
  cart$!: Observable<Cart>;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  
  constructor(private cartService: CartService, private _snackBar: MatSnackBar) {
    
    this.server = environment.server;
   }

  ngOnInit(): void {
    console.log(this.product)
    
    this.images = [];
    if(this.product.type == 'SIMPLE_LISTING') {
      this.images.push(
        new ImageItem({ src: this.server + this.product?.primaryImage.public_url, thumb: this.server + this.product?.primaryImage.public_url },)
      )
      this.product?.images.forEach((image: any) => {
        this.images.push(
          new ImageItem({ src: this.server + image.public_url, thumb: this.server + image.public_url },)
        )
      });
    } 

    if(this.product.type == 'PARENT_LISTING') {
      //@TODO
    } 
    
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if(this.quantity>1)
    this.quantity--;
  }

  addToCart() {
    this.cartService.addToCart({
      product: this.product?.id,
      quantity: this.quantity
    }).subscribe(res => {
      this.getCartItems()
      this.openSnackBar()
    })
  }

  getCartItems() {
    this.cartService.getCartItems().subscribe(
      (res: any) => {
        this.cartService.update(res?.cartItems);
      }
    )
  }

  addToWishList() {

  }

  openSnackBar() {
    this._snackBar.open('تمت إضافة المنتج إلى عربة التسوق بنجاح', '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000
    });
  }
  

}
