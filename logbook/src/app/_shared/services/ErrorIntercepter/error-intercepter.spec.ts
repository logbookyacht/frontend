import { ErrorIntercepter } from './error-intercepter';
import {TestBed} from '@angular/core/testing';

describe('ErrorIntercepter', () => {
  it('should create an instance', () => {
    const service: ErrorIntercepter = TestBed.get(ErrorIntercepter);
    expect(service).toBeTruthy();
  });
});
