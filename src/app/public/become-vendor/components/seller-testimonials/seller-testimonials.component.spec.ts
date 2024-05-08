import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerTestimonialsComponent } from './seller-testimonials.component';

describe('SellerTestimonialsComponent', () => {
  let component: SellerTestimonialsComponent;
  let fixture: ComponentFixture<SellerTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerTestimonialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
