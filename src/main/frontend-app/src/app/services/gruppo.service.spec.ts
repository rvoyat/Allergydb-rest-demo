import { TestBed, inject } from '@angular/core/testing';

import { GruppoService } from './gruppo.service';

describe('GruppoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GruppoService]
    });
  });

  it('should be created', inject([GruppoService], (service: GruppoService) => {
    expect(service).toBeTruthy();
  }));
});
