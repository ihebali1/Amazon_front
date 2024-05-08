import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardSquareComponent } from './product-card-square.component';

describe('ProductCardSquareComponent', () => {
  let component: ProductCardSquareComponent;
  let fixture: ComponentFixture<ProductCardSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardSquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
