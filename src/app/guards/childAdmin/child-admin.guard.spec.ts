import { TestBed } from '@angular/core/testing';

import { ChildAdminGuard } from './child-admin.guard';

describe('ChildAdminGuard', () => {
  let guard: ChildAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChildAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
