import { TestBed } from '@angular/core/testing';

import { PrecalificadorService } from './precalificador.service';

describe('PrecalificadorService', () => {
  let service: PrecalificadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrecalificadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
