import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ChartData, ChartOptions } from 'chart.js';
import { Result } from 'src/app/Models/result';
import { Room } from 'src/app/Models/room';
import { Info } from 'src/app/Models/Info';
import { forkJoin, Observable } from 'rxjs';
import { ElementData } from 'src/app/Models/elementData';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  public chartData: ChartData<'line'> = { labels: [], datasets: [] };
  room: Room | undefined;
  type: string;
  allTimestamps: Date[] = [];

  private colorSets: { [key: string]: string[] } = {
    Fan: [
      'rgba(0, 0, 0, 0.8)',
      'rgba(255, 0, 0, 0.8)',
      'rgba(0, 0, 255, 0.8)',
      'rgba(255, 255, 0, 0.8)',
      'rgba(0, 128, 0, 0.8)',
    ],
    Window: [
      'rgba(0, 0, 0, 0.8)',
      'rgba(255, 0, 0, 0.8)',
      'rgba(0, 0, 255, 0.8)',
      'rgba(255, 255, 0, 0.8)',
      'rgba(0, 128, 0, 0.8)',
    ],
    Light: [
      'rgba(0, 0, 0, 0.8)',
      'rgba(255, 0, 0, 0.8)',
      'rgba(0, 0, 255, 0.8)',
      'rgba(255, 255, 0, 0.8)',
      'rgba(0, 128, 0, 0.8)',
    ],
    Door: [
      'rgba(0, 0, 0, 0.8)',
      'rgba(255, 0, 0, 0.8)',
      'rgba(0, 0, 255, 0.8)',
      'rgba(255, 255, 0, 0.8)',
      'rgba(0, 128, 0, 0.8)',
    ],
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { room: Room; type: string },
    private dialogRef: MatDialogRef<ChartsComponent>,
    private apiService: ApiService
  ) {
    this.room = data.room;
    this.type = data.type;
  }

  ngOnInit(): void {
    if (this.type === 'fans') {
      this.loadData(
        this.room?.fans,
        'Fan',
        this.apiService.getFanInfo.bind(this.apiService)
      );
    }
    if (this.type === 'windows') {
      this.loadData(
        this.room?.windows,
        'Window',
        this.apiService.getWindowInfo.bind(this.apiService)
      );
    }
    if (this.type === 'lights') {
      this.loadData(
        this.room?.lights,
        'Light',
        this.apiService.getLightInfo.bind(this.apiService)
      );
    }
    if (this.type === 'doors') {
      this.loadData(
        this.room?.doors,
        'Door',
        this.apiService.getDoorInfo.bind(this.apiService)
      );
    }
  }

  private loadData<T extends ElementData>(
    elements: T[] = [],
    elementType: string,
    fetchDataFn: (element: T) => Observable<Result<Info[]>>
  ): void {
    if (elements.length > 0) {
      const requests = elements.map((element) =>
        fetchDataFn(element).pipe(
          map((infoResult: Result<Info[]>) => {
            console.log(`Data fetched for element ID ${element.id}:`, infoResult);


            const sortedData = infoResult.data.sort(
              (a, b) =>
                new Date(a.timeStamp).getTime() -
                new Date(b.timeStamp).getTime()
            );

            console.log(`Sorted data for element ID ${element.id}:`, sortedData);

            sortedData.forEach((info) =>
              this.allTimestamps.push(new Date(info.timeStamp))
            );
            this.allTimestamps.sort((a, b) => a.getTime() - b.getTime());

            return sortedData;
          })
        )
      );

      forkJoin(requests).subscribe((allSortedData: Info[][]) => {
        console.log('All sorted data:', allSortedData);
        allSortedData.forEach((sortedData, index) => {
          const element = elements[index];
          const color = this.getColorByType(elementType, index);

          this.allTimestamps.sort((a, b) => a.getTime() - b.getTime());
          const uniqueTimestamps = Array.from(
            new Set(this.allTimestamps.map((timestamp) => timestamp.getTime()))
          ).map((time) => new Date(time));
          console.log('Unique timestamps:', uniqueTimestamps);
          this.chartData.labels = uniqueTimestamps.map((date) =>
            date.toLocaleString()
          );

          const statusData = Array.from(uniqueTimestamps).map((timestamp) => {
            let dataPoint = sortedData.find(
              (info) =>
                new Date(info.timeStamp).getTime() === timestamp.getTime()
            );

            if (!dataPoint) {
              const previousData = [...sortedData]
                .reverse()
                .find(
                  (info) =>
                    new Date(info.timeStamp).getTime() < timestamp.getTime()
                );

              dataPoint = previousData || undefined;
            }

            return dataPoint ? (dataPoint.open ? 1 : 0) : null;
          });

          console.log(`Status data for ${elementType} ID ${element.id}:`, statusData);

          this.chartData.datasets.push({
            label: `${elementType} ID: ${element.id}`,
            data: statusData,
            borderColor: color,
            backgroundColor: color.replace('0.8', '0.3'),
            pointBackgroundColor: color,
            pointBorderColor: color.replace('0.8', '1'),
            tension: 0,
          });
        });
      });
    }
  }

  private getColorByType(elementType: string, index: number): string {
    const colors = this.colorSets[elementType] || ['rgba(0, 0, 0, 0.8)'];
    return colors[index % colors.length];
  }

  public getChartOptions(title: string): ChartOptions<'line'> {
    return {
      maintainAspectRatio: false,
      scales: {
        y: {
          min: -0.1,
          max: 1.1,
          ticks: {
            stepSize: 1,
            callback: (tick) => {
              if (tick === 1) return 'On/Open';
              if (tick === 0) return 'Off/Close';
              return '';
            },
          },
          title: { display: true, text: `${title} Status` },
        },
      },
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    };
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
