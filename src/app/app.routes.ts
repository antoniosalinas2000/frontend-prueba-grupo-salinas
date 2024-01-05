import { Routes } from '@angular/router';
import { SuccessfulRedirectComponent } from './successful-redirect/successful-redirect.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'successful-redirect',
    loadComponent: () =>
      import('./successful-redirect/successful-redirect.component').then(
        (m) => m.SuccessfulRedirectComponent
      ),
  },
];
