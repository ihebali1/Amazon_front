import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToWishListComponent } from './add-to-wish-list.component';

describe('AddToWishListComponent', () => {
  let component: AddToWishListComponent;
  let fixture: ComponentFixture<AddToWishListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToWishListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
