import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Result } from 'src/app/Models/result';
import { Room } from 'src/app/Models/room';
import { ApiService } from 'src/app/Services/api.service';
import { AddRoomDialogComponent } from '../add-room-dialog/add-room-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ChartData } from 'chart.js';
import 'chartjs-adapter-moment';
import { ChartsComponent } from '../charts/charts.component';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';
import { LienalChartComponent } from '../lienal-chart/lienal-chart.component';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { frases } from '../../Common/GlobalVariables';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AlertsComponent } from '../alerts/alerts.component';
import { AlertsService } from 'src/app/Services/alerts.service';
import { Alert } from 'src/app/Models/alerts';
import { Door } from 'src/app/Models/door';
import { RoomWindow } from 'src/app/Models/window';
import { Light } from 'src/app/Models/lights';
import { Fan } from 'src/app/Models/ventilator';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  fraseHome: string[] = [frases.es, frases.en, frases.ch];
  idiomaPagina: string = 'es';
  alerts: Alert[] = [];
  hasNewAlerts: boolean = false;
  co2Color: string = '';
  rooms: Room[] = [];
  nameRoom: string[] = [];
  private alertRooms = new Set<string>();

  room: Room | undefined;
  fansData: unknown[] = [];
  chartData: ChartData<'line'> = { datasets: [] };
  fan: boolean = true;
  window: boolean = true;
  door: boolean = true;
  light: boolean = true;
  roomNames$: Observable<{ [key: number]: string }> | undefined;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
    public dialog: MatDialog,
    private translate: TranslateService,
    private alertsService: AlertsService
  ) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.idiomaPagina = event.lang;
    });
  }

  ngOnInit(): void {
    this.idiomaPagina = this.translate.currentLang;
    this.loadRoomData();


    this.roomNames$ = this.apiService.getRooms().pipe(
      switchMap((result: Result<Room[]>) => {
        if (result.code === 'SUCCESS') {
          const roomNames: { [key: number]: string } = {};
          result.data.forEach((room) => (roomNames[room.id] = room.name));
          return [roomNames];
        } else {
          console.error('Error al cargar nombres de habitaciones:', result.msg);
          return [{}];
        }
      })
    );
  }

  private loadRoomData(): void {
    const roomId = Number(this.route.snapshot.paramMap.get('id'));

    this.apiService.getRoomById(roomId).subscribe((result: Result<Room>) => {
      if (result.code === 'SUCCESS') {
        this.room = result.data;
        this.updateCo2Color();
        if (this.room?.fans?.length === 0) {
          this.fan = false;
        }
        if (this.room?.windows?.length === 0) {
          this.window = false;
        }
        if (this.room?.lights?.length === 0) {
          this.light = false;
        }
        if (this.room?.doors?.length === 0) {
          this.door = false;
        }

        if (this.room.temperature > 70) {
          this.hasNewAlerts = true;
        } else {
          this.hasNewAlerts = false;
        }
      } else {
        console.error('Error fetching room:', result.msg);
      }
    });
  }

  editRoom(room: Room): void {
    const dialogRef = this.dialog.open(AddRoomDialogComponent, {
      data: { room: { ...room } },
    });

    dialogRef.afterClosed().subscribe((result: Partial<Room>) => {
      if (result) {
        const updatedRoom: Room = {
          ...room,
          ...result,
        };

        this.apiService.updateRoom(updatedRoom).subscribe(
          (response: Result<Room>) => {
            if (response.code === 'SUCCESS') {
              this.loadRoomData();
            } else {
              console.error('Error updating room:', response.msg);
            }
          },
          (error) => {
            console.error('API error updating room:', error);
          }
        );
      }
    });
  }

  deleteRoom(): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (!this.room) {
        console.error('No room data available to delete.');
        return;
      }
      if (result) {
        this.apiService.deleteRoom(this.room.id).subscribe(
          (result: Result<Room>) => {
            if (result.code === 'SUCCESS') {
              this.router.navigate(['/home']);
            } else {
              console.error('Error deleting room:', result.msg);
            }
          },
          (error) => {
            console.error('API error deleting room:', error);
          }
        );
      } else {
        console.log('Room deletion canceled.');
      }
    });
  }

  updateCo2Color(): void {
    if (this.room?.co2 !== undefined) {
      const co2 = this.room.co2;
      if (co2 < 800) {
        this.co2Color = 'rgba(0, 255, 0, 0.5)'; // Verde
      } else if (co2 < 1000) {
        this.co2Color = 'rgba(255, 255, 0, 0.5)'; // Amarillo
      } else {
        this.co2Color = 'rgba(255, 0, 0, 0.5)'; // Rojo
      }
    }
  }

  generateRandomValues(): void {
    if (this.room?.id) {
      this.apiService
        .getRandomValues(this.room.id)
        .subscribe((result: Result<unknown>) => {
          if (result.code === 'SUCCESS') {
            if (this.room) {
              const roomId = this.room.id;
              this.updateCo2Color();

              if (roomId !== undefined) {
                this.apiService
                  .getRoomById(roomId)
                  .subscribe((result: Result<Room>) => {
                    if (result.code === 'SUCCESS') {
                      this.room = result.data;

                      if (this.room.temperature < 70) {
                        console.log('del');
                        this.alertsService.removeAlertsByRoomName(
                          this.room.name
                        );

                        if (this.alertRooms.has(this.room.name)) {
                          this.alertRooms.delete(this.room.name);
                          console.log(
                            `Removed room '${this.room.name}' from alertRooms`
                          );
                        }
                      }

                      if (this.room.temperature > 70) {

                        console.log("wdg")
                        this.alertsService.removeAlertsByRoomName('Alarms.Noalarms2');
                      }

                      this.apiService
                        .getAlarm()
                        .subscribe((result: Result<string[]>) => {
                          console.log('ww');
                          if (result.code === 'SUCCESS') {
                            console.log('bb');
                            this.nameRoom = result.data;

                            if (this.nameRoom.length === 0) {
                              const alertKey = 'Alarms.Noalarms2';
                              const timestamp = '';
                              console.log(this.nameRoom);
                              this.alertsService.addAlert({
                                key: alertKey,
                                params: {},
                                timestamp,
                              });
                            } else {
                              console.log(this.nameRoom);
                              this.nameRoom.forEach((room) => {
                                if (!this.alertRooms.has(room)) {
                                  console.log('aa', this.nameRoom);
                                  this.hasNewAlerts = true;
                                  const alertKey = 'Alarms.RoomAbove70';
                                  const params = { room };
                                  const timestamp = new Date().toLocaleString();
                                  this.alertsService.addAlert({
                                    key: alertKey,
                                    params,
                                    timestamp,
                                  });
                                  this.alertRooms.add(room);
                                }
                              });
                            }
                          } else {
                            console.error('Error fetching rooms:', result.msg);
                          }
                        });

                      this.ngOnInit();
                    } else {
                      console.error('Error fetching room:', result.msg);
                    }
                  });
              }
            }
          } else {
            console.error('Error generating random values:', result.msg);
          }
        });
    }
  }

  public openFansChartDialog(): void {
    this.dialog.open(ChartsComponent, {
      data: { room: { ...this.room }, type: 'fans' },
      width: '50%',
      height: '50%',
      maxWidth: '90vw',
      maxHeight: '90vh',
      panelClass: 'custom-dialog-container',
    });
  }

  public openLightsChartDialog(): void {
    this.dialog.open(ChartsComponent, {
      data: { room: { ...this.room }, type: 'lights' },
      width: '50%',
      height: '50%',
      maxWidth: '90vw',
      maxHeight: '90vh',
      panelClass: 'custom-dialog-container',
    });
  }

  public openWindowsChartDialog(): void {
    this.dialog.open(ChartsComponent, {
      data: { room: { ...this.room }, type: 'windows' },
      width: '50%',
      height: '50%',
      maxWidth: '90vw',
      maxHeight: '90vh',
      panelClass: 'custom-dialog-container',
    });
  }

  public openDoorsChartDialog(): void {
    this.dialog.open(ChartsComponent, {
      data: { room: { ...this.room }, type: 'doors' },
      width: '50%',
      height: '50%',
      maxWidth: '90vw',
      maxHeight: '90vh',
      panelClass: 'custom-dialog-container',
    });
  }

  public openTemperatureChartDialog(): void {
    this.dialog.open(LienalChartComponent, {
      data: { room: { ...this.room }, type: 'temperature' },
      width: '50%',
      height: '50%',
      maxWidth: '90vw',
      maxHeight: '90vh',
      panelClass: 'custom-dialog-container',
    });
  }

  public openPeopleChartDialog(): void {
    this.dialog.open(LienalChartComponent, {
      data: { room: { ...this.room }, type: 'people' },
      width: '50%',
      height: '50%',
      maxWidth: '90vw',
      maxHeight: '90vh',
      panelClass: 'custom-dialog-container',
    });
  }

  public openCo2ChartDialog(): void {
    this.dialog.open(LienalChartComponent, {
      data: { room: { ...this.room }, type: 'co2' },
      width: '50%',
      height: '50%',
      maxWidth: '90vw',
      maxHeight: '90vh',
      panelClass: 'custom-dialog-container',
    });
  }

  public openAlerts(): void {
    if (!this.room) {
      return;
    }

    const filteredAlerts = this.alertsService
      .getAlerts()
      .filter((alert) => alert.params?.room === this.room?.name);

    if (filteredAlerts.length === 0) {
      const alertKey = 'Alarms.NoAlarms';
      filteredAlerts.push({ key: alertKey, params: {}, timestamp: '' });
    }

    this.dialog.open(AlertsComponent, {
      data: { alerts: filteredAlerts },
      width: 'auto',
      height: 'auto',
      maxWidth: '2000px',
      maxHeight: '2000px',
      panelClass: 'custom-dialog-container',
    });
  }

  back() {
    this.router.navigate(['/home']);
  }
  public updateDoor(door: Door): void {
    const updatedDoor = {
      id: door.id,

      isOpen: !door.isOpen,

      anotherRoomId: door.anotherRoomId,
    };

    this.apiService
      .updateDoor(updatedDoor)
      .subscribe((result: Result<string>) => {
        if (result.code === 'SUCCESS') {
          console.log('Door updated successfully');

          this.ngOnInit();
        } else {
          console.error('Error updating door:', result.msg);
        }
      });
  }

  public updateWindow(window: RoomWindow): void {
    const updateWindow = {
      id: window.id,

      isOpen: !window.isOpen,
    };

    this.apiService
      .updateWindow(updateWindow)
      .subscribe((result: Result<string>) => {
        if (result.code === 'SUCCESS') {
          this.ngOnInit();
        } else {
          console.error('Error updating window:', result.msg);
        }
      });
  }

  public updateLight(light: Light): void {
    const updateLight = {
      id: light.id,

      isOpen: !light.isOpen,
    };

    this.apiService
      .updateLight(updateLight)
      .subscribe((result: Result<string>) => {
        if (result.code === 'SUCCESS') {
          this.ngOnInit();
        } else {
          console.error('Error updating light:', result.msg);
        }
      });
  }

  public updateFan(fan: Fan): void {
    const updateFan = {
      id: fan.id,

      isOpen: !fan.isOpen,
    };

    this.apiService.updateFan(updateFan).subscribe((result: Result<string>) => {
      if (result.code === 'SUCCESS') {
        this.ngOnInit();
      } else {
        console.error('Error updating fan:', result.msg);
      }
    });
  }
}
