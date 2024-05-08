import { Component, OnInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-department-featured-vertical-banner",
  templateUrl: "./department-featured-vertical-banner.component.html",
  styleUrls: ["./department-featured-vertical-banner.component.scss"],
})
export class DepartmentFeaturedVerticalBannerComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    rtl: true,
    dots: false,
    navSpeed: 400,
    navText: ["&#8249", "&#8250;"],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      760: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
    nav: false,
    autoplay: true,
  };
  constructor() {}

  ngOnInit(): void {}
}
