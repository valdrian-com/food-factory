import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-dashboard',
  template: `
    <ion-split-pane contentId="main-content">
      <ion-menu contentId="main-content" type="overlay">
        <app-menu></app-menu>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  `,

  styles: ``,
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    MenuComponent,
  ],
})
export class DashboardPage {
  constructor() {}
}
