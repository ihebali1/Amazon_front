import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesHorizontalComponent } from './features-horizontal.component';

describe('FeaturesHorizontalComponent', () => {
  let component: FeaturesHorizontalComponent;
  let fixture: ComponentFixture<FeaturesHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesHorizontalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
