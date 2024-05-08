import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Cart, CartService } from 'src/app/shared/services/cart.service';
import { environment } from 'src/environments/environment';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.scss']
})
export class HeaderOneComponent implements OnInit {
  showCartButton = true;
  showCategoryButton = true;
  showMenuButton = true;
  server: string;
  cart$!: Observable<Cart>;
  parentCategories: any;
  departments: any;
  isConnected: boolean;
  cartItems: any;
  subTotal: number = 0;
  search = new FormControl();

  constructor(private categoryService: CategoryService,
    private router: Router,
    private authService: AuthService, private cartService: CartService,) {
    this.server = environment.server;
    this.isConnected = authService.isConnected();
  }

  searchProducts(): void {
    this.router.navigate(['/public/shop'], {
      queryParams: {
        name: this.search.value, 
      },
    });
    this.search.reset()
  }

  ngOnInit(): void {
    if (this.isConnected) {
      this.getCartItems()
    }
    this.getParentCategories();
    this.getDepartments();
    this.cart$ = this.cartService.cart$;
  }



  getSubTotal(cartItems: any) {
    this.subTotal = 0;
    if (cartItems)
      cartItems.forEach((item: any) => {
        this.subTotal += item.quantity * item.product.price
      });
    return this.subTotal;
  }

  getCartItems() {
    this.cartService.getCartItems().subscribe(
      (res: any) => {
        this.cartItems = res?.cartItems;
        this.cartService.update(this.cartItems);
      }
    )
  }

  getParentCategories() {
    this.categoryService.getParentCategories().subscribe(
      (res: any) => {
        this.parentCategories = res;
        console.log(this.parentCategories)
      }
    )
  }

  getDepartments() {
    this.categoryService.getDepartments().subscribe(
      (res: any) => {
        this.departments = res;
        console.log(this.departments)
      }
    )
  }

  removeItem(productId: string) {
    this.cartService.removeFromCart({
      product: productId
    }).subscribe(
      res => {
        this.getCartItems()
      }
    )
  }

}
