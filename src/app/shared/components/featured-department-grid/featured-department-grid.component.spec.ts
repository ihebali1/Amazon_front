import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedDepartmentGridComponent } from './featured-department-grid.component';

describe('FeaturedDepartmentGridComponent', () => {
  let component: FeaturedDepartmentGridComponent;
  let fixture: ComponentFixture<FeaturedDepartmentGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedDepartmentGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedDepartmentGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
