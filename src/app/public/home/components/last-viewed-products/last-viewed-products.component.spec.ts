import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastViewedProductsComponent } from './last-viewed-products.component';

describe('LastViewedProductsComponent', () => {
  let component: LastViewedProductsComponent;
  let fixture: ComponentFixture<LastViewedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastViewedProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastViewedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
