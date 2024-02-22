import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  isToastOpen = signal(false);
  message = signal('');
  toastType = signal('info');

  constructor() {}
}
