import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoseekPartnersComponent } from './algoseek-partners.component';

describe('AlgoseekPartnersComponent', () => {
  let component: AlgoseekPartnersComponent;
  let fixture: ComponentFixture<AlgoseekPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgoseekPartnersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoseekPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
