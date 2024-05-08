import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandHotProductsComponent } from './brand-hot-products.component';

describe('BrandHotProductsComponent', () => {
  let component: BrandHotProductsComponent;
  let fixture: ComponentFixture<BrandHotProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandHotProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandHotProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
