import { TestBed } from '@angular/core/testing';

import { FotosService } from './fotos.service';

describe('ServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FotosService = TestBed.get(FotosService);
    expect(service).toBeTruthy();
  });
});
