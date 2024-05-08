import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostSellingBrandsDepartmentComponent } from './most-selling-brands-department.component';

describe('MostSellingBrandsDepartmentComponent', () => {
  let component: MostSellingBrandsDepartmentComponent;
  let fixture: ComponentFixture<MostSellingBrandsDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostSellingBrandsDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostSellingBrandsDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
