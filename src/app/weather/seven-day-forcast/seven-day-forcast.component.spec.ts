import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenDayForcastComponent } from './seven-day-forcast.component';

describe('SevenDayForcastComponent', () => {
  let component: SevenDayForcastComponent;
  let fixture: ComponentFixture<SevenDayForcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SevenDayForcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SevenDayForcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
