import { TestBed } from '@angular/core/testing';

import { LogService } from './log.service';
import { HttpClient } from '@angular/common/http';


describe('LogService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{provider: HttpClient}]
  }));

  it('should be created', () => {
    // const service: LogService = TestBed.get(LogService);
    // expect(service).toBeTruthy();
  });
});
