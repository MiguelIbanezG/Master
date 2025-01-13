import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LienalChartComponent } from './lienal-chart.component';

describe('LienalChartComponent', () => {
  let component: LienalChartComponent;
  let fixture: ComponentFixture<LienalChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LienalChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LienalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
