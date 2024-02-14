import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'auth-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthLayoutComponent {
  appName!: string;
  constructor() {
    this.appName = environment.tenantName;
  }
}
