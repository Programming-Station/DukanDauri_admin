import { Routes } from '@angular/router';

export const routes: Routes = [
  // Lazy load public module
  {
    path: 'public',
    loadChildren: () => import('./Pages/pages/public/public-routing.module').then(m => m.PublicModule)
  },
  
  // Lazy load secure module
  {
    path: 'secure',
    loadChildren: () => import('./Pages/pages/secure/secure-routing.module').then(m => m.SecureModule)
  },
  
  // Direct login route (lazy loaded)
  {
    path: '',
    loadChildren: () => import('./Pages/pages/public/public-routing.module').then(m => m.PublicModule)
  },
  
  // Wildcard route - redirect to dashboard
  { path: '**', redirectTo: 'secure/dashboard' }
];
