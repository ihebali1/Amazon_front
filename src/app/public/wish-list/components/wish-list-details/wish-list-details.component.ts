import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { CartService } from 'src/app/shared/services/cart.service';
import { environment } from 'src/environments/environment';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-wish-list-details',
  templateUrl: './wish-list-details.component.html',
  styleUrls: ['./wish-list-details.component.scss']
})
export class WishListDetailsComponent implements OnInit {
  @Input() wishList: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  server: string;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor(private wishListService: WishlistService,
     private cartService: CartService,
     private _snackBar: MatSnackBar,) { 
    this.server = environment.server;
  }

  ngOnInit(): void {
  }

  getCartItems() {
    this.cartService.getCartItems().subscribe(
      (res: any) => {
        this.cartService.update(res?.cartItems);
      }
    )
  }

  addToCart(productId: string, quantity=1) {
    this.cartService.addToCart({
      product: productId,
      quantity: quantity
    }).subscribe(res => {
      this.getCartItems()
      this.openSnackBar()
    })
  }

  openSnackBar() {
    this._snackBar.open('تمت إضافة المنتج إلى عربة التسوق بنجاح', '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000
    });
  }
  

  

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  removeWishListItem(itemId: string) {
    this.wishListService.removeProductFromWishList(itemId).subscribe(
      res => {
        this.newItemEvent.emit('deleted');
      }
    )
  }

  removeWishList(wishListId: string) {
    this.wishListService.removeWishList(wishListId).subscribe(
      res => {
        this.newItemEvent.emit('deleted');
      }
    )
  }

}
