import { TestBed, inject } from '@angular/core/testing';

import { LinguaService } from './lingua.service';

describe('LinguaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinguaService]
    });
  });

  it('should be created', inject([LinguaService], (service: LinguaService) => {
    expect(service).toBeTruthy();
  }));
});
