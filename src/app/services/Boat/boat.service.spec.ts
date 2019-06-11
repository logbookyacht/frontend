import { TestBed } from '@angular/core/testing';

import { BoatService } from './boat.service';
import { HttpClient } from 'selenium-webdriver/http';

describe('BoatService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{provide: HttpClient}]
  }));

  it('should be created', () => {
    // const service: BoatService = TestBed.get(BoatService);
    // expect(service).toBeTruthy();
  });
});
