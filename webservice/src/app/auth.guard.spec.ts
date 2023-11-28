import { TestBed } from '@angular/core/testing';
import { CanActivate } from '@angular/router'; // Ajusta la importación

import { AuthGuard } from './auth.guard'; // Ajusta la importación

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
