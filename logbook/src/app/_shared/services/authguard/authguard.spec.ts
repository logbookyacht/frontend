import { AuthGuard } from 'src/app/_shared/services/authguard/authguard';
import {TestBed} from '@angular/core/testing'

describe('Authguard', () => {
  it('should create an instance', () => {
    const service: AuthGuard = TestBed.get(AuthGuard);
    expect(service).toBeTruthy();
  });
});
