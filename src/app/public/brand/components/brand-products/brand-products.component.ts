import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-brand-products',
  templateUrl: './brand-products.component.html',
  styleUrls: ['./brand-products.component.scss']
})
export class BrandProductsComponent implements OnInit {
  @Input() brand!: string;
  products: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getBrandProducts();
  }

  getBrandProducts() {
    this.productService.getProducts({
      brand: this.brand
    }).subscribe(
      (res: any) => {
        this.products = res.products
      }
    )
  }

}
