import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  darkMode = signal(window.matchMedia('(prefers-color-scheme: dark)').matches);
  organization = signal([]);

  constructor() {}
}
