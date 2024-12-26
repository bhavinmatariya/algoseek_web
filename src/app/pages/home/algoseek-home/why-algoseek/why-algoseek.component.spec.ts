import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyAlgoseekComponent } from './why-algoseek.component';

describe('WhyAlgoseekComponent', () => {
  let component: WhyAlgoseekComponent;
  let fixture: ComponentFixture<WhyAlgoseekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyAlgoseekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyAlgoseekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
