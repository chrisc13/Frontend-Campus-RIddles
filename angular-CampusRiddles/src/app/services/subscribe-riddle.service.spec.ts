import { TestBed } from '@angular/core/testing';

import { SubscribeRiddleService } from './subscribe-riddle.service';

describe('SubscribeRiddleService', () => {
  let service: SubscribeRiddleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscribeRiddleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
