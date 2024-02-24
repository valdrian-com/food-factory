import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import {
  IonApp,
  IonContent,
  IonRouterOutlet,
  IonToast,
} from '@ionic/angular/standalone';

import { HttpClientModule } from '@angular/common/http';

import { Subscription } from 'rxjs';
import { NotificationService } from './shared/components/notifications/notifications.service';
import { NotificationsComponent } from './shared/components/notifications/notifications.component';
import { NotificationModel } from './shared/components/notifications/notification.model';

@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <div style="position: absolute; top: 0; right: 0; z-index: 9999;">
        <app-notifications
          *ngFor="let notification of notifications"
          [msgType]="notification.msgType"
          [message]="notification.message"
        ></app-notifications>
      </div>

      <ion-router-outlet> </ion-router-outlet>
    </ion-app>
  `,
  styles: ``,
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
    NotificationsComponent,
    IonContent,
  ],
})
export class AppComponent {
  notifications: NotificationModel[] = [];
  private subscription!: Subscription;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.subscription = this.notificationService.notifications$.subscribe(
      (notifications: NotificationModel[]) => {
        console.log(notifications);
        this.notifications = notifications;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
