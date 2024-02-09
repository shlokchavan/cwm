import { Routes } from '@angular/router';
import { NavigationLayoutComponent } from './core/layouts/NavigationLayout/navigation.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/transaction',
    pathMatch: 'full',
  },
  {
    path: 'transaction',
    component: NavigationLayoutComponent,
    loadChildren: () =>
      import('./modules/transaction/transaction.module').then(
        (m) => m.TransactionModule
      ),
  },
];
