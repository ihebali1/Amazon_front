import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-department-search-trending',
  templateUrl: './department-search-trending.component.html',
  styleUrls: ['./department-search-trending.component.scss']
})
export class DepartmentSearchTrendingComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 400,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 4
      },
      760: {
        items: 6
      },
      1000: {
        items: 8
      }
    },
    nav: false,
    autoplay: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
