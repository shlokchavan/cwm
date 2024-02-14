import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ConfirmationResult } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { GLOBAL_CONFIG } from '../../../configs/global.config';
import { CryptoService } from '../../../shared/services/util/crypto.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  phoneNumber: string = '';
  otp: string = '';
  showOTPInput: boolean = false;
  confirmationResult: ConfirmationResult | null = null;
  isLoading!: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private crypto: CryptoService
  ) {}

  sendOTP() {
    this.isLoading = true;
    this.authService
      .sendOTP(this.phoneNumber)
      .then((confirmationResult) => {
        this.confirmationResult = confirmationResult;
        this.showOTPInput = true;
        this.isLoading = false;
      })
      .catch((error) => {
        console.error('Error sending OTP:', error);
        this.isLoading = false;
      });
  }

  verifyOTP() {
    this.isLoading = true;
    if (this.confirmationResult) {
      this.authService
        .verifyOTP(this.confirmationResult, this.otp)
        .then((user) => {
          // console.log('User successfully logged in:', user);
          // Redirect user to dashboard or desired page
          // If OTP is verified, store user session in LocalStorage
          localStorage.setItem('RESU', this.crypto.encrypt(user));
          // Redirect user to dashboard or desired page
          this.router.navigate([GLOBAL_CONFIG.defaultRoute]);
          this.isLoading = false;
        })
        .catch((error) => {
          console.error('Error verifying OTP:', error);
          this.isLoading = false;
        });
    }
  }
}
