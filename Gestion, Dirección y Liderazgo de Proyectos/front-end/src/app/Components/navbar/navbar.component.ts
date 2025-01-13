import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { Result } from 'src/app/Models/result';
import { Room } from 'src/app/Models/room';
import * as saveAs from 'file-saver';
import { AlertsService } from 'src/app/Services/alerts.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertsComponent } from '../alerts/alerts.component';
import { frases } from 'src/app/Common/GlobalVariables';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  settingsMenuVisible = false;
  alertsMenuVisible = false;
  showLanguagesMenu = false;
  showThemeMenu = false;
  languageTimeout: ReturnType<typeof setTimeout> | undefined;
  themeTimeout: ReturnType<typeof setTimeout> | undefined;
  rooms: Room[] = [];
  nameRoom: string[] = [];
  hasNewAlerts: boolean = false;
  private alertRooms = new Set<string>();

  fraseHome: string[] = [frases.es, frases.en, frases.ch];
  idiomaPagina: string = 'es';

  constructor(
    private translate: TranslateService,
    private router: Router,
    private apiService: ApiService,
    public dialog: MatDialog,
    public alertService: AlertsService
  ) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.idiomaPagina = event.lang;
    });
  }

  ngOnInit(): void {
    this.idiomaPagina = this.translate.currentLang;

    this.apiService.getAlarm().subscribe((result: Result<string[]>) => {
      if (result.code === 'SUCCESS') {
        this.nameRoom = result.data;

        if (this.nameRoom.length === 0) {
          const alertKey = 'Alarms.Noalarms2';
          const timestamp = '';
          this.alertService.addAlert({ key: alertKey, params: {}, timestamp });
        } else {
          this.nameRoom.forEach((room) => {
            if (!this.alertRooms.has(room)) {
              this.hasNewAlerts = true;
              const alertKey = 'Alarms.RoomAbove70';
              const params = { room };
              const timestamp = new Date().toLocaleString();
              this.alertService.addAlert({ key: alertKey, params, timestamp });
              this.alertRooms.add(room);
            }
          });
        }
      } else {
        console.error('Error fetching rooms:', result.msg);
      }
    });
  }

  public openAlerts(): void {
    
    this.dialog.open(AlertsComponent, {
      data: { alerts: this.alertService.getAlerts() },
      width: 'auto',
      height: 'auto',
      maxWidth: '2000px',
      maxHeight: '2000px',
      panelClass: 'custom-dialog-container',
    });

    this.hasNewAlerts = false;
  }

  toggleSettingsMenu() {
    this.settingsMenuVisible = !this.settingsMenuVisible;
  }

  toggleAlertsMenu() {
    this.ngOnInit();
    this.alertsMenuVisible = !this.alertsMenuVisible;
  }

  toggleLanguagesMenu() {
    this.showLanguagesMenu = !this.showLanguagesMenu;
    if (this.showLanguagesMenu) {
      this.showThemeMenu = false;
    }
  }

  startLanguageTimeout() {
    this.languageTimeout = setTimeout(() => {
      this.showLanguagesMenu = false;
    }, 50);
    if (this.showThemeMenu) {
      this.showLanguagesMenu = false;
    }
  }

  clearLanguageTimeout() {
    clearTimeout(this.languageTimeout);
  }

  selectLanguage(language: string) {
    this.translate.use(language.valueOf());
    this.hideLanguagesMenu();
  }

  hideLanguagesMenu() {
    this.showLanguagesMenu = false;
    clearTimeout(this.languageTimeout);
  }

  toggleThemeMenu() {
    this.showThemeMenu = !this.showThemeMenu;
    if (this.showThemeMenu) {
      this.showLanguagesMenu = false;
    }
  }

  startThemeTimeout() {
    this.themeTimeout = setTimeout(() => {
      this.showThemeMenu = false;
    }, 50);
    if (this.showLanguagesMenu) {
      this.showThemeMenu = false;
    }
  }

  clearThemeTimeout() {
    clearTimeout(this.themeTimeout);
  }

  setTheme(theme: string) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark-theme');
      document.body.classList.add('dark-theme');
      document.documentElement.classList.remove('light-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.documentElement.classList.add('light-theme');
      document.body.classList.add('light-theme');
      document.documentElement.classList.remove('dark-theme');
      document.body.classList.remove('dark-theme');
    }
  }

  hideThemeMenu() {
    this.showThemeMenu = false;
    clearTimeout(this.themeTimeout);
  }

  back() {
    this.router.navigate(['/home']);
  }

  importExcell(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.apiService.roomImport(file).subscribe(
        (result: Result<Room>) => {
          if (result.code === 'SUCCESS') {
            console.log('Excell import successful:', result.data);
          } else {
            console.error('Error importing Excell:', result.msg);
          }
        },
        (error) => {
          console.error('API error importing Excell:', error);
        }
      );
    }
  }

  exportExcell(): void {
    this.apiService.roomExport().subscribe(
      (blob: Blob) => {
        const fileName = 'rooms_export.xlsx';
        saveAs(blob, fileName);
      },
      (error) => {
        console.error('Error exporting Excell:', error);
      }
    );
  }
}
