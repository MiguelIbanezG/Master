import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/Models/room';
import { ApiService } from 'src/app/Services/api.service';
import { AddRoomDialogComponent } from '../add-room-dialog/add-room-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Result } from 'src/app/Models/result';
import { saveAs } from 'file-saver';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { frases } from '../../Common/GlobalVariables';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  fraseHome: string[] = [frases.es, frases.en, frases.ch];
  idiomaPagina: string = 'es';
  co2: number = 0;
  roomDataMap: Map<number, Room> = new Map();
  roomIds: number[] = [];
  rooms: Room[] = [];
  filteredRooms: Room[] = [];
  searchQuery: string = '';
  constructor(
    private apiService: ApiService,
    public dialog: MatDialog,
    private translate: TranslateService
  ) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.idiomaPagina = event.lang;
    });
  }

  ngOnInit(): void {
    this.idiomaPagina = this.translate.currentLang;
    this.getRooms();
  }

  getRooms(): void {
    this.apiService.getRooms().subscribe((result: Result<Room[]>) => {
      if (result.code === 'SUCCESS') {
        this.rooms = result.data;
        this.roomIds = result.data.map(room => room.id); 
        this.filteredRooms = result.data;
      } else {
        console.error('Error fetching rooms:', result.msg);
      }
    });
  }


  getRoomFilterColor(id: number): string {
    const room = this.roomDataMap.get(id);

    if (room) {
      const co2 = room.co2;

      if (co2 < 800) {
        return 'rgba(0, 255, 0, 0.5)'; // Verde
      } else if (co2 < 1000) {
        return 'rgba(255, 255, 0, 0.5)'; // Amarillo
      } else {
        return 'rgba(255, 0, 0, 0.5)'; // Rojo
      }
    } else {
      // Si no hay datos, realizar la llamada a la API
      this.apiService.getRoomById(id).subscribe(
        (room) => {
          this.roomDataMap.set(id, room.data); // Almacenar datos en el mapa
        },
        (error) => {
          console.error(`Error fetching room data for ID ${id}:`, error);
        }
      );

      // Devolver un color predeterminado mientras se cargan los datos
      return 'rgba(200, 200, 200, 0.5)'; // Gris claro
    }
  }

  updateRoomColor(id: number, color: string): void {
    const roomElement = document.getElementById(`room-${id}`);
    if (roomElement) {
      roomElement.style.backgroundColor = color;
    }
  }


  getRoomImage(roomId: number): string {
    const imageIndex = (roomId % 6) + 1;
    return `/assets/images/room${imageIndex}.jpg`;
  }

  deleteRoom(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (!id) {
        console.error('No room data available to delete.');
        return;
      }
      if (result) {
        this.apiService.deleteRoom(id).subscribe(
          (result: Result<Room>) => {
            if (result.code === 'SUCCESS') {
              this.getRooms();
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

  searchRooms(): void {
    this.filteredRooms = this.rooms.filter((room) =>
      room.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  createRoom(): void {
    const dialogRef = this.dialog.open(AddRoomDialogComponent);

    dialogRef.afterClosed().subscribe((result: Partial<Room>) => {
      if (result) {
        const newRoom: Room = {
          ...result,
          id: this.rooms.length + 1,
          doors: result.doors ?? [],
          windows: result.windows ?? [],
          size: result.size ?? 0,
          lights: result.lights ?? [],
          fans: result.fans ?? [],
          co2: result.co2 ?? 0,
          temperature: result.temperature ?? 0,
          people: result.people ?? 0,
          name: result.name ?? '',
        };

        this.apiService.createRoom(newRoom).subscribe(
          (response: Result<Room>) => {
            if (response.code === 'SUCCESS') {
              this.getRooms();
            } else {
              console.error('Error creating room:', response.msg);
            }
          },
          (error) => {
            console.error('API error creating room:', error);
          }
        );
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

        console.log('Updating room:', updatedRoom);

        this.apiService.updateRoom(updatedRoom).subscribe(
          (response: Result<Room>) => {
            if (response.code === 'SUCCESS') {
              this.getRooms();
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

  importExcell(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.apiService.roomImport(file).subscribe(
        (result: Result<Room>) => {
          if (result.code === 'SUCCESS') {
            console.log('Excell import successful:', result.data);
            this.ngOnInit();
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
