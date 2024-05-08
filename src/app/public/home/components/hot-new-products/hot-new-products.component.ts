import { Component, OnInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";
import { ProductService } from "src/app/shared/services/product.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-hot-new-products",
  templateUrl: "./hot-new-products.component.html",
  styleUrls: ["./hot-new-products.component.scss"],
})
export class HotNewProductsComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    rtl: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 400,
    navText: ["&#8249", "&#8250;"],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      760: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
    nav: false,
    autoplay: true,
  };
  products: any;
  hotProducts: any;
  server: string;

  constructor(private productService: ProductService) {
    this.server = environment.server;
  }

  ngOnInit(): void {
    this.getLastViewedProducts();
    this.getHowNewArrivalProducts()
  }

  getLastViewedProducts() {
    if(localStorage.getItem('access_token'))
    this.productService.getLastviewedProducts().subscribe((res) => {
      this.products = res;
      console.log(this.products);
    });
  }

  getHowNewArrivalProducts() {
    this.productService.getHotNewArrivalProducts().subscribe(
      res => this.hotProducts = res
    )
  }
}
