import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { BannerOneComponent } from './components/banner-one/banner-one.component';
import { FeaturesHorizontalComponent } from './components/features-horizontal/features-horizontal.component';
import { FeaturedCarouselFullWidthComponent } from './components/featured-carousel-full-width/featured-carousel-full-width.component';

import { FeaturedDepartmentProductsComponent } from './components/featured-department-products/featured-department-products.component';
import { BannerTwoColumnsComponent } from './components/banner-two-columns/banner-two-columns.component';
import { NewArrivalProductListComponent } from './components/new-arrival-product-list/new-arrival-product-list.component';
import { CategoryFeaturedProductsBoxComponent } from './components/category-featured-products-box/category-featured-products-box.component';
import { DepartmentFeaturedCategoriesComponent } from './components/department-featured-categories/department-featured-categories.component';
import { FeaturedDepartmentGridComponent } from './components/featured-department-grid/featured-department-grid.component';
import { DepartmentFeaturedVerticalBannerComponent } from './components/department-featured-vertical-banner/department-featured-vertical-banner.component';
import { DepartmentByCategoryBannerComponent } from './components/department-by-category-banner/department-by-category-banner.component';
import { DepartmentAdRowComponent } from './components/department-ad-row/department-ad-row.component';
import { BestDepartmentBrandsComponent } from './components/best-department-brands/best-department-brands.component';
import { DepartmentSearchTrendingComponent } from './components/department-search-trending/department-search-trending.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ProductCardWideComponent } from './components/product-card-wide/product-card-wide.component';
import { ProductCardSquareComponent } from './components/product-card-square/product-card-square.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { GalleryModule } from 'ng-gallery';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { DepartmentTopChildCategoriesComponent } from './components/department-top-child-categories/department-top-child-categories.component';

@NgModule({
  declarations: [
    BannerOneComponent,
    FeaturesHorizontalComponent,
    FeaturedCarouselFullWidthComponent,
    FeaturedDepartmentProductsComponent,
    BannerTwoColumnsComponent,
    NewArrivalProductListComponent,
    CategoryFeaturedProductsBoxComponent,
    DepartmentFeaturedCategoriesComponent,
    FeaturedDepartmentGridComponent,
    DepartmentFeaturedVerticalBannerComponent,
    DepartmentByCategoryBannerComponent,
    DepartmentAdRowComponent,
    BestDepartmentBrandsComponent,
    DepartmentSearchTrendingComponent,
    BreadcrumbComponent,
    ProductCardWideComponent,
    ProductCardSquareComponent,
    ProductCardComponent,
    DepartmentTopChildCategoriesComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CarouselModule,
    HttpClientModule,
    GalleryModule,
    FormsModule,
    MatTabsModule,
    MatSnackBarModule
  ],
  providers: [
    AuthService
  ],
  exports: [
    BannerOneComponent,
    FeaturesHorizontalComponent,
    FeaturedCarouselFullWidthComponent,
    FeaturedDepartmentProductsComponent,
    BannerTwoColumnsComponent,
    NewArrivalProductListComponent,
    CategoryFeaturedProductsBoxComponent,
    DepartmentFeaturedCategoriesComponent,
    FeaturedDepartmentGridComponent,
    DepartmentFeaturedVerticalBannerComponent,
    DepartmentByCategoryBannerComponent,
    DepartmentAdRowComponent,
    BestDepartmentBrandsComponent,
    DepartmentSearchTrendingComponent,
    BreadcrumbComponent,
    ProductCardWideComponent,
    ProductCardSquareComponent,
    ProductCardComponent,
    DepartmentTopChildCategoriesComponent
  ],
})
export class SharedModule { }
