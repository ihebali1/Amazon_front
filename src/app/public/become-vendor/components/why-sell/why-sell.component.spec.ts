import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhySellComponent } from './why-sell.component';

describe('WhySellComponent', () => {
  let component: WhySellComponent;
  let fixture: ComponentFixture<WhySellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhySellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhySellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
