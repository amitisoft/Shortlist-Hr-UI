import { TestBed, inject } from '@angular/core/testing';

import { TestmanagerService } from './testmanager.service';

describe('TestmanagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestmanagerService]
    });
  });

  it('should ...', inject([TestmanagerService], (service: TestmanagerService) => {
    expect(service).toBeTruthy();
  }));
});
