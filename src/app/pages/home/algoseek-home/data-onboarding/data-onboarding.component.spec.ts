import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataOnboardingComponent } from './data-onboarding.component';

describe('DataOnboardingComponent', () => {
  let component: DataOnboardingComponent;
  let fixture: ComponentFixture<DataOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataOnboardingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
