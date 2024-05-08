import { Component, OnInit } from '@angular/core';
import { DealProduct } from 'src/app/shared/models/deal-product';
import { DealsTypeEnum } from 'src/app/shared/models/deals';
import { Product } from 'src/app/shared/models/product';
import { DealService } from 'src/app/shared/services/deal.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-flash-deals',
  templateUrl: './flash-deals.component.html',
  styleUrls: ['./flash-deals.component.scss']
})
export class FlashDealsComponent implements OnInit {


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
