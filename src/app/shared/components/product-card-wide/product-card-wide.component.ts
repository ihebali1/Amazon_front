import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-card-wide',
  templateUrl: './product-card-wide.component.html',
  styleUrls: ['./product-card-wide.component.scss']
})
export class ProductCardWideComponent implements OnInit {
  server: string;
  @Input() product: any;

  constructor() {
    this.server = environment.server;
   }

  ngOnInit(): void {
  }

}
