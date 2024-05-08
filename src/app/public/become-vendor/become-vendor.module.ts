import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BecomeVendorRoutingModule } from './become-vendor-routing.module';
import { BecomeVendorComponent } from './pages/become-vendor/become-vendor.component';
import { IntroComponent } from './components/intro/intro.component';
import { WhySellComponent } from './components/why-sell/why-sell.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { SellingFeesComponent } from './components/selling-fees/selling-fees.component';
import { SellerTestimonialsComponent } from './components/seller-testimonials/seller-testimonials.component';
import { FrequentQuestionsComponent } from './components/frequent-questions/frequent-questions.component';
import { OutroComponent } from './components/outro/outro.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    BecomeVendorComponent,
    IntroComponent,
    WhySellComponent,
    HowItWorksComponent,
    SellingFeesComponent,
    SellerTestimonialsComponent,
    FrequentQuestionsComponent,
    OutroComponent
  ],
  imports: [
    CommonModule,
    BecomeVendorRoutingModule,
    MatButtonModule
  ]
})
export class BecomeVendorModule { }
