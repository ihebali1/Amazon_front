import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDepartmentBrandsComponent } from './best-department-brands.component';

describe('BestDepartmentBrandsComponent', () => {
  let component: BestDepartmentBrandsComponent;
  let fixture: ComponentFixture<BestDepartmentBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestDepartmentBrandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestDepartmentBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
