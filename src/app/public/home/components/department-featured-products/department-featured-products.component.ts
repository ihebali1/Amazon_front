import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-department-featured-products',
  templateUrl: './department-featured-products.component.html',
  styleUrls: ['./department-featured-products.component.scss']
})
export class DepartmentFeaturedProductsComponent implements OnInit {
  @Input() department: any;
  products: any;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],

    nav: false,
    margin: 10,
    autoplay: true
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getDepartmentProducts(this.department.id).subscribe(
      (res:any) => this.products = res
    )
  }

}
