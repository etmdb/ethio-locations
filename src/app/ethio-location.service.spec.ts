import { TestBed, inject } from '@angular/core/testing';

import { EthioLocationService } from './ethio-location.service';

describe('EthioLocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EthioLocationService]
    });
  });

  it('should be created', inject([EthioLocationService], (service: EthioLocationService) => {
    expect(service).toBeTruthy();
  }));
});
