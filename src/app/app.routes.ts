import { Routes } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/transaction',
    pathMatch: 'full'
  },
  {
    path: 'transaction',
    // component: HeaderComponent,
    loadChildren: () =>
      import('./modules/transaction/transaction.module').then(
        (m) => m.TransactionModule
      ),
  },
];
