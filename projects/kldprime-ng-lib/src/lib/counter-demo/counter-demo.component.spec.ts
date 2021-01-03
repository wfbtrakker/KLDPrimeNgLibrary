import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CounterDemoComponent } from './counter-demo.component';

describe('CounterDemoComponent', () => {
  let component: CounterDemoComponent;
  let fixture: ComponentFixture<CounterDemoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
