import { TestBed } from '@angular/core/testing';

import { HarborService } from './harbor.service';

describe('HarborService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HarborService = TestBed.get(HarborService);
    expect(service).toBeTruthy();
  });
});
