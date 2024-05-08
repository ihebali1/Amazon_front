import { Component, Input, OnInit } from "@angular/core";
import { DealProduct } from "src/app/shared/models/deal-product";
import { Product } from "src/app/shared/models/product";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-deal-products",
  templateUrl: "./deal-products.component.html",
  styleUrls: ["./deal-products.component.scss"],
})
export class DealProductsComponent implements OnInit {
  @Input() product!: DealProduct;
  server: string;


  constructor() {
    this.server = environment.server;
  }

  getDiscountPercentage(dealProduct: DealProduct) {
    const salePrice = dealProduct.dealPrice;
    const productPrice = (dealProduct.product as Product).price
    return Math.round((1 - (salePrice / productPrice)) * 100)
  }

  ngOnInit(): void {}
}
