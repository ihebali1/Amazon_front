import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentTopChildCategoriesComponent } from './department-top-child-categories.component';

describe('DepartmentTopChildCategoriesComponent', () => {
  let component: DepartmentTopChildCategoriesComponent;
  let fixture: ComponentFixture<DepartmentTopChildCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentTopChildCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentTopChildCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
