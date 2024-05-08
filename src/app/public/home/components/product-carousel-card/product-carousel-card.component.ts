import { Component, Input, OnInit } from "@angular/core";
import { ProductService } from "src/app/shared/services/product.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-product-carousel-card",
  templateUrl: "./product-carousel-card.component.html",
  styleUrls: ["./product-carousel-card.component.scss"],
})
export class ProductCarouselCardComponent implements OnInit {
  @Input() department: any;
  products: any;
  server: string;
  constructor(private productService: ProductService) {
    this.server = environment.server;
  }

  ngOnInit(): void {
    this.getDepartmentProducts()
  }

  getDepartmentProducts() {
    this.productService.getDepartmentProducts(this.department.id).subscribe(
      (res:any) => this.products = res
    )
  }
}
