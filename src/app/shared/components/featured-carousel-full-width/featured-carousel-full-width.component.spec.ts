import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCarouselFullWidthComponent } from './featured-carousel-full-width.component';

describe('FeaturedCarouselFullWidthComponent', () => {
  let component: FeaturedCarouselFullWidthComponent;
  let fixture: ComponentFixture<FeaturedCarouselFullWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedCarouselFullWidthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedCarouselFullWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
