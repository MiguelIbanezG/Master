import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ChartData, ChartOptions } from 'chart.js';
import { Result } from 'src/app/Models/result';
import { Room } from 'src/app/Models/room';
import { ChartsComponent } from '../charts/charts.component';
import { RoomData } from 'src/app/Models/RoomData';
import { DataItem } from 'src/app/Models/DataItem';

@Component({
  selector: 'app-lienal-chart',
  templateUrl: './lienal-chart.component.html',
  styleUrls: ['./lienal-chart.component.scss'],
})
export class LienalChartComponent implements OnInit {
  room: Room | undefined;
  roomData: RoomData = { labels: [], values: [] };
  type: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { room: Room; type: string },
    private dialogRef: MatDialogRef<ChartsComponent>,
    private apiService: ApiService
  ) {
    this.room = data.room;
    this.type = data.type;
  }

  ngOnInit(): void {
    this.loadData(this.type);
  }

  private loadData(type: string): void {
    switch (type) {
      case 'temperature':
        this.apiService
          .getTemperatureInfo(this.room!.id)
          .subscribe((result: Result<DataItem[]>) => {
            this.mapData(result.data, 'temperature');
          });
        break;
      case 'co2':
        this.apiService
          .getCo2Info(this.room!.id)
          .subscribe((result: Result<DataItem[]>) => {
            this.mapData(result.data, 'co2');
          });
        break;
      case 'people':
        this.apiService
          .getPeopleInfo(this.room!.id)
          .subscribe((result: Result<DataItem[]>) => {
            this.mapData(result.data, 'numPeople');
          });
        break;
    }
  }

  private mapData(data: DataItem[], valueKey: string): void {
    const sortedData = data.sort((a, b) => {
      return new Date(a.timeStamp).getTime() - new Date(b.timeStamp).getTime();
    });

    const labels = sortedData.map((item) => {
      const date = new Date(item.timeStamp);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${day}/${month}/${year}-${hours}:${minutes}`;
    });

    const values = sortedData.map(
      (item) => item[valueKey as keyof DataItem] as number
    );

    this.roomData = { labels, values };
  }

  public getChartData(): ChartData {
    console.log(this.roomData);

    let borderColor = '';

    switch (this.type) {
      case 'temperature':
        borderColor = 'rgba(0, 0, 0, 1)';
        break;
      case 'co2':
        borderColor = 'rgba(0, 0, 0, 1)';
        break;
      case 'people':
        borderColor = 'rgba(0, 0, 0, 1)';
        break;
    }

    return {
      labels: this.roomData.labels,
      datasets: [
        {
          label: `${this.type} Data`,
          data: this.roomData.values,
          borderColor: borderColor,
          backgroundColor: borderColor,
          fill: false,
          borderWidth: 2,
          pointRadius: 5,
          pointBackgroundColor: borderColor,
          pointBorderColor: borderColor,
        },
      ],
    };
  }

  public getChartOptions(): ChartOptions {
    return {
      maintainAspectRatio: false,
      scales: {
        y: {
          ticks: {
            callback: (tickValue: string | number) => {
              return `${tickValue}`;
            },
          },
          title: {
            display: true,
            text: `${this.type} Value`,
          },
        },
        x: {
          title: {
            display: true,
            text: 'Time',
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            pointStyle: 'circle',
            boxWidth: 10,
            font: {
              size: 10,
            },
            padding: 5,
          },
        },
      },
    };
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
