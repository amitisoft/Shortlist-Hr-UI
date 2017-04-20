import { TestBed, inject } from '@angular/core/testing';

import { QuestionmanagerService } from './questionmanager.service';

describe('QuestionmanagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionmanagerService]
    });
  });

  it('should ...', inject([QuestionmanagerService], (service: QuestionmanagerService) => {
    expect(service).toBeTruthy();
  }));
});
