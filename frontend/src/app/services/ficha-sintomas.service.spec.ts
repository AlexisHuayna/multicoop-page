import { TestBed } from '@angular/core/testing';

import { FichaSintomasService } from './ficha-sintomas.service';

describe('FichaSintomasService', () => {
  let service: FichaSintomasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FichaSintomasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
