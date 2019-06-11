import { AuthGuard } from './auth.guard';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

describe('Auth.Guard', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{provide: AuthGuard},{provide:Router}]

  })
  .compileComponents());
  it('should create an instance', () => {
    // const service: AuthGuard = TestBed.get(AuthGuard);
    // expect(service).toBeTruthy();
  });
});