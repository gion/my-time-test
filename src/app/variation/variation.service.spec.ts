import { TestBed, inject } from '@angular/core/testing';

import { VariationService } from './variation.service';

describe('VariantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VariationService]
    });
  });

  it('should be created', inject([VariationService], (service: VariationService) => {
    expect(service).toBeTruthy();
  }));
});
