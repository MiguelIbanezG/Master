import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { frases } from 'src/app/Common/GlobalVariables';
import { Alert } from 'src/app/Models/alerts';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  alerts: { message: string; timestamp: string }[] = [];
  fraseHome: string[] = [frases.es, frases.en, frases.ch];
  idiomaPagina: string = "es";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { alerts: Alert[] },
    private translate: TranslateService,
  ) {
    this.translate.onLangChange.subscribe(() => {
      this.translateAlerts();
    });
  }

  ngOnInit(): void {
    this.translateAlerts();
  }

  private translateAlerts(): void {
    this.alerts = this.data.alerts.map(alert => ({
      message: this.translate.instant(alert.key, alert.params),
      timestamp: alert.timestamp
    }));
  }
}
