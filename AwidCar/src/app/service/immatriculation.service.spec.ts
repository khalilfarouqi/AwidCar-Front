import { TestBed } from '@angular/core/testing';

import { ImmatriculationService } from './immatriculation.service';

describe('ImmatriculationIService', () => {
  let service: ImmatriculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImmatriculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
