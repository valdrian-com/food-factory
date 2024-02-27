import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <div style="display: flex; justify-content: center; min-with: 100%">
      <img
        *ngIf="darkMode()"
        src="../../../assets/logo-grey.svg"
        class="w-100 h-auto"
        alt="logo"
      />
      <img
        *ngIf="!darkMode()"
        class="w-100 h-auto"
        src="../../../assets/logo.svg"
        alt="logo"
      />
    </div>
  `,
  styles: ``,
  standalone: true,
  imports: [CommonModule],
})
export class LogoComponent implements OnInit {
  darkMode = signal(window.matchMedia('(prefers-color-scheme: dark)').matches);
  constructor() {}

  ngOnInit() {
    console.log(this.darkMode());
  }
}
