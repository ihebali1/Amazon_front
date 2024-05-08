import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountInfoRoutingModule } from './account-info-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { NotificationComponent } from './components/notification/notification.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { InvoiceDetailsComponent } from './components/invoice-details/invoice-details.component';
import { PaymentMethodsComponent } from './components/payment-methods/payment-methods.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatBadgeModule} from '@angular/material/badge';
import { AddReportComponent } from './components/add-report/add-report.component';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { ViewReportComponent } from './components/view-report/view-report.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ComplaintDetailsComponent } from './components/complaint-details/complaint-details.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    MainPageComponent,
    UserInfoComponent,
    NotificationComponent,
    InvoicesComponent,
    AddressesComponent,
    InvoiceDetailsComponent,
    PaymentMethodsComponent,
    AddReportComponent,
    AddAddressComponent,
    ViewReportComponent,
    ChangePasswordComponent,
    ComplaintDetailsComponent
  ],
  imports: [
    CommonModule,
    AccountInfoRoutingModule,
    SharedModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    MatBadgeModule,
    ScrollingModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTabsModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class AccountInfoModule { }
