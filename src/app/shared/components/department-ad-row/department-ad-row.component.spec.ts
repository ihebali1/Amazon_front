import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentAdRowComponent } from './department-ad-row.component';

describe('DepartmentAdRowComponent', () => {
  let component: DepartmentAdRowComponent;
  let fixture: ComponentFixture<DepartmentAdRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentAdRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentAdRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
