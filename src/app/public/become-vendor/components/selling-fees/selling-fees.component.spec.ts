import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingFeesComponent } from './selling-fees.component';

describe('SellingFeesComponent', () => {
  let component: SellingFeesComponent;
  let fixture: ComponentFixture<SellingFeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingFeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
