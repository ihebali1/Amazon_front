import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedDepartmentProductsComponent } from './featured-department-products.component';

describe('FeaturedDepartmentProductsComponent', () => {
  let component: FeaturedDepartmentProductsComponent;
  let fixture: ComponentFixture<FeaturedDepartmentProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedDepartmentProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedDepartmentProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
