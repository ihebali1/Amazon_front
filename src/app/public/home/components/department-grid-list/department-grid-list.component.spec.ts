import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentGridListComponent } from './department-grid-list.component';

describe('DepartmentGridListComponent', () => {
  let component: DepartmentGridListComponent;
  let fixture: ComponentFixture<DepartmentGridListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentGridListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
