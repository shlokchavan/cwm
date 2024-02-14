// crypto.service.ts

import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  private readonly encryptionKey = 'aBcDeFgHiJkLmNoPqRsTuVwXyZ0123456789'; // Change this to your actual encryption key

  constructor() {}

  // Encrypt data using AES encryption
  encrypt(data: any): string {
    return CryptoJS.AES.encrypt(
      JSON.stringify(data),
      this.encryptionKey
    ).toString();
  }

  // Decrypt data using AES decryption
  decrypt(encryptedData: string): any {
    const bytes = CryptoJS.AES.decrypt(encryptedData, this.encryptionKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }
}
