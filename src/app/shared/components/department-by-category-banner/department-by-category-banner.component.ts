import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-department-by-category-banner',
  templateUrl: './department-by-category-banner.component.html',
  styleUrls: ['./department-by-category-banner.component.scss']
})
export class DepartmentByCategoryBannerComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    rtl: true,
    navSpeed: 400,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 1
      },
      760: {
        items: 1
      },
      1000: {
        items: 1
      }
    },
    nav: false,
    autoplay: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
