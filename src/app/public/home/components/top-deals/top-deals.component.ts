import { Component, Input, OnInit } from "@angular/core";
import { DealProduct } from "src/app/shared/models/deal-product";
import { DealsTypeEnum } from "src/app/shared/models/deals";
import { Product } from "src/app/shared/models/product";
import { DealService } from "src/app/shared/services/deal.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-top-deals",
  templateUrl: "./top-deals.component.html",
  styleUrls: ["./top-deals.component.scss"],
})
export class TopDealsComponent implements OnInit {
  products: DealProduct[] = [];
  server: string;
  @Input() dealType!: string;
  @Input() title!: string;

  constructor(private dealService: DealService) {
    this.server = environment.server;
  }

  ngOnInit(): void {
    this.getDealProducts();
  }

  getDealProducts() {
    this.dealService
      .getActiveDealProducts(this.dealType as DealsTypeEnum)
      .subscribe((res) => (this.products = res));
  }

  getDiscountPercentage(dealProduct: DealProduct) {
    const salePrice = dealProduct.dealPrice;
    const productPrice = (dealProduct.product as Product).price;
    return Math.round((1 - salePrice / productPrice) * 100);
  }
  
}
