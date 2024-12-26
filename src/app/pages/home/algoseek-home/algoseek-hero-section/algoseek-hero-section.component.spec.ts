import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoseekHeroSectionComponent } from './algoseek-hero-section.component';

describe('AlgoseekHeroSectionComponent', () => {
  let component: AlgoseekHeroSectionComponent;
  let fixture: ComponentFixture<AlgoseekHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgoseekHeroSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoseekHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
