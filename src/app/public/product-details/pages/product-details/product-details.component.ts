import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "src/app/shared/services/product.service";
import { AddToWishListComponent } from "../../components/add-to-wish-list/add-to-wish-list.component";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  productType: string = "";
  productDetails: any;
  selectedVariation: any;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.productId = this.route.snapshot.paramMap.get("id");

    this.route.queryParamMap.subscribe((params: any) => {
      this.productType = params.params.type;
      this.selectedVariation = params.params.variation;
      console.log(params.params.type);
    });
  }

  ngOnInit(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    this.getProduct();
  }

  ngafterviewinit(): void {}

  getProduct() {
    this.productService
      .getProduct(this.productId, this.productType)
      .subscribe((res) => {
        this.productDetails = res;
        console.log(this.productDetails);
      });
  }
}
