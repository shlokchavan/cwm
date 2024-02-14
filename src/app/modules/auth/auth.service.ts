import { Injectable, inject } from '@angular/core';
import {
  Auth,
  ConfirmationResult,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from '@angular/fire/auth';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  auth = inject(Auth);
  phonePrefix!: string;
  constructor(private router: Router) {
    this.phonePrefix = environment.defaultCountryPhonePrefix;
  }

  private validPhoneNumber(phoneNumber: string): string {
    return phoneNumber
      .toString()
      .includes(environment.defaultCountryPhonePrefix)
      ? phoneNumber
      : `${this.phonePrefix}${phoneNumber}`;
  }

  // Send OTP to the user's phone number
  async sendOTP(phoneNumber: string) {
    const appVerifier = new RecaptchaVerifier(
      this.auth,
      'recaptcha-container',
      {
        size: 'invisible',
      }
    );
    return signInWithPhoneNumber(
      this.auth,
      this.validPhoneNumber(phoneNumber),
      appVerifier
    )
      .then((confirmationResult) => {
        // console.log(confirmationResult);
        return confirmationResult;
      })
      .catch((error) => {
        console.error('Error sending OTP:', error);
        throw error;
      });
  }

  // Verify the OTP entered by the user
  async verifyOTP(
    confirmationResult: ConfirmationResult,
    verificationCode: string
  ) {
    return confirmationResult
      .confirm(verificationCode)
      .then((result) => {
        return result.user;
      })
      .catch((error) => {
        console.error('Error verifying OTP:', error);
        throw error;
      });
  }

  // Get user session data from LocalStorage
  getUserFromLocalStorage() {
    const user = localStorage.getItem('RESU');
    return user ? JSON.parse(user) : null;
  }

  // logout

  logout() {
    setTimeout(() => {
      localStorage.removeItem('RESU');
      this.router.navigate(['/']);
    }, 100);
  }
}
