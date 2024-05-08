import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ComplaintDetailsComponent } from './components/complaint-details/complaint-details.component';
import { InvoiceDetailsComponent } from './components/invoice-details/invoice-details.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { NotificationComponent } from './components/notification/notification.component';
import { PaymentMethodsComponent } from './components/payment-methods/payment-methods.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: 'account',
    component: MainPageComponent,
    children: [
      {
        path: '',
        component: UserInfoComponent
      },
      {
        path: 'invoices',
        component: InvoicesComponent
      },

      {
        path: 'address',
        component: AddressesComponent
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent
      },
      {
        path: 'payment-methods',
        component: PaymentMethodsComponent
      },
      {
        path: 'notification',
        component: NotificationComponent
      },
    ]
  },
  {
    path: 'invoices/:id',
    component: InvoiceDetailsComponent
  },
  {
    path: 'complaints/:id',
    component: ComplaintDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountInfoRoutingModule { }
