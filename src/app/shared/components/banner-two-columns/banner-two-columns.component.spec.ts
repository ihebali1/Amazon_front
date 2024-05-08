import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerTwoColumnsComponent } from './banner-two-columns.component';

describe('BannerTwoColumnsComponent', () => {
  let component: BannerTwoColumnsComponent;
  let fixture: ComponentFixture<BannerTwoColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerTwoColumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerTwoColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
