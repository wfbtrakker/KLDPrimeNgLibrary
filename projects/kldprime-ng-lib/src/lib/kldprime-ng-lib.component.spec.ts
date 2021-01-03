import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KLDPrimeNgLibComponent } from './kldprime-ng-lib.component';

describe('KLDPrimeNgLibComponent', () => {
  let component: KLDPrimeNgLibComponent;
  let fixture: ComponentFixture<KLDPrimeNgLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KLDPrimeNgLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KLDPrimeNgLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
