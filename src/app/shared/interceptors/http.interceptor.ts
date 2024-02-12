import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // You can modify the request here before sending it
    console.log('Original Request:', request);

    // For example, add headers
    const modifiedRequest = request.clone({
      setHeaders: {
        'api-key': `mE0PlmwcHe9KneT1N7jkcC4krzg0mSlkB4WpFJ79CDaYoRJAhZk25pMWGUVw30MR`,
      },
    });

    // Pass the modified request to the next interceptor or handler
    return next.handle(modifiedRequest);
  }
}
