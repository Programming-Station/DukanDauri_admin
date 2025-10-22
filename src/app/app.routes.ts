import { Routes } from '@angular/router';
import { Public } from './Pages/layout/public';
import { Login } from './Pages/pages/public/login/login/login';

export const routes: Routes = [
  { path: '', component: Login },
  { path: '**', redirectTo: '' }
];
