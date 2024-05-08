import { Component, Input, OnInit } from '@angular/core';
import { SimpleProduct } from 'src/app/shared/models/simple-product';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-brand-product',
  templateUrl: './brand-product.component.html',
  styleUrls: ['./brand-product.component.scss']
})
export class BrandProductComponent implements OnInit {
  @Input() product!: SimpleProduct;
  server: string;
  
  constructor() {
    this.server = environment.server;
  }

  ngOnInit(): void {
  }

}
