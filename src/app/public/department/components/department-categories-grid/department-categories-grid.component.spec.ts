import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentCategoriesGridComponent } from './department-categories-grid.component';

describe('DepartmentCategoriesGridComponent', () => {
  let component: DepartmentCategoriesGridComponent;
  let fixture: ComponentFixture<DepartmentCategoriesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentCategoriesGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentCategoriesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
