import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DepartmentFeaturedProductsComponent } from './components/department-featured-products/department-featured-products.component';
import { LastViewedProductsComponent } from './components/last-viewed-products/last-viewed-products.component';
import { WeekDealsComponent } from './components/week-deals/week-deals.component';
import { FlashDealsComponent } from './components/flash-deals/flash-deals.component';
import { DepartmentBoxComponent } from './components/department-box/department-box.component';
import { ProductCarouselCardComponent } from './components/product-carousel-card/product-carousel-card.component';
import { TopDealsComponent } from './components/top-deals/top-deals.component';
import { HotNewProductsComponent } from './components/hot-new-products/hot-new-products.component';
import { DepartmentGridListComponent } from './components/department-grid-list/department-grid-list.component';
import { MatIconModule } from '@angular/material/icon';
import { HomeBannerSliderComponent } from './components/home-banner-slider/home-banner-slider.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    HomeComponent,
    DepartmentFeaturedProductsComponent,
    LastViewedProductsComponent,
    WeekDealsComponent,
    FlashDealsComponent,
    DepartmentBoxComponent,
    ProductCarouselCardComponent,
    TopDealsComponent,
    HotNewProductsComponent,
    DepartmentGridListComponent,
    HomeBannerSliderComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    //Core module import
    CoreModule,
    //Shared module import
    SharedModule,
    CarouselModule,
    MatIconModule,
    IvyCarouselModule
  ]
})
export class HomeModule { }
