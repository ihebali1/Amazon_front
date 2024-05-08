import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from 'src/app/shared/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  departments: any; hotProducts: any;
  server: string;

  constructor(private productService: ProductService) {
    this.server = environment.server;
  }

  ngOnInit(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    this.getDepartments()
    this.getHowNewArrivalProducts()
  }

  getDepartments() {
    this.productService.getDepartments().subscribe(
      res => {
        this.departments = res;
      }
    )
  }

  getHowNewArrivalProducts() {
    this.productService.getHotNewArrivalProducts().subscribe(
      res => this.hotProducts = res
    )
  }

}
