import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-store-product-card',
  templateUrl: './store-product-card.component.html',
  styleUrls: ['./store-product-card.component.scss']
})
export class StoreProductCardComponent implements OnInit {
  @Input() product:any;
  server: string;
  constructor() { 
    this.server = environment.server;
  }

  ngOnInit(): void {
  }

}
