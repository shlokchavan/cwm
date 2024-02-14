import { Routes } from '@angular/router';
import { NavigationLayoutComponent } from './core/layouts/NavigationLayout/navigation.component';
import { AuthLayoutComponent } from './core/layouts/AuthLayout/auth/auth.component';
import { inject } from '@angular/core';
import { AuthGuardService } from './shared/services/guard/auth-guard.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
    canDeactivate: [() => inject(AuthGuardService).isLoggedIn()],
  },
  {
    path: 'transaction',
    component: NavigationLayoutComponent,
    loadChildren: () =>
      import('./modules/transaction/transaction.module').then(
        (m) => m.TransactionModule
      ),
    canActivate: [() => inject(AuthGuardService).isLoggedIn()],
  },
];
