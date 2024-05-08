import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SimpleProduct } from '../../models/simple-product';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-new-arrival-product-list',
  templateUrl: './new-arrival-product-list.component.html',
  styleUrls: ['./new-arrival-product-list.component.scss']
})
export class NewArrivalProductListComponent implements OnInit {
  products: SimpleProduct[] = [];
  server!: string;

  constructor(private productService: ProductService) {
    this.server = environment.server
   }

  getHowNewArrivalProducts() {
    this.productService.getHotNewArrivalProducts().subscribe(
      res => this.products = res
    )
  }

  ngOnInit(): void {
    this.getHowNewArrivalProducts()
  }

}
