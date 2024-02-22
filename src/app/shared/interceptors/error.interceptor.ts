// error-interceptor.ts
import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { ToastService } from '../services/toast.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  // const toastController: ToastController = inject(ToastController);
  const toastService: ToastService = inject(ToastService);

  return next(req).pipe(
    catchError((e) => {
      if (e.error.detail) {
        toastService.isToastOpen.set(true);
        toastService.message.set(e.error.detail);
        toastService.toastType.set('error');
      } else {
        for (const key in e.error) {
          if (Object.prototype.hasOwnProperty.call(e.error, key)) {
            toastService.isToastOpen.set(true);
            toastService.message.set(`${key} - ${e.error[key]}`);
            toastService.toastType.set('error');
          }
        }
      }
      return throwError(() => e);
    })
  );
};
