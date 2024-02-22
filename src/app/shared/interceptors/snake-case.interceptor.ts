import {
  HttpEvent,
  HttpResponse,
  HttpInterceptorFn,
} from '@angular/common/http';
import { map } from 'rxjs/operators';

export const snakeCaseInterceptor: HttpInterceptorFn = (req, next) => {
  if ((req.body && req.method === 'POST') || req.method === 'PUT') {
    req = req.clone({
      body: convertObjectKeysToSnakeCase(req.body),
    });
  }

  return next(req).pipe(
    map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse && event.body) {
        event = event.clone({
          body: convertObjectKeysToCamelCase(event.body),
        });
      }
      return event;
    })
  );
};

function convertObjectKeysToSnakeCase(obj: any): any {
  if (obj && typeof obj === 'object') {
    const snakeCaseObj: any = {};
    for (const [key, value] of Object.entries(obj)) {
      const snakeCaseKey = convertToSnakeCase(key);
      snakeCaseObj[snakeCaseKey] = convertObjectKeysToSnakeCase(value);
    }
    return snakeCaseObj;
  } else {
    return obj;
  }
}

function convertObjectKeysToCamelCase(obj: any): any {
  if (obj && typeof obj === 'object') {
    const camelCaseObj: any = {};
    for (const [key, value] of Object.entries(obj)) {
      const camelCaseKey = convertToCamelCase(key);
      camelCaseObj[camelCaseKey] = convertObjectKeysToCamelCase(value);
    }
    return camelCaseObj;
  } else {
    return obj;
  }
}

function convertToSnakeCase(str: string): string {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase();
}

function convertToCamelCase(str: string): string {
  return str.replace(/_([a-z])/g, (match, group) => group.toUpperCase());
}
