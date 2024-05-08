import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreDetailsComponent } from './pages/store-details/store-details.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { StoreProductCardComponent } from './components/store-product-card/store-product-card.component';
import { SendMessageComponent } from './pages/send-message/send-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    StoreDetailsComponent,
    StoreProductCardComponent,
    SendMessageComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SharedModule,
    CoreModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule ,
    MatButtonModule
  ]
})
export class StoreModule { }
