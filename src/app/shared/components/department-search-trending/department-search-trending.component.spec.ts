import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentSearchTrendingComponent } from './department-search-trending.component';

describe('DepartmentSearchTrendingComponent', () => {
  let component: DepartmentSearchTrendingComponent;
  let fixture: ComponentFixture<DepartmentSearchTrendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentSearchTrendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentSearchTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
