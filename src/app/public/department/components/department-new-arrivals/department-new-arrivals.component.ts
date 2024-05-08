import { Component, Input, OnInit } from "@angular/core";
import { SimpleProduct } from "src/app/shared/models/simple-product";
import { ProductService } from "src/app/shared/services/product.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-department-new-arrivals",
  templateUrl: "./department-new-arrivals.component.html",
  styleUrls: ["./department-new-arrivals.component.scss"],
})
export class DepartmentNewArrivalsComponent implements OnInit {
  @Input() parentCategories: any;
  @Input() department: any;
  selectedParentCategory: any = null;
  server: string;
  products: SimpleProduct[] = [];
  constructor(private productService: ProductService) {
    this.server = environment.server;
  }
  ngOnInit(): void {
    this.getNewArrivalProducts();
  }

  getNewArrivalProducts() {
    if (this.selectedParentCategory) {
      let params = {
        parentCategoryId: this.selectedParentCategory,
      };
      this.productService
        .getHotNewArrivalProducts(params)
        .subscribe((res) => (this.products = res));
    } else {
      let params = {
        departmentId: this.department?.id,
      };
      this.productService
        .getHotNewArrivalProducts(params)
        .subscribe((res) => (this.products = res));
    }
  }

  getParentCategoryNewProducts(parentCategoryId: string | null) {
    this.selectedParentCategory = parentCategoryId;
    this.getNewArrivalProducts();
  }
}
