import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NotificationModel } from './notification.model';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationsSubject = new BehaviorSubject<NotificationModel[]>([]);
  public notifications$: Observable<NotificationModel[]> =
    this.notificationsSubject.asObservable();

  constructor() {}

  addNotification(notification: Omit<NotificationModel, 'id'>) {
    const newNotification: NotificationModel = {
      ...notification,
      id: this.generateId(),
    };
    const notifications = this.notificationsSubject.value;
    this.notificationsSubject.next([...notifications, newNotification]);

    // If a duration is provided, automatically remove the notification after that time
    if (notification.duration) {
      setTimeout(
        () => this.removeNotification(newNotification.id),
        notification.duration
      );
    }
  }

  removeNotification(id: string) {
    const notifications = this.notificationsSubject.value.filter(
      (n) => n.id !== id
    );
    this.notificationsSubject.next(notifications);
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}
