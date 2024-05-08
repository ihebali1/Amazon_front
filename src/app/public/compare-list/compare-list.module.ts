import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompareListRoutingModule } from './compare-list-routing.module';
import { CompareTableComponent } from './pages/compare-table/compare-table.component';


@NgModule({
  declarations: [
    CompareTableComponent
  ],
  imports: [
    CommonModule,
    CompareListRoutingModule
  ]
})
export class CompareListModule { }
