import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAlgoseekComponent } from './contact-algoseek.component';

describe('ContactAlgoseekComponent', () => {
  let component: ContactAlgoseekComponent;
  let fixture: ComponentFixture<ContactAlgoseekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactAlgoseekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactAlgoseekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
