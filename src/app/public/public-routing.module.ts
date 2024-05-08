import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home-routing.module').then((m) => m.HomeRoutingModule),
      },
      {
        path: 'department',
        loadChildren: () =>
          import('./department/department.module').then((m) => m.DepartmentModule),
      },
      {
        path: 'product',
        loadChildren: () =>
          import('./product-details/product-details.module').then((m) => m.ProductDetailsModule),
      },
      {
        path: 'become-vendor',
        loadChildren: () =>
          import('./become-vendor/become-vendor.module').then((m) => m.BecomeVendorModule),
      },
      {
        path: 'store',
        loadChildren: () =>
          import('./store/store.module').then((m) => m.StoreModule),
      },
      {
        path: 'shop',
        loadChildren: () =>
          import('./shop/shop.module').then((m) => m.ShopModule),
      },
      {
        path: 'brand',
        loadChildren: () =>
          import('./brand/brand.module').then((m) => m.BrandModule),
      },
      {
        path: 'compare-list',
        loadChildren: () =>
          import('./compare-list/compare-list.module').then((m) => m.CompareListModule),
      },
      {
        path: 'wish-list',
        loadChildren: () =>
          import('./wish-list/wish-list.module').then((m) => m.WishListModule),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('./cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: 'parent-category',
        loadChildren: () =>
          import('./parent-category/parent-category.module').then((m) => m.ParentCategoryModule),
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.AuthModule),
      },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
