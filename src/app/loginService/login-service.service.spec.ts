import { TestBed, inject } from '@angular/core/testing';

import { LoginServiceService } from './login-service.service';

describe('LoginServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginServiceService]
    });
  });

  it('should ...', inject([LoginServiceService], (service: LoginServiceService) => {
    expect(service).toBeTruthy();
  }));
});
