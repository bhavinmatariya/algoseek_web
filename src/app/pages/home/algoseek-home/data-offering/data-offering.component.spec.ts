import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataOfferingComponent } from './data-offering.component';

describe('DataOfferingComponent', () => {
  let component: DataOfferingComponent;
  let fixture: ComponentFixture<DataOfferingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataOfferingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataOfferingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
