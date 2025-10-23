import { Routes } from '@angular/router';
import { Public } from './Pages/layout/public/public';
import { Login } from './Pages/pages/public/login/login/login';
import { SecureLayout } from './Pages/layout/secure/secure-layout/secure-layout';
import { SecureDashboard } from './Pages/pages/secure/secure-dashboard/secure-dashboard/secure-dashboard';
import { Menu } from './Pages/pages/secure/menu/menu';
import { MenuPermission } from './Pages/pages/secure/menu-permission/menu-permission';
import { Country } from './Pages/pages/secure/master/country/country';
import { State } from './Pages/pages/secure/master/state/state';
import { City } from './Pages/pages/secure/master/city/city';
import { Status } from './Pages/pages/secure/master/status/status';
import { GovtDocument } from './Pages/pages/secure/master/govt-document/govt-document';
import { ProductColor } from './Pages/pages/secure/master/product-color/product-color';
import { Category } from './Pages/pages/secure/category/category';
import { ContactUs } from './Pages/pages/secure/contact-us/contact-us';
import { Customer } from './Pages/pages/secure/customer/customer';
import { Feedback } from './Pages/pages/secure/feedback/feedback';
import { HelpDesk } from './Pages/pages/secure/help-desk/help-desk';
import { Module } from './Pages/pages/secure/module/module';
import { PaymentMode } from './Pages/pages/secure/payment-mode/payment-mode';
import { Product } from './Pages/pages/secure/product/product';
import { PurchaseItem } from './Pages/pages/secure/purchase-item/purchase-item';
import { PurchaseOrder } from './Pages/pages/secure/purchase-order/purchase-order';
import { Role } from './Pages/pages/secure/role/role';
import { RolePermission } from './Pages/pages/secure/role-permission/role-permission';
import { Shop } from './Pages/pages/secure/shop/shop';
import { SubMenu } from './Pages/pages/secure/sub-menu/sub-menu';
import { UnitType } from './Pages/pages/secure/unit-type/unit-type';
import { Vendor } from './Pages/pages/secure/vendor/vendor';
import { Pos } from './Pages/pages/secure/pos/pos';

export const routes: Routes = [
  { path: '', redirectTo: 'secure/dashboard', pathMatch: 'full' },
  { path: 'login', component: Login },
  { 
    path: 'secure', 
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
  },
  { path: '**', redirectTo: 'secure/dashboard' }
];
