import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-last-viewed-products',
  templateUrl: './last-viewed-products.component.html',
  styleUrls: ['./last-viewed-products.component.scss']
})
export class LastViewedProductsComponent implements OnInit {
  products: any;
  server: string;

  constructor(private productService: ProductService) {
    this.server = environment.server;
   }

  ngOnInit(): void {
    this.getLastViewedProducts();
  }

  getLastViewedProducts() {
    this.productService.getLastviewedProducts().subscribe(
      res => {
        this.products = res;
        console.log(this.products);
      }
    )
  }
}
