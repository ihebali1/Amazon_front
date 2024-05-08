import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFeaturedProductsBoxComponent } from './category-featured-products-box.component';

describe('CategoryFeaturedProductsBoxComponent', () => {
  let component: CategoryFeaturedProductsBoxComponent;
  let fixture: ComponentFixture<CategoryFeaturedProductsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryFeaturedProductsBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryFeaturedProductsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
