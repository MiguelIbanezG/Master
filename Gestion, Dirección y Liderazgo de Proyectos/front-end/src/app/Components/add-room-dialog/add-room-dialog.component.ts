import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Room } from 'src/app/Models/room';
import { ApiService } from 'src/app/Services/api.service';
import { Result } from 'src/app/Models/result';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { frases } from '../../Common/GlobalVariables';
import { Observable } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-add-room-dialog',
  templateUrl: './add-room-dialog.component.html',
  styleUrls: ['./add-room-dialog.component.scss']
})

export class AddRoomDialogComponent implements OnInit {
  roomForm: FormGroup;
  room: Room | undefined;
  isNewRoom = true;
  fraseHome: string[] = [frases.es, frases.en, frases.ch];
  idiomaPagina: string = "es";
  availableRooms: Room[] = [];
  roomNames$: Observable<{ [key: number]: string }> | undefined;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddRoomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { room?: Partial<Room> },
    private apiService: ApiService,
    private translate: TranslateService
  ) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.idiomaPagina = event.lang
    });
    this.roomForm = this.fb.group({
      name: ['', Validators.required],
      size: [0, Validators.required],
      co2: [0],
      people: [0],
      temperature: [0],
      doors: this.fb.array([]),
      fans: this.fb.array([]),
      windows: this.fb.array([]),
      lights: this.fb.array([])
    });
  }

  ngOnInit(): void {

    this.idiomaPagina = this.translate.currentLang;

    if (this.data?.room) {

      this.isNewRoom = false;

      const roomId = this.data.room.id;

      if (roomId !== undefined) {
        this.apiService.getRoomById(roomId).subscribe((result: Result<Room>) => {
          if (result.code === 'SUCCESS') {
            this.room = result.data;
            this.populateForm(this.room);
          } else {
            console.error('Error fetching room:', result.msg);
          }
        });
      }
    }

    this.apiService.getRooms().subscribe((result: Result<Room[]>) => {
      if (result.code === 'SUCCESS') {
        this.availableRooms = result.data.filter(
          room => this.isNewRoom || room.id !== this.data?.room?.id
        );
      } else {
        console.error('Error fetching rooms:', result.msg);
      }
    });
    

    this.roomNames$ = this.apiService.getRooms().pipe(
      switchMap((result: Result<Room[]>) => {
        if (result.code === 'SUCCESS') {
          const roomNames: { [key: number]: string } = {};
          result.data.forEach(room => roomNames[room.id] = room.name);
          return [roomNames];
        } else {
          console.error('Error al cargar nombres de habitaciones:', result.msg);
          return [{}];
        }
      })
    );
  }

  generateRandomValues(): void {
    if (this.room?.id) {
      this.apiService.getRandomValues(this.room.id).subscribe((result: Result<unknown>) => {
        if (result.code === 'SUCCESS') {

          if (this.data?.room) {

            const roomId = this.data.room.id;

            if (roomId !== undefined) {
              this.apiService.getRoomById(roomId).subscribe((result: Result<Room>) => {
                if (result.code === 'SUCCESS') {
                  this.room = result.data;
                  this.rondomValuesChange(this.room);
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

  getRoomNameById(id: number): Observable<string> {
    return this.apiService.getRoomById(id).pipe(
      switchMap((response: Result<Room>) => {
        return response.code === 'SUCCESS' ? [response.data.name] : ['No se encontró'];
      }),
      catchError(() => ['Error al cargar el nombre de la habitación'])
    );
  }


  rondomValuesChange(room: Partial<Room>): void {

    this.roomForm.patchValue({
      co2: room.co2,
      people: room.people,
      temperature: room.temperature
    });

  }

  removeDoor(index: number): void {
    this.doors.removeAt(index);
  }

  removeFan(index: number): void {
    this.fans.removeAt(index);
  }

  removeWindow(index: number): void {
    this.windows.removeAt(index);
  }

  removeLight(index: number): void {
    this.lights.removeAt(index);
  }

  addFan(): void {
    this.fans.push(this.fb.group({ isOpen: false }));
  }

  addWindow(): void {
    this.windows.push(this.fb.group({ isOpen: false }));
  }

  addLight(): void {
    this.lights.push(this.fb.group({ isOpen: false }));
  }

  addDoor(): void {
    const doorGroup = this.fb.group({
      isOpen: false,
      anotherRoomId: [null]
    });
    this.doors.push(doorGroup);
  }

  get doors() {
    return this.roomForm.get('doors') as FormArray;
  }

  get fans() {
    return this.roomForm.get('fans') as FormArray;
  }

  get windows() {
    return this.roomForm.get('windows') as FormArray;
  }

  get lights() {
    return this.roomForm.get('lights') as FormArray;
  }

  populateForm(room: Partial<Room>): void {
    this.roomForm.patchValue({
      id: room.id,
      name: room.name,
      size: room.size,
      co2: room.co2,
      people: room.people,
      temperature: room.temperature
    });

    room.doors?.forEach(door => this.doors.push(this.fb.group({ id: door.id, isOpen: door.isOpen, anotherRoomId: door.anotherRoomId })));
    room.fans?.forEach(fan => this.fans.push(this.fb.group({ id: fan.id, isOpen: fan.isOpen })));
    room.windows?.forEach(window => this.windows.push(this.fb.group({ id: window.id, isOpen: window.isOpen })));
    room.lights?.forEach(light => this.lights.push(this.fb.group({ id: light.id, isOpen: light.isOpen })));
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    console.log("value dialog", this.roomForm.value);
    if (this.roomForm.valid) {
      this.dialogRef.close(this.roomForm.value);
    }
  }
}
