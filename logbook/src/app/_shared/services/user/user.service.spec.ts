import { TestBed } from '@angular/core/testing';

import { userService } from 'src/app/_shared/services/user/user.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: userService = TestBed.get(userService);
    expect(service).toBeTruthy();
  });
});
