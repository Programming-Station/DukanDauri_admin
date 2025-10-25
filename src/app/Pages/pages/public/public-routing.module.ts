import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Login } from './login/login/login';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  // Add more public routes here as needed
  // Example: { path: 'register', component: Register },
  // Example: { path: 'forgot-password', component: ForgotPassword },
  // Example: { path: 'reset-password', component: ResetPassword },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicModule { }
