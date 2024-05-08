import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardWideComponent } from './product-card-wide.component';

describe('ProductCardWideComponent', () => {
  let component: ProductCardWideComponent;
  let fixture: ComponentFixture<ProductCardWideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardWideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardWideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
