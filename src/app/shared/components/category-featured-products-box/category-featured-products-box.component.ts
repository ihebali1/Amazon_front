import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from 'src/environments/environment';
import { SimpleProduct } from '../../models/simple-product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-category-featured-products-box',
  templateUrl: './category-featured-products-box.component.html',
  styleUrls: ['./category-featured-products-box.component.scss']
})
export class CategoryFeaturedProductsBoxComponent implements OnInit {
  @Input() category: any;

  selectedChildCategory: any = null
  customOptions: OwlOptions = {
    loop: true,
    rtl: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 400,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
    },
    nav: false,
    autoplay: true
  }

  server: string;
  products: SimpleProduct[] = [];
  constructor(private productService: ProductService) {
    this.server = environment.server;
  }
  ngOnInit(): void {
    this.getNewArrivalProducts();
  }

  getNewArrivalProducts() {
    if (this.selectedChildCategory) {
      let params = {
        categoryId: this.selectedChildCategory,
      };
      this.productService
        .getHotNewArrivalProducts(params)
        .subscribe((res) => (this.products = res));
    } else {
      let params = {
        parentCategoryId: this.category?.id,
      };
      this.productService
        .getHotNewArrivalProducts(params)
        .subscribe((res) => (this.products = res));
    }
  }

  getChildCategoryNewProducts(childCategoryId: string | null) {
    this.selectedChildCategory = childCategoryId;
    this.getNewArrivalProducts();
  }

}
