import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentFeaturedCategoriesComponent } from './department-featured-categories.component';

describe('DepartmentFeaturedCategoriesComponent', () => {
  let component: DepartmentFeaturedCategoriesComponent;
  let fixture: ComponentFixture<DepartmentFeaturedCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentFeaturedCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentFeaturedCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
