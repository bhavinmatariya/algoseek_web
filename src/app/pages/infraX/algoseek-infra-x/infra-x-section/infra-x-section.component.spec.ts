import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraXSectionComponent } from './infra-x-section.component';

describe('InfraXSectionComponent', () => {
  let component: InfraXSectionComponent;
  let fixture: ComponentFixture<InfraXSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfraXSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfraXSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
