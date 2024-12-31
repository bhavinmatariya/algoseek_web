import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraXIntroductionComponent } from './infra-x-introduction.component';

describe('InfraXIntroductionComponent', () => {
  let component: InfraXIntroductionComponent;
  let fixture: ComponentFixture<InfraXIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfraXIntroductionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfraXIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
