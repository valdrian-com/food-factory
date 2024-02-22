import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { IonApp, IonRouterOutlet, IonToast } from '@ionic/angular/standalone';
import { ToastService } from './shared/services/toast.service';
import { addIcons } from 'ionicons';
import {
  alertCircleOutline,
  chevronDownCircleOutline,
  closeCircleOutline,
  closeOutline,
  informationCircleOutline,
} from 'ionicons/icons';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-toast
        [isOpen]="toastService.isToastOpen()"
        [message]="toastService.message()"
        [duration]="10000"
        (didDismiss)="setDefault()"
        [icon]="icons[toastService.toastType()]"
        [class]="toastService.toastType()"
        [buttons]="toastButtons"
      ></ion-toast>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `,
  styles: `
  .error {
    color: red;
    font-size: 1.2rem;
  }
  .success {
    color: green;
    font-size: 1.2rem;
  }
  .warning {
    color: yellow;
    font-size: 1.2rem;
  }
  .info {
    // color: blue
  }
  `,
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    HttpClientModule,
    CommonModule,
    RouterModule,
    IonApp,
    IonRouterOutlet,
    IonToast,
  ],
})
export class AppComponent {
  icons: { [key: string]: string } = {
    error: 'close-circle-outline',
    info: 'information-circle-outline',
    warning: 'alert-circle-outline',
    success: 'chevron-down-circle-outline',
  };

  constructor(public toastService: ToastService) {
    addIcons({
      informationCircleOutline,
      alertCircleOutline,
      closeCircleOutline,
      chevronDownCircleOutline,
      closeOutline,
    });
  }
  public toastButtons = [
    {
      icon: 'close-outline',
      role: 'cancel',
      handler: () => {
        console.log('Dismiss clicked');
      },
    },
  ];

  setDefault() {
    this.toastService.isToastOpen.set(false);
    this.toastService.message.set('');
    this.toastService.toastType.set('info');
  }
}
