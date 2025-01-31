import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateCloudComponent } from './private-cloud.component';

describe('PrivateCloudComponent', () => {
  let component: PrivateCloudComponent;
  let fixture: ComponentFixture<PrivateCloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateCloudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
