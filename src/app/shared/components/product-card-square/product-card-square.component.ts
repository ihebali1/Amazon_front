import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-card-square',
  templateUrl: './product-card-square.component.html',
  styleUrls: ['./product-card-square.component.scss']
})
export class ProductCardSquareComponent implements OnInit {
  server: string;

  @Input () product: any;

  constructor() { 
    this.server = environment.server
  }

  ngOnInit(): void {
  }

}
