export interface NotificationModel {
  id: string; // Unique identifier for each notification
  msgType: 'error' | 'warning' | 'success' | 'info';
  message: string;
  duration?: number;
}
