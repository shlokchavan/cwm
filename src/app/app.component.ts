import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomHttpInterceptor } from './shared/interceptors/http.interceptor';
import { Title } from '@angular/platform-browser';
import { environment } from '../environments/environment.development';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true,
    },
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

  constructor(private titleService: Title) {}
  ngOnInit(): void {
    this.setTitle(environment.tenantName); // Set your new title here
  }
  setTitle(newTitle: string): void {
    this.titleService.setTitle(newTitle);
  }
}
