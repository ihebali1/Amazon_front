import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendBuyProductsComponent } from './recommend-buy-products.component';

describe('RecommendBuyProductsComponent', () => {
  let component: RecommendBuyProductsComponent;
  let fixture: ComponentFixture<RecommendBuyProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendBuyProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendBuyProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
