import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentBoxComponent } from './department-box.component';

describe('DepartmentBoxComponent', () => {
  let component: DepartmentBoxComponent;
  let fixture: ComponentFixture<DepartmentBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
