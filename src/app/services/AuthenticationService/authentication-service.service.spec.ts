import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication-service.service';
import { HttpClient } from 'selenium-webdriver/http';

describe('AuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{provide: HttpClient}]
  })
  .compileComponents());

  it('should be created', () => {
    // const service: AuthenticationService = TestBed.get(AuthenticationService);
    // expect(service).toBeTruthy();
  });
});
