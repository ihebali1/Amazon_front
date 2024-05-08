import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListDetailsComponent } from './wish-list-details.component';

describe('WishListDetailsComponent', () => {
  let component: WishListDetailsComponent;
  let fixture: ComponentFixture<WishListDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishListDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
