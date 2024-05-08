import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandPromotionProductsComponent } from './brand-promotion-products.component';

describe('BrandPromotionProductsComponent', () => {
  let component: BrandPromotionProductsComponent;
  let fixture: ComponentFixture<BrandPromotionProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandPromotionProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandPromotionProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
