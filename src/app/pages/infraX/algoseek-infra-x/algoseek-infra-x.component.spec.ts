import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoseekInfraXComponent } from './algoseek-infra-x.component';

describe('AlgoseekInfraXComponent', () => {
  let component: AlgoseekInfraXComponent;
  let fixture: ComponentFixture<AlgoseekInfraXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgoseekInfraXComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoseekInfraXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
