import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Room } from '../Models/room';
import { Result } from '../Models/result';
import { Fan } from '../Models/ventilator';
import { Info } from '../Models/Info';
import { Info2 } from '../Models/Info2';
import { Door } from '../Models/door';
import { Light } from '../Models/lights';
import { RoomWindow } from '../Models/window';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getRooms(): Observable<Result<Room[]>> {
    return this.http.get<Result<Room[]>>(`${environment.baseApi}/room/`);
  }

  getRoomById(id: number): Observable<Result<Room>> {
    return this.http.get<Result<Room>>(`${environment.baseApi}/room/${id}`);
  }

  createRoom(room: Room): Observable<Result<Room>> {
    return this.http.post<Result<Room>>(`${environment.baseApi}/room/`, room);
  }

  updateRoom(room: Room): Observable<Result<Room>> {
    return this.http.put<Result<Room>>(
      `${environment.baseApi}/room/${room.id}`,
      room
    );
  }

  deleteRoom(roomId: number): Observable<Result<Room>> {
    return this.http.delete<Result<Room>>(
      `${environment.baseApi}/room/${roomId}`
    );
  }

  getFanInfo(fan: Fan): Observable<Result<Info[]>> {
    return this.http.get<Result<Info[]>>(
      `${environment.baseApi}/room/fan/${fan.id}/openInfo/`
    );
  }

  getDoorInfo(door: Door): Observable<Result<Info[]>> {
    return this.http.get<Result<Info[]>>(
      `${environment.baseApi}/room/door/${door.id}/openInfo/`
    );
  }

  getLightInfo(light: Light): Observable<Result<Info[]>> {
    return this.http.get<Result<Info[]>>(
      `${environment.baseApi}/room/light/${light.id}/openInfo/`
    );
  }

  getWindowInfo(window: RoomWindow): Observable<Result<Info[]>> {
    return this.http.get<Result<Info[]>>(
      `${environment.baseApi}/room/window/${window.id}/openInfo/`
    );
  }

  getTemperatureInfo(id: number): Observable<Result<Info2[]>> {
    return this.http.get<Result<Info2[]>>(
      `${environment.baseApi}/room/${id}/temperature/`
    );
  }

  getPeopleInfo(id: number): Observable<Result<Info2[]>> {
    return this.http.get<Result<Info2[]>>(
      `${environment.baseApi}/room/${id}/people/`
    );
  }

  getCo2Info(id: number): Observable<Result<Info2[]>> {
    return this.http.get<Result<Info2[]>>(
      `${environment.baseApi}/room/${id}/co2/`
    );
  }

  getRandomValues(id: number): Observable<Result<Info2[]>> {
    return this.http.get<Result<Info2[]>>(
      `${environment.baseApi}/room/${id}/generateRandomRoomValues`
    );
  }

  getAlarm(): Observable<Result<string[]>> {
    return this.http.get<Result<string[]>>(`${environment.baseApi}/room/alarm`);
  }

  roomImport(xlsx: File): Observable<Result<Room>> {
    const formData = new FormData();
    formData.append('file', xlsx);
    return this.http.post<Result<Room>>(
      `${environment.baseApi}/room/import`,
      formData
    );
  }

  roomExport(): Observable<Blob> {
    return this.http.get(`${environment.baseApi}/room/export`, {
      responseType: 'blob',
    });
  }

  updateDoor(door: Door): Observable<Result<string>> {
    return this.http.put<Result<string>>(
      `${environment.baseApi}/room/door/${door.id}/status`,
      {
        isOpen: door.isOpen,
      }
    );
  }

  updateWindow(window: RoomWindow): Observable<Result<string>> {
    return this.http.put<Result<string>>(
      `${environment.baseApi}/room/window/${window.id}/status`,
      {
        isOpen: window.isOpen,
      }
    );
  }

  updateLight(light: Light): Observable<Result<string>> {
    return this.http.put<Result<string>>(
      `${environment.baseApi}/room/light/${light.id}/status`,
      light
    );
  }

  updateFan(fan: Fan): Observable<Result<string>> {
    return this.http.put<Result<string>>(
      `${environment.baseApi}/room/fan/${fan.id}/status`,
      fan
    );
  }
}
