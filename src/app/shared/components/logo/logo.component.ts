import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <div style="display: flex; justify-content: center; min-with: 100%">
      <img
        *ngIf="darkMode()"
        src="../../../assets/logo-grey.svg"
        class="img-fluid w-25"
        alt="logo"
      />
      <img
        *ngIf="!darkMode()"
        src="../../../assets/logo.svg"
        class="img-fluid w-25"
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
