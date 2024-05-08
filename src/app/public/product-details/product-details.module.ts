import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GalleryModule } from 'ng-gallery';
import { AddToWishListComponent } from './components/add-to-wish-list/add-to-wish-list.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { StarRatingModule } from 'angular-star-rating';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CompareListComponent } from './components/compare-list/compare-list.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatInputModule } from '@angular/material/input';
import { RecommendBuyProductsComponent } from './components/recommend-buy-products/recommend-buy-products.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductInfoComponent,
    AddToWishListComponent,
    CompareListComponent,
    RecommendBuyProductsComponent
  ],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
        //Core module import
        CoreModule,
        //Shared module import
        SharedModule,
        MatTabsModule,
        FormsModule,
        ReactiveFormsModule,
        GalleryModule,
        NgxSpinnerModule,
        NgxStarRatingModule,
        CarouselModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatFormFieldModule,
        NgImageSliderModule,
        MatInputModule,
        MatButtonModule,
  ]
})
export class ProductDetailsModule { }
