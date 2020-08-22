import { TestBed } from '@angular/core/testing';

import { LevelRiddleService } from './level-riddle.service';

describe('LevelRiddleService', () => {
  let service: LevelRiddleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LevelRiddleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
