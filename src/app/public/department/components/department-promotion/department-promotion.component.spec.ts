import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentPromotionComponent } from './department-promotion.component';

describe('DepartmentPromotionComponent', () => {
  let component: DepartmentPromotionComponent;
  let fixture: ComponentFixture<DepartmentPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
