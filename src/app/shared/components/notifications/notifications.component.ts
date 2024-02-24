import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';

import {
  alertCircle,
  warning,
  checkmarkCircle,
  informationCircle,
  alertCircleOutline,
  warningOutline,
  checkmarkCircleOutline,
  closeOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-notifications',
  template: `
    <div
      @slideFade
      class="relative top-5 right-5 flex flex-col space-y-2 z-50"
      role="alert"
    >
      <div
        *ngIf="message"
        [ngClass]="{
          'bg-red-500 text-white': msgType === 'error',
          'bg-yellow-500 text-black': msgType === 'warning',
          'bg-green-500 text-white': msgType === 'success',
          'bg-blue-500 text-white': msgType === 'info'
        }"
        class="flex items-center p-4 mb-4 rounded"
      >
        <ion-icon [name]="getIconName(msgType)" class="mr-2"></ion-icon>
        <strong class="font-bold">{{ title }}</strong>
        <span class="block sm:inline">{{ message }}</span>

        <button (click)="dismiss()" class="ml-auto">
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>
    </div>
  `,
  styles: ``,
  standalone: true,
  animations: [
    trigger('slideFade', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate(
          '500ms ease-out',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        animate(
          '500ms ease-in',
          style({ transform: 'translateX(100%)', opacity: 0 })
        ),
      ]),
    ]),
  ],
  imports: [CommonModule, IonIcon],
})
export class NotificationsComponent implements OnInit {
  @Input() msgType: 'error' | 'warning' | 'success' | 'info' = 'info';
  @Input() message: string = '';
  @Input() title: string = '';

  getIconName(msgType: string): string {
    switch (msgType) {
      case 'error':
        return 'alert-circle';
      case 'warning':
        return 'warning';
      case 'success':
        return 'checkmark-circle';
      case 'info':
        return 'information-circle';
      default:
        return 'information-circle';
    }
  }

  dismiss() {
    this.message = ''; // Implement a better dismiss logic as needed
  }
  constructor() {
    addIcons({
      alertCircle,
      warning,
      checkmarkCircle,
      informationCircle,
      alertCircleOutline,
      warningOutline,
      checkmarkCircleOutline,
      closeOutline,
    });
  }

  ngOnInit() {}
}
