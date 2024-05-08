import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentFeaturedVerticalBannerComponent } from './department-featured-vertical-banner.component';

describe('DepartmentFeaturedVerticalBannerComponent', () => {
  let component: DepartmentFeaturedVerticalBannerComponent;
  let fixture: ComponentFixture<DepartmentFeaturedVerticalBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentFeaturedVerticalBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentFeaturedVerticalBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
