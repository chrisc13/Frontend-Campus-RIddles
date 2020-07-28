import { TestBed } from '@angular/core/testing';

import { PostRiddleService } from './post-riddle.service';

describe('PostRiddleService', () => {
  let service: PostRiddleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostRiddleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
