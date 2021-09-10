import { TestBed } from '@angular/core/testing';

import { CrosswordService } from './crossword.service';

describe('CrosswordService', () => {
  let service: CrosswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrosswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
