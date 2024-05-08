import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArrivalProductListComponent } from './new-arrival-product-list.component';

describe('NewArrivalProductListComponent', () => {
  let component: NewArrivalProductListComponent;
  let fixture: ComponentFixture<NewArrivalProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewArrivalProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewArrivalProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
