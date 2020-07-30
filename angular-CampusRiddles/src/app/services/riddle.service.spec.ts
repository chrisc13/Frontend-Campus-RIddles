import { TestBed } from '@angular/core/testing';

import { RiddleService } from './riddle.service';

describe('RiddleService', () => {
  let service: RiddleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiddleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
