import { TestBed } from '@angular/core/testing';

import { HarborService } from './harbor.service';
import { HttpClient } from '@angular/common/http';

describe('HarborService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:[{provide:HttpClient}]
  }));

  it('should be created', () => {
    // const service: HarborService = TestBed.get(HarborService);
    // expect(service).toBeTruthy();
  });
});
