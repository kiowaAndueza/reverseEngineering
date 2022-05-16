import { TestBed } from '@angular/core/testing';

import { ChildUserGuard } from './childUser.guard';

describe('ChildGuard', () => {
  let guard: ChildUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChildUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
