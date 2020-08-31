import { TestBed } from '@angular/core/testing';

import { CommunityForumService } from './community-forum.service';

describe('CommunityForumService', () => {
  let service: CommunityForumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunityForumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
