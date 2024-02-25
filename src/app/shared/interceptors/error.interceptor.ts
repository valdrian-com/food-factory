// error-interceptor.ts
import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationService } from '../components/notifications/notifications.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const notificationService: NotificationService = inject(NotificationService);

  return next(req).pipe(
    catchError((e) => {
      console.log('err', e);
      if (e.error.detail) {
        notificationService.addNotification({
          msgType: 'error',
          message: e.error.detail,
          duration: 5000,
        });
      } else {
        for (const key in e.error) {
          if (Object.prototype.hasOwnProperty.call(e.error, key)) {
            if (key === 'message') {
              notificationService.addNotification({
                msgType: 'error',
                message: e.error[key],
                duration: 5000,
              });
            }
          }
        }
      }
      return throwError(() => e);
    })
  );
};
