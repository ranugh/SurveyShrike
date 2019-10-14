import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppDataProvider } from '../global/AppDataProvider';
import { CacheStore } from '../global/CacheStore';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
      public data: AppDataProvider,
      public cacheStore : CacheStore
  ){}  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.cacheStore.getData(CacheStore.TOKEN); // you probably want to store it in localStorage or something

    if (!token) {
      return next.handle(req);
    }

    const req1 = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });

    return next.handle(req1);
  }
}

