import { Injectable } from '@angular/core';
import { Alert } from '../Models/alerts';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  private alerts: Alert[] = [];

  constructor() {}

  addAlert(alert: Alert): void {
    const exists = this.alerts.some(
      (existingAlert) =>
        existingAlert.key === alert.key &&
        JSON.stringify(existingAlert.params) === JSON.stringify(alert.params)
    );

    if (!exists) {
      this.alerts.push(alert);
    }
  }

  removeAlert(alert: Alert): void {
    this.alerts = this.alerts.filter(
      (existingAlert) =>
        !(
          existingAlert.key === alert.key &&
          JSON.stringify(existingAlert.params) ===
            JSON.stringify(alert.params) &&
          existingAlert.timestamp === alert.timestamp
        )
    );
  }

  removeAlertsByRoomName(roomName: string): void {
    this.alerts = this.alerts.filter(
      (alert) =>
        !(
          alert.key.includes(roomName) ||
          JSON.stringify(alert.params).includes(roomName)
        )
    );
  }

  getAlerts(): Alert[] {
    return this.alerts;
  }
}
