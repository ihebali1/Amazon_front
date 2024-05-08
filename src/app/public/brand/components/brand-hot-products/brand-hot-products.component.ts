import { Component, Input, OnInit } from '@angular/core';
import { SimpleProduct } from 'src/app/shared/models/simple-product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-brand-hot-products',
  templateUrl: './brand-hot-products.component.html',
  styleUrls: ['./brand-hot-products.component.scss']
})
export class BrandHotProductsComponent implements OnInit {
  products!: SimpleProduct[];
  @Input() brand!: string;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getHotNewProducts();
  }

  getHotNewProducts() {
    this.productService.getHotNewArrivalProducts({
      brand: this.brand
    }).subscribe(
      res => {
        this.products = res
      }
    )
  }
}
