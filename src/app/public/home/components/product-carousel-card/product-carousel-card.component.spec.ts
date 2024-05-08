import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCarouselCardComponent } from './product-carousel-card.component';

describe('ProductCarouselCardComponent', () => {
  let component: ProductCarouselCardComponent;
  let fixture: ComponentFixture<ProductCarouselCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCarouselCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCarouselCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
