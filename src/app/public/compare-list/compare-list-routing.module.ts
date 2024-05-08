import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompareTableComponent } from './pages/compare-table/compare-table.component';

const routes: Routes = [
  {
    path:'',
    component: CompareTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompareListRoutingModule { }
