import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-featured-department-products',
  templateUrl: './featured-department-products.component.html',
  styleUrls: ['./featured-department-products.component.scss']
})
export class FeaturedDepartmentProductsComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 5
      },
      760: {
        items: 7
      },
      1000: {
        items: 8
      }
    },
    nav: false,
    margin: 10,
    autoplay: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
