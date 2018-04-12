import { TestBed, inject } from '@angular/core/testing';

import { GeoDistanceService } from './geo-distance.service';

describe('GeoDistanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeoDistanceService]
    });
  });

  it('should be created', inject([GeoDistanceService], (service: GeoDistanceService) => {
    expect(service).toBeTruthy();
  }));
});
