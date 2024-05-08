import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishListRoutingModule } from './wish-list-routing.module';
import { WishListComponent } from './pages/wish-list/wish-list.component';
import { WishListDetailsComponent } from './components/wish-list-details/wish-list-details.component';
import { CreateWishListComponent } from './components/create-wish-list/create-wish-list.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    WishListComponent,
    WishListDetailsComponent,
    CreateWishListComponent,
  ],
  imports: [
    CommonModule,
    WishListRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class WishListModule { }
