import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandRoutingModule } from './brand-routing.module';
import { BrandComponent } from './pages/brand/brand.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrandProductComponent } from './components/brand-product/brand-product.component';
import { BrandProductsComponent } from './components/brand-products/brand-products.component';
import { BrandHotProductsComponent } from './components/brand-hot-products/brand-hot-products.component';
import { BrandPromotionProductsComponent } from './components/brand-promotion-products/brand-promotion-products.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BrandComponent,
    BrandProductComponent,
    BrandProductsComponent,
    BrandHotProductsComponent,
    BrandPromotionProductsComponent
  ],
  imports: [
    CommonModule,
    BrandRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ]
})
export class BrandModule { }
