import { Component, HostListener, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { NgxUiLoaderConfig, NgxUiLoaderService } from "ngx-ui-loader";
import { SimpleProduct } from "src/app/shared/models/simple-product";
import { CategoryService } from "src/app/shared/services/category.service";
import { ProductService } from "src/app/shared/services/product.service";
import { ShippingService } from "src/app/shared/services/shipping.service";
import { environment } from "src/environments/environment";
import { ChangeContext, Options } from "@angular-slider/ngx-slider";
import { ActivatedRoute, Router } from "@angular/router";
import { DealService } from "src/app/shared/services/deal.service";
import { BrandService } from "src/app/shared/services/brand.service";
import { Brand } from "src/app/shared/models/brand";
@Component({
  selector: "app-shop",
  templateUrl: "./shop.component.html",
  styleUrls: ["./shop.component.scss"],
})
export class ShopComponent implements OnInit {
  @HostListener("document:keydown.delete", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.getProducts();
  }

  brands: Brand[] = [];
  fetchedParentCategory: string = "";
  fetchedName: string = '';
  fetchedChildCategory: string = '';

  showFiller = false;
  onlyDeals: boolean;
  pageCount: number = 1;
  activePage: number = 1;
  itemsPerPage: number = 4;
  minValue: number = 0;
  fetchedDepartment: string = "";
  maxValue: number = 5000;
  options: Options = {
    floor: 0,
    ceil: 5000,
  };
  products: SimpleProduct[] = [];
  server!: string;
  departments: any;
  selectedDepartment: any;
  selectedParentCategory: any;
  selectedChildCategory: any;
  states: any;
  selectedState: any;
  selectedBrand: any;
  filteredProducts: any;

  productFilter = new FormGroup({
    name: new FormControl(""),
    stateId: new FormControl(""),
    brand: new FormControl(""),
  });

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private shippingService: ShippingService,
    private ngxLoader: NgxUiLoaderService,
    private route: ActivatedRoute,
    private dealService: DealService,
    private brandService: BrandService,
    private router: Router,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.onlyDeals = false;
    this.server = environment.server;
    this.route.queryParamMap.subscribe((params: any) => {
      this.fetchedDepartment = params.params.department;
      this.fetchedParentCategory = params.params.parentCategory;
      this.fetchedChildCategory = params.params.childCategory;
      this.fetchedName = params.params.name;
    });
  }

  onUserChange(changeContext: ChangeContext): void {
    this.getProducts();
  }

  getHowNewArrivalProducts() {
    this.productService
      .getHotNewArrivalProducts()
      .subscribe((res) => (this.products = res));
  }

  getBrands() {
    this.brandService.getBrands().subscribe((res) => (this.brands = res));
  }

  getStates() {
    this.shippingService.getStates().subscribe((res) => (this.states = res));
  }

  checkboxChanged() {
    this.onlyDeals = !this.onlyDeals;
    if (this.onlyDeals == true) this.getDealProducts();
    if (this.onlyDeals == false) this.getProducts();
  }

  getProducts(action?: string) {
    if(action && action == 'reset'){
      this.fetchedChildCategory = '';
      this.fetchedDepartment = '';
      this.fetchedParentCategory = '';
      this.fetchedName = '';
    } 
    this.ngxLoader.start();
    const productFilter = this.productFilter.getRawValue();
    if (productFilter.name == "") delete productFilter.name;

    productFilter.minPrice = this.minValue;
    productFilter.maxPrice = this.maxValue;
    if (productFilter.stateId == "") delete productFilter.stateId;
    if (productFilter.brand == "") delete productFilter.brand;

    if (this.fetchedDepartment && !this.selectedDepartment) {
      productFilter.departmentId = this.fetchedDepartment;
    }

    if (this.selectedDepartment == "") {
      delete productFilter.departmentId;
    }

    if (this.selectedDepartment) {
      this.fetchedDepartment = "";
      productFilter.departmentId = this.selectedDepartment.id;
    }

    //

    if (this.fetchedParentCategory && !this.selectedParentCategory) {
      productFilter.parentCategoryId = this.fetchedParentCategory;
    }

    if (this.selectedParentCategory == "") {
      delete productFilter.parentCategoryId;
    }

    if (this.selectedParentCategory) {
      this.fetchedParentCategory = "";
      productFilter.parentCategoryId = this.selectedParentCategory.id;
    }
    //

    //

    if (this.fetchedChildCategory && !this.selectedChildCategory) {
      productFilter.categoryId = this.fetchedChildCategory;
    }

    if (this.selectedChildCategory == "") {
      delete productFilter.categoryId;
    }

    if (this.selectedChildCategory) {
      this.fetchedChildCategory = "";
      productFilter.categoryId = this.selectedChildCategory.id;
    }
    //

    /*if (this.selectedParentCategory) {
      if (productFilter.departmentId) delete productFilter.departmentId;
      productFilter.parentCategoryId = this.selectedParentCategory.id;
    }*/
    /*if (this.selectedChildCategory) {
      productFilter.categoryId = this.selectedChildCategory.id;
      if (productFilter.parentCategoryId) delete productFilter.parentCategoryId;
      if (productFilter.departmentId) delete productFilter.departmentId;
    }*/
    /*productFilter.take = this.itemsPerPage;
    productFilter.skip = this.itemsPerPage * (this.activePage - 1);*/

    this.productService.getProducts(productFilter).subscribe(
      (res) => {
        this.filteredProducts = res;
        this.pageCount = Math.round(
          this.filteredProducts.totalCount / this.itemsPerPage
        );
        this.ngxLoader.stop();
      },
      (err) => this.ngxLoader.stop()
    );
  }

  showPage(page: number) {
    this.activePage = page;
    this.getProducts();
  }

  getProductsByName(name?: string) {
    console.log(name)
    if (!name) {
      if (this.productFilter.getRawValue().name.length % 5 == 0) {
        this.ngxLoader.start("master");
        const productFilter = this.productFilter.getRawValue();
        if (productFilter.name == "") delete productFilter.name;
        productFilter.minPrice = this.minValue;
        productFilter.maxPrice = this.maxValue;
        if (productFilter.stateId == "") delete productFilter.stateId;
        if (productFilter.brand == "") delete productFilter.brand;

        if (this.selectedDepartment) {
          productFilter.departmentId = this.selectedDepartment.id;
        }

        if (this.selectedParentCategory) {
          if (productFilter.departmentId) delete productFilter.departmentId;
          productFilter.parentCategoryId = this.selectedParentCategory.id;
        }

        if (this.selectedChildCategory) {
          productFilter.categoryId = this.selectedChildCategory.id;
          if (productFilter.parentCategoryId)
            delete productFilter.parentCategoryId;
          if (productFilter.departmentId) delete productFilter.departmentId;
        }

        this.productService.getProducts(productFilter).subscribe(
          (res) => {
            this.filteredProducts = res;
            this.ngxLoader.stop("master");
          },
          (err) => this.ngxLoader.stop("master")
        );
      }
    } else {
      const productFilter = this.productFilter.getRawValue();
      productFilter.name = name;
      productFilter.minPrice = this.minValue;
      productFilter.maxPrice = this.maxValue;
      if (productFilter.stateId == "") delete productFilter.stateId;
      if (productFilter.brand == "") delete productFilter.brand;

      if (this.selectedDepartment) {
        productFilter.departmentId = this.selectedDepartment.id;
      }

      if (this.selectedParentCategory) {
        if (productFilter.departmentId) delete productFilter.departmentId;
        productFilter.parentCategoryId = this.selectedParentCategory.id;
      }

      if (this.selectedChildCategory) {
        productFilter.categoryId = this.selectedChildCategory.id;
        if (productFilter.parentCategoryId)
          delete productFilter.parentCategoryId;
        if (productFilter.departmentId) delete productFilter.departmentId;
      }

      this.productService.getProducts(productFilter).subscribe(
        (res) => {
          this.filteredProducts = res;
          this.ngxLoader.stop("master");
        },
        (err) => this.ngxLoader.stop("master")
      );
    }

  }

  getDepartments() {
    this.categoryService
      .getDepartments()
      .subscribe((res) => (this.departments = res));
  }

  getDealProducts() {
    this.dealService
      .getActiveDealProducts()
      .subscribe((res) => (this.filteredProducts = res));
  }

  ngOnInit(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    this.getBrands();
    this.getStates();
    this.getDepartments();
    this.getHowNewArrivalProducts();
    if (this.fetchedName && this.fetchedName.length > 0) this.getProductsByName(this.fetchedName)
    else this.getProducts();
  }
}
