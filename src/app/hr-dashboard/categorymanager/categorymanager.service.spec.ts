import { TestBed, inject } from '@angular/core/testing';

import { CategorymanagerService } from './categorymanager.service';

describe('CategorymanagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategorymanagerService]
    });
  });

  it('should ...', inject([CategorymanagerService], (service: CategorymanagerService) => {
    expect(service).toBeTruthy();
  }));
});
