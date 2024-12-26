import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoseekHomeComponent } from './algoseek-home.component';

describe('AlgoseekHomeComponent', () => {
  let component: AlgoseekHomeComponent;
  let fixture: ComponentFixture<AlgoseekHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgoseekHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoseekHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
