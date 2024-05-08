import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DealProduct } from '../../models/deal-product';
import { ParentListing } from '../../models/parent-listing';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: any;
  server: string;
  productDeal?: DealProduct;
  ratingStatistcs: any;

  constructor(private readonly productService: ProductService) {
    this.server = environment.server;
   }

  ngOnInit(): void {
    this.getProductActiveDeal();
    this.getReviewStatistics();
  }

  getProductActiveDeal() {
    this.productService.getProductActiveDeal(this.product.id).subscribe(
      res => this.productDeal = res
    )
  }

  getDiscountPercentage(dealProduct: DealProduct) {
    const salePrice = dealProduct.dealPrice;
    const productPrice = (dealProduct.product as Product).price
    return Math.round((1 - (salePrice / productPrice)) * 100)
  }

  getHigherPrice(product: any) {
    let max = product.variations[0].price;
    for(let variation of product.variations) {
      if (variation.price >= max) max = variation.price
    }
    return max
  }

  getLowerPrice(product: any) {
    let min = product.variations[0].price;
    for(let variation of product.variations) {
      if (variation.price <= min) min = variation.price
    }
    return min
  }

  getReviewStatistics() {
    this.productService
      .getRatingStatistics(this.product.id, this.product.type)
      .subscribe((res) => {
        this.ratingStatistcs = res;
      });
  }

}
