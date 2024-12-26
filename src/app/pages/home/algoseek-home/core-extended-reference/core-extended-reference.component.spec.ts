import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreExtendedReferenceComponent } from './core-extended-reference.component';

describe('CoreExtendedReferenceComponent', () => {
  let component: CoreExtendedReferenceComponent;
  let fixture: ComponentFixture<CoreExtendedReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreExtendedReferenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreExtendedReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
