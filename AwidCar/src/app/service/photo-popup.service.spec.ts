import { TestBed } from '@angular/core/testing';

import { PhotoPopupService } from './photo-popup.service';

describe('PhotoPopupService', () => {
  let service: PhotoPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
