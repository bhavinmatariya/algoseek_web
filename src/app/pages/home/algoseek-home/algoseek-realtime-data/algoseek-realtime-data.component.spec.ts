import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoseekRealtimeDataComponent } from './algoseek-realtime-data.component';

describe('AlgoseekRealtimeDataComponent', () => {
  let component: AlgoseekRealtimeDataComponent;
  let fixture: ComponentFixture<AlgoseekRealtimeDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgoseekRealtimeDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoseekRealtimeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
