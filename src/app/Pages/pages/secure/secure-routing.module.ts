import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SecureLayout } from '../../layout/secure/secure-layout/secure-layout';
import { SecureDashboard } from './secure-dashboard/secure-dashboard/secure-dashboard';
import { Menu } from './menu/menu';
import { MenuPermission } from './menu-permission/menu-permission';
import { Country } from './master/country/country';
import { State } from './master/state/state';
import { City } from './master/city/city';
import { Status } from './master/status/status';
import { GovtDocument } from './master/govt-document/govt-document';
import { ProductColor } from './master/product-color/product-color';
import { Category } from './category/category';
import { ContactUs } from './contact-us/contact-us';
import { Customer } from './customer/customer';
import { Feedback } from './feedback/feedback';
import { HelpDesk } from './help-desk/help-desk';
import { Module } from './module/module';
import { PaymentMode } from './payment-mode/payment-mode';
import { Product } from './product/product';
import { PurchaseItem } from './purchase-item/purchase-item';
import { PurchaseOrder } from './purchase-order/purchase-order';
import { Role } from './role/role';
import { RolePermission } from './role-permission/role-permission';
import { Shop } from './shop/shop';
import { SubMenu } from './sub-menu/sub-menu';
import { UnitType } from './unit-type/unit-type';
import { Vendor } from './vendor/vendor';
import { Pos } from './pos/pos';

const routes: Routes = [
  {
    path: '',
    component: SecureLayout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: SecureDashboard },
      { path: 'menu', component: Menu },
      { path: 'menu-permission', component: MenuPermission },
      { path: 'master/country', component: Country },
      { path: 'master/state', component: State },
      { path: 'master/city', component: City },
      { path: 'master/status', component: Status },
      { path: 'master/govt-document', component: GovtDocument },
      { path: 'master/product-color', component: ProductColor },
      { path: 'category', component: Category },
      { path: 'contact-us', component: ContactUs },
      { path: 'customer', component: Customer },
      { path: 'feedback', component: Feedback },
      { path: 'help-desk', component: HelpDesk },
      { path: 'module', component: Module },
      { path: 'payment-mode', component: PaymentMode },
      { path: 'product', component: Product },
      { path: 'purchase-item', component: PurchaseItem },
      { path: 'purchase-order', component: PurchaseOrder },
      { path: 'role', component: Role },
      { path: 'role-permission', component: RolePermission },
      { path: 'shop', component: Shop },
      { path: 'sub-menu', component: SubMenu },
      { path: 'unit-type', component: UnitType },
      { path: 'vendor', component: Vendor },
      { path: 'pos', component: Pos },
      // Add more secure routes here as needed
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SecureModule { }
