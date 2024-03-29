import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  isToastOpen = signal(false);
  message = signal('');
  toastType = signal('info');
  toastDuration = signal(3000);
  toastPosition = signal('bottom');

  constructor() {}
}
