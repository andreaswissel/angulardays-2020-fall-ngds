import { TestBed } from '@angular/core/testing';

import { MockLoginService } from './mock-login.service';

describe('MockLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockLoginService = TestBed.get(MockLoginService);
    expect(service).toBeTruthy();
  });
});
