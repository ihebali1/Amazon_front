import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotNewProductsComponent } from './hot-new-products.component';

describe('HotNewProductsComponent', () => {
  let component: HotNewProductsComponent;
  let fixture: ComponentFixture<HotNewProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotNewProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotNewProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
