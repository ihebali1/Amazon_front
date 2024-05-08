import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentCategoryRoutingModule } from './parent-category-routing.module';
import { ListingComponent } from './pages/listing/listing.component';


@NgModule({
  declarations: [
    ListingComponent
  ],
  imports: [
    CommonModule,
    ParentCategoryRoutingModule
  ]
})
export class ParentCategoryModule { }
