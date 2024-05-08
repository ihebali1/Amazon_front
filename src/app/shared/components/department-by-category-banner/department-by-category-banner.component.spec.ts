import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentByCategoryBannerComponent } from './department-by-category-banner.component';

describe('DepartmentByCategoryBannerComponent', () => {
  let component: DepartmentByCategoryBannerComponent;
  let fixture: ComponentFixture<DepartmentByCategoryBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentByCategoryBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentByCategoryBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
