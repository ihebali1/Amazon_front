import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekDealsComponent } from './week-deals.component';

describe('WeekDealsComponent', () => {
  let component: WeekDealsComponent;
  let fixture: ComponentFixture<WeekDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekDealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
