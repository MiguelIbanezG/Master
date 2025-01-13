import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';
import { Info } from '../Models/Info';
import { Room } from '../Models/room';
import { Result } from '../Models/result';
import { Fan } from '../Models/ventilator';
import { Door } from '../Models/door';

import {
  TranslateFakeLoader,
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomWindow } from '../Models/window';
import { Light } from '../Models/lights';
import { Info2 } from '../Models/Info2';

// Mock data
const mockRoom: Room = {
  id: 1,
  name: 'Living Room',
  size: 20,
  co2: 400,
  temperature: 22,
  people: 3,
  doors: [],
  windows: [],
  lights: [],
  fans: [],
};

const mockRoomArray: Room[] = [mockRoom];

const mockRoomResult: Result<Room[]> = {
  data: mockRoomArray,
  msg: 'Success',
  code: '200',
};

const mockResult: Result<Room> = {
  data: mockRoom,
  msg: 'Success',
  code: '200',
};

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          },
        }),
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
      providers: [
        ApiService,
        { provide: TranslateService, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        FormBuilder,
      ],
    });

    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch rooms', () => {
    service.getRooms().subscribe((response) => {
      expect(response).toEqual(mockRoomResult);
    });

    const req = httpMock.expectOne(`${environment.baseApi}/room/`);
    expect(req.request.method).toBe('GET');
    req.flush(mockRoomResult);
  });

  it('should fetch room by ID', () => {
    service.getRoomById(1).subscribe((response) => {
      expect(response).toEqual(mockResult);
    });

    const req = httpMock.expectOne(`${environment.baseApi}/room/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResult);
  });

  it('should create a room', () => {
    service.createRoom(mockRoom).subscribe((response) => {
      expect(response).toEqual(mockResult);
    });

    const req = httpMock.expectOne(`${environment.baseApi}/room/`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockRoom);
    req.flush(mockResult);
  });

  it('should update a room', () => {
    service.updateRoom(mockRoom).subscribe((response) => {
      expect(response).toEqual(mockResult);
    });

    const req = httpMock.expectOne(
      `${environment.baseApi}/room/${mockRoom.id}`
    );
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(mockRoom);
    req.flush(mockResult);
  });

  it('should delete a room', () => {
    service.deleteRoom(1).subscribe((response) => {
      expect(response).toEqual(mockResult);
    });

    const req = httpMock.expectOne(`${environment.baseApi}/room/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(mockResult);
  });

  it('should fetch fan info', () => {
    const fan: Fan = { id: 1, isOpen: true };
    const mockInfoResult: Result<Info[]> = {
      data: [],
      msg: 'Success',
      code: '200',
    };

    service.getFanInfo(fan).subscribe((response) => {
      expect(response).toEqual(mockInfoResult);
    });

    const req = httpMock.expectOne(
      `${environment.baseApi}/room/fan/${fan.id}/openInfo/`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockInfoResult);
  });

  it('should fetch door info', () => {
    const door: Door = { id: 1, isOpen: true, anotherRoomId: 2 };
    const mockInfoResult: Result<Info[]> = {
      data: [],
      msg: 'Success',
      code: '200',
    };

    service.getDoorInfo(door).subscribe((response) => {
      expect(response).toEqual(mockInfoResult);
    });

    const req = httpMock.expectOne(
      `${environment.baseApi}/room/door/${door.id}/openInfo/`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockInfoResult);
  });

  it('should fetch window info', () => {
    const window: RoomWindow = { id: 1, isOpen: true };
    const mockInfoResult: Result<Info[]> = {
      data: [],
      msg: 'Success',
      code: '200',
    };

    service.getWindowInfo(window).subscribe((response) => {
      expect(response).toEqual(mockInfoResult);
    });

    const req = httpMock.expectOne(
      `${environment.baseApi}/room/window/${window.id}/openInfo/`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockInfoResult);
  });

  it('should fetch light info', () => {
    const light: Light = { id: 1, isOpen: true };
    const mockInfoResult: Result<Info[]> = {
      data: [],
      msg: 'Success',
      code: '200',
    };

    service.getLightInfo(light).subscribe((response) => {
      expect(response).toEqual(mockInfoResult);
    });

    const req = httpMock.expectOne(
      `${environment.baseApi}/room/light/${light.id}/openInfo/`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockInfoResult);
  });

  it('should fetch temperature info', () => {
    const mockTemperatureInfo: Result<Info2[]> = {
      data: [],
      msg: 'Success',
      code: '200',
    };

    service.getTemperatureInfo(1).subscribe((response) => {
      expect(response).toEqual(mockTemperatureInfo);
    });

    const req = httpMock.expectOne(
      `${environment.baseApi}/room/1/temperature/`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockTemperatureInfo);
  });

  it('should fetch people info', () => {
    const mockPeopleInfo: Result<Info2[]> = {
      data: [],
      msg: 'Success',
      code: '200',
    };

    service.getPeopleInfo(1).subscribe((response) => {
      expect(response).toEqual(mockPeopleInfo);
    });

    const req = httpMock.expectOne(`${environment.baseApi}/room/1/people/`);
    expect(req.request.method).toBe('GET');
    req.flush(mockPeopleInfo);
  });

  it('should fetch CO2 info', () => {
    const mockCo2Info: Result<Info2[]> = {
      data: [],
      msg: 'Success',
      code: '200',
    };

    service.getCo2Info(1).subscribe((response) => {
      expect(response).toEqual(mockCo2Info);
    });

    const req = httpMock.expectOne(`${environment.baseApi}/room/1/co2/`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCo2Info);
  });

  it('should fetch random values for a room', () => {
    const mockRandomValues: Result<Info2[]> = {
      data: [],
      msg: 'Success',
      code: '200',
    };

    service.getRandomValues(1).subscribe((response) => {
      expect(response).toEqual(mockRandomValues);
    });

    const req = httpMock.expectOne(
      `${environment.baseApi}/room/1/generateRandomRoomValues`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockRandomValues);
  });

  it('should fetch room alarm data', () => {
    const mockAlarm: Result<string[]> = {
      data: ['Alarm 1', 'Alarm 2'],
      msg: 'Success',
      code: '200',
    };

    service.getAlarm().subscribe((response) => {
      expect(response).toEqual(mockAlarm);
    });

    const req = httpMock.expectOne(`${environment.baseApi}/room/alarm`);
    expect(req.request.method).toBe('GET');
    req.flush(mockAlarm);
  });

  it('should import room data', () => {
    const mockFile = new File([], 'mock-file.xlsx');
    const mockImportResult: Result<Room> = {
      data: mockRoom,
      msg: 'Success',
      code: '200',
    };

    service.roomImport(mockFile).subscribe((response) => {
      expect(response).toEqual(mockImportResult);
    });

    const req = httpMock.expectOne(`${environment.baseApi}/room/import`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body.get('file')).toBe(mockFile);
    req.flush(mockImportResult);
  });

  it('should export room data', () => {
    const mockExportBlob = new Blob(['mock data'], {
      type: 'application/octet-stream',
    });

    service.roomExport().subscribe((response) => {
      expect(response).toEqual(mockExportBlob);
    });

    const req = httpMock.expectOne(`${environment.baseApi}/room/export`);
    expect(req.request.method).toBe('GET');
    req.flush(mockExportBlob);
  });

  it('should update door status', () => {
    const mockDoor: Door = { id: 1, isOpen: true, anotherRoomId: 2 };
    const mockUpdateResult: Result<string> = {
      data: 'Success',
      msg: 'Success',
      code: '200',
    };

    service.updateDoor(mockDoor).subscribe((response) => {
      expect(response).toEqual(mockUpdateResult);
    });

    const req = httpMock.expectOne(`${environment.baseApi}/room/door/1/status`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual({ isOpen: true });
    req.flush(mockUpdateResult);
  });

  it('should update window status', () => {
    const mockWindow: RoomWindow = { id: 1, isOpen: true };
    const mockUpdateResult: Result<string> = {
      data: 'Success',
      msg: 'Success',
      code: '200',
    };

    service.updateWindow(mockWindow).subscribe((response) => {
      expect(response).toEqual(mockUpdateResult);
    });

    const req = httpMock.expectOne(
      `${environment.baseApi}/room/window/1/status`
    );
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual({ isOpen: true });
    req.flush(mockUpdateResult);
  });

  it('should update light status', () => {
    const mockLight: Light = { id: 1, isOpen: true };
    const mockUpdateResult: Result<string> = {
      data: 'Success',
      msg: 'Success',
      code: '200',
    };

    service.updateLight(mockLight).subscribe((response) => {
      expect(response).toEqual(mockUpdateResult);
    });

    const req = httpMock.expectOne(
      `${environment.baseApi}/room/light/1/status`
    );
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(mockLight);
    req.flush(mockUpdateResult);
  });

  it('should update fan status', () => {
    const mockFan: Fan = { id: 1, isOpen: true };
    const mockUpdateResult: Result<string> = {
      data: 'Success',
      msg: 'Success',
      code: '200',
    };

    service.updateFan(mockFan).subscribe((response) => {
      expect(response).toEqual(mockUpdateResult);
    });

    const req = httpMock.expectOne(`${environment.baseApi}/room/fan/1/status`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(mockFan);
    req.flush(mockUpdateResult);
  });
});
