import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";
import { ImageItem } from "ng-gallery";
import { OwlOptions } from "ngx-owl-carousel-o";
import { Observable } from "rxjs";
import { DealProduct } from "src/app/shared/models/deal-product";
import { Product } from "src/app/shared/models/product";
import { ProductTypeEnum } from "src/app/shared/models/simple-product";
import { Cart, CartService } from "src/app/shared/services/cart.service";
import { ProductService } from "src/app/shared/services/product.service";
import { environment } from "src/environments/environment";
import { AddToWishListComponent } from "../add-to-wish-list/add-to-wish-list.component";

@Component({
  selector: "app-product-info",
  templateUrl: "./product-info.component.html",
  styleUrls: ["./product-info.component.scss"],
})
export class ProductInfoComponent implements OnInit {
  @Input() product: any;
  server: string;
  images: any;
  quantity = 1;
  cart$!: Observable<Cart>;
  reviews: any;
  horizontalPosition: MatSnackBarHorizontalPosition = "start";
  verticalPosition: MatSnackBarVerticalPosition = "bottom";
  rating3: number;
  public form: FormGroup;
  ratingStatistcs: any;
  selectedVariation: any;
  @Input() variation: any;
  productDeal?: DealProduct;
  sameBrandProducts: any;
  sameCategoryProducts: any;

  imageObject: Array<object> = [

  ];

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.server = environment.server;
    this.rating3 = 3;
    this.form = this.fb.group({
      rating: [this.rating3, Validators.required],
      content: ["", Validators.required],
      product: [this.product?.id],
      type: [this.product?.type],
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ["&#8249", "&#8250;"],

    nav: false,
  };

  getReviewStatistics() {
    this.productService
      .getRatingStatistics(this.product.id, this.product.type)
      .subscribe((res) => {
        this.ratingStatistcs = res;
      });
  }

  getSameCategorytProducts() {
    this.productService.getProducts({ categoryId: this.product?.childCategory?.id }).subscribe(
      res => this.sameCategoryProducts = res
    )
  }

  ngOnInit(): void {

    this.images = [];

    console.log(this.product);
    this.selectedVariation = this.variation;

    if (this.product.type == ProductTypeEnum.PARENT_LISTING) {
      for (const variation of this.product.variations) {
        if (variation.id == this.variation) this.selectedVariation = variation;
      }
      if (!this.selectedVariation)
        this.selectedVariation = this.product.variations[0];
    }

    console.log(this.selectedVariation)

    this.getReviewStatistics();
    this.getProductActiveDeal();
    this.getProductSameBrand();
    this.getSameCategorytProducts();
    if (localStorage.getItem('access_token'))
      this.productService
        .createViewHistory(this.product.id, this.product.type)
        .subscribe((res) => {
          console.log(res);
        });

    this.images.push(
      new ImageItem({
        src: this.server + this.product?.primaryImage.public_url,
        thumb: this.server + this.product?.primaryImage.public_url,
      })
    );

    /* this.imageObject.push(
       {
         image: this.server + this.product?.primaryImage.public_url,
         thumbImage: this.server + this.product?.primaryImage.public_url,
      
       }
     );*/

    this.product?.images.forEach((image: any) => {
      /*this.imageObject.push(
        {
          image: this.server + image.public_url,
          thumbImage: this.server + image.public_url,
    
        }

        

      );*/
      this.images.push(
        new ImageItem({
          src: this.server + image.public_url,
          thumb: this.server + image.public_url,
        })
      );
    });



    this.form = this.fb.group({
      rating: [this.rating3, Validators.required],
      content: ["", Validators.required],
      product: [this.product?.id],
      productType: [this.product?.type],
    });

    this.getReviews();
  }

  openDialog() {
    if (this.product.type == ProductTypeEnum.SIMPLE_LISTING) {
      this.dialog.open(AddToWishListComponent, {
        data: {
          product: this.product,
        },
        width: "60%",
      });
    }
    if (this.product.type == ProductTypeEnum.PARENT_LISTING)
      this.dialog.open(AddToWishListComponent, {
        data: {
          product: this.selectedVariation,
        },
        width: "60%",
      });
  }

  getReviews() {
    this.productService
      .getReviews(this.product.id, this.product.type)
      .subscribe((res) => (this.reviews = res));
  }

  addReview() {
    this.productService.addReview(this.form.getRawValue()).subscribe({
      next: (res) => {
        this.getReviews();
        this.getReviewStatistics();
        this.form = this.fb.group({
          rating: [this.rating3, Validators.required],
          content: ["", Validators.required],
          product: [this.product?.id],
          productType: [this.product?.type],
        });
      },
      error: (error) => {
        this._snackBar.open("يمكن إضافة المراجعة فقط على المنتجات المشتراة", "", {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 2000,
        });
      },
    });
  }

  increaseQuantity() {
    this.quantity++;
  }

  getProductSameBrand() {

    this.productService
      .getSameBrand(this.product.id, this.product.type)
      .subscribe((res) => (this.sameBrandProducts = res));

  }

  getProductActiveDeal() {
    if (this.product.type == ProductTypeEnum.PARENT_LISTING) {
      this.productService
        .getProductActiveDeal(this.selectedVariation.id)
        .subscribe((res) => (this.productDeal = res));
    }

    if (this.product.type == ProductTypeEnum.SIMPLE_LISTING) {
      this.productService
        .getProductActiveDeal(this.product.id)
        .subscribe((res) => (this.productDeal = res));
    }
  }

  getDiscountPercentage(dealProduct: DealProduct) {
    const salePrice = dealProduct.dealPrice;
    const productPrice = (dealProduct.product as Product).price;
    return Math.round((1 - salePrice / productPrice) * 100);
  }

  getHigherPrice(product: any) {
    let max = product.variations[0].price;
    for (let variation of product.variations) {
      if (variation.price >= max) max = variation.price;
    }
    return max;
  }

  getLowerPrice(product: any) {
    let min = product.variations[0].price;
    for (let variation of product.variations) {
      if (variation.price <= min) min = variation.price;
    }
    return min;
  }

  decreaseQuantity() {
    if (this.quantity > 1) this.quantity--;
  }

  addToCart() {
    if (this.product.type == ProductTypeEnum.PARENT_LISTING)
      this.cartService
        .addToCart({
          product: this.selectedVariation?.id,
          quantity: this.quantity,
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

    if (this.product.type == ProductTypeEnum.SIMPLE_LISTING)
      this.cartService
        .addToCart({
          product: this.product?.id,
          quantity: this.quantity,
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
  }

  getCartItems() {
    this.cartService.getCartItems().subscribe((res: any) => {
      this.cartService.update(res?.cartItems);
    });
  }

  addToWishList() { }

  openSnackBar() {
    this._snackBar.open("تمت إضافة المنتج إلى عربة التسوق بنجاح", "", {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000,
    });
  }

  onChange(event: any) {
    console.log(event.target.value);
    this.selectedVariation = event.target.value;
  }
}
