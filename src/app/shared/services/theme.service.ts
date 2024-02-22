import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  systemDark = signal(window.matchMedia('(prefers-color-scheme: dark)'));
  darkMode = signal(this.systemDark().matches);

  constructor() {}
}
