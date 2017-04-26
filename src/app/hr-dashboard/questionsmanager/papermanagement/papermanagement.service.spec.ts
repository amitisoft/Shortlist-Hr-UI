import { TestBed, inject } from '@angular/core/testing';

import { PapermanagementService } from './papermanagement.service';

describe('PapermanagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PapermanagementService]
    });
  });

  it('should ...', inject([PapermanagementService], (service: PapermanagementService) => {
    expect(service).toBeTruthy();
  }));
});
