import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './pages/department/department.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DepartmentCategoriesGridComponent } from './components/department-categories-grid/department-categories-grid.component';
import { DepartmentNewArrivalsComponent } from './components/department-new-arrivals/department-new-arrivals.component';
import { MostSellingBrandsDepartmentComponent } from './components/most-selling-brands-department/most-selling-brands-department.component';
import { DepartmentPromotionComponent } from './components/department-promotion/department-promotion.component';



@NgModule({
  declarations: [
    DepartmentComponent,
    DepartmentCategoriesGridComponent,
    DepartmentNewArrivalsComponent,
    MostSellingBrandsDepartmentComponent,
    DepartmentPromotionComponent,
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    //Core module import
    CoreModule,
    //Shared module import
    SharedModule,
  ]
})
export class DepartmentModule { }
