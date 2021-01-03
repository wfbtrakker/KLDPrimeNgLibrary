import { TestBed } from '@angular/core/testing';

import { KLDPrimeNgLibService } from './kldprime-ng-lib.service';

describe('KLDPrimeNgLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KLDPrimeNgLibService = TestBed.get(KLDPrimeNgLibService);
    expect(service).toBeTruthy();
  });
});
