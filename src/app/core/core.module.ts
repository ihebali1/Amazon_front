import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderOneComponent } from './components/header-one/header-one.component';
import { HeaderTwoComponent } from './components/header-two/header-two.component';
import { HeaderThreeComponent } from './components/header-three/header-three.component';
import { HeaderFourComponent } from './components/header-four/header-four.component';
import { FooterOneComponent } from './components/footer-one/footer-one.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderOneComponent,
    HeaderTwoComponent,
    HeaderThreeComponent,
    HeaderFourComponent,
    FooterOneComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [HeaderOneComponent, HeaderTwoComponent, HeaderThreeComponent, HeaderFourComponent, FooterOneComponent]
})
export class CoreModule { }
