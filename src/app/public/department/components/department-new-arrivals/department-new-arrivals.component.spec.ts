import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentNewArrivalsComponent } from './department-new-arrivals.component';

describe('DepartmentNewArrivalsComponent', () => {
  let component: DepartmentNewArrivalsComponent;
  let fixture: ComponentFixture<DepartmentNewArrivalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentNewArrivalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentNewArrivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
