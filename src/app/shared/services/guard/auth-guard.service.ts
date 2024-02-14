import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GLOBAL_CONFIG } from '../../../configs/global.config';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private router: Router) {}

  isLoggedIn() {
    // console.log(localStorage.getItem('RESU'));
    if (
      localStorage.getItem('RESU') !== undefined &&
      localStorage.getItem('RESU') !== null
    ) {
      return true;
    } else {
      return this.router.createUrlTree([GLOBAL_CONFIG.loginRoute]); // Redirect to login
    }
  }
}
