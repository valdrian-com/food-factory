// error-interceptor.ts
import { inject } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptorFn,
  HttpResponse,
} from '@angular/common/http';
import { ToastService } from '../services/toast.service';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from '../components/notifications/notifications.service';

export const successInterceptor: HttpInterceptorFn = (req, next) => {
  // const toastService: ToastService = inject(ToastService);
  const translateService: TranslateService = inject(TranslateService);
  const notificationService: NotificationService = inject(NotificationService);

  return next(req).pipe(
    map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        if (event.status == 201 || event.status == 204) {
          notificationService.addNotification({
            msgType: 'success',
            message: translateService.instant('Task completed successfully'),
            duration: 15000,
          });
        }
      }
      return event;
    })
  );
};
