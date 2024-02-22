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

export const successInterceptor: HttpInterceptorFn = (req, next) => {
  // const toastService: ToastService = inject(ToastService);
  const toastr: ToastrService = inject(ToastrService);
  const translateService: TranslateService = inject(TranslateService);

  return next(req).pipe(
    map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        if (event.status == 201 || event.status == 204) {
          toastr.success(
            translateService.instant('Success'),
            translateService.instant('Task completed successfully')
          );
        }
      }
      return event;
    })
  );
};
