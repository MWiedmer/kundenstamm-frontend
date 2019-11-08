import { TestBed } from '@angular/core/testing';

import { KundenstammApiService } from './kundenstamm-api.service';

describe('KundenstammApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KundenstammApiService = TestBed.get(KundenstammApiService);
    expect(service).toBeTruthy();
  });
});
