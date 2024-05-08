import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BecomeVendorComponent } from './pages/become-vendor/become-vendor.component';

const routes: Routes = [{
  path: '',
  component: BecomeVendorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BecomeVendorRoutingModule { }
