import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { MainComponent } from './main/main.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { AccountInfoModule } from './account-info/account-info.module';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    AccountInfoModule,
    SharedModule,
    CoreModule,
    MatDialogModule,
  ]
})
export class PrivateModule { }
