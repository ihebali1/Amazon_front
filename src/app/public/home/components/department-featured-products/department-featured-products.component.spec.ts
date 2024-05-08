import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentFeaturedProductsComponent } from './department-featured-products.component';

describe('DepartmentFeaturedProductsComponent', () => {
  let component: DepartmentFeaturedProductsComponent;
  let fixture: ComponentFixture<DepartmentFeaturedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentFeaturedProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentFeaturedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
