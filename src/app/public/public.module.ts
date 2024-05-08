import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { CoreModule } from '../core/core.module';
import { HomeModule } from './home/home.module';
import { DepartmentModule } from './department/department.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HomeModule,
    DepartmentModule,
    SharedModule,
    CoreModule,
    MatButtonModule,
  ]
})
export class PublicModule { }
