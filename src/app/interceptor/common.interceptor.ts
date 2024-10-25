import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';
import { ResponseData } from '../interfaces/response';
import { STATUS_CODE } from '../constants/config';
import { MESSAGE } from '../constants/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable()

export class CommonInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private notification: NzNotificationService
  ) { }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = this.authService.getToken();
    if (accessToken) {
      let headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
      // if (!request.url.includes("UploadFile")) {
      //   headers= headers.append('content-type', 'application/json');
      // }
      request = request.clone({
        headers
      })
    }

    return next.handle(request)
      .pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            const result = event.body as ResponseData;
            if (result.success === false) {
              this.notification.error(MESSAGE.ERROR, result.error);
            }
          }
        }, (err: any) => {
          if (err.status === STATUS_CODE.UNAUTHORIZED) {
            this.authService.logout()
          }
          this.notification.error(MESSAGE.ERROR, MESSAGE.SYSTEM_ERROR);
        })
    );
  }
}
