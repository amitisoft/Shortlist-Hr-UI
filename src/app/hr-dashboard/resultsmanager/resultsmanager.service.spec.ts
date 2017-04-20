import { TestBed, inject } from '@angular/core/testing';

import { ResultsmanagerService } from './resultsmanager.service';

describe('ResultsmanagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultsmanagerService]
    });
  });

  it('should ...', inject([ResultsmanagerService], (service: ResultsmanagerService) => {
    expect(service).toBeTruthy();
  }));
});
