import { TestBed, inject } from '@angular/core/testing';

import { RuoloService } from './ruolo.service';

describe('RuoloService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RuoloService]
    });
  });

  it('should be created', inject([RuoloService], (service: RuoloService) => {
    expect(service).toBeTruthy();
  }));
});
