import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreProductCardComponent } from './store-product-card.component';

describe('StoreProductCardComponent', () => {
  let component: StoreProductCardComponent;
  let fixture: ComponentFixture<StoreProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
