import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from 'src/environments/environment';
import { DealProduct } from '../../models/deal-product';
import { DealsTypeEnum } from '../../models/deals';
import { Product } from '../../models/product';
import { DealService } from '../../services/deal.service';

@Component({
  selector: 'app-featured-carousel-full-width',
  templateUrl: './featured-carousel-full-width.component.html',
  styleUrls: ['./featured-carousel-full-width.component.scss']
})
export class FeaturedCarouselFullWidthComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    rtl: true,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 1
      },
      760: {
        items: 1
      },
      1000: {
        items: 1
      }
    },
    nav: false
  }

  products: DealProduct[] = [];
  server: string;

  constructor(private dealService: DealService) {
    this.server = environment.server;
  }

  ngOnInit(): void {
    this.getDealProducts();
  }

  getDealProducts() {
    this.dealService
      .getActiveDealProducts(DealsTypeEnum.LIGHTDEAL)
      .subscribe((res) => (this.products = res));
  }

  getDiscountPercentage(dealProduct: DealProduct) {
    const salePrice = dealProduct.dealPrice;
    const productPrice = (dealProduct.product as Product).price
    return Math.round((1 - (salePrice / productPrice)) * 100)
  }

}
