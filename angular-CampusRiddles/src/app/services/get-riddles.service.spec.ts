import { TestBed } from '@angular/core/testing';

import { GetRiddlesService } from './get-riddles.service';

describe('GetRiddlesService', () => {
  let service: GetRiddlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRiddlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
