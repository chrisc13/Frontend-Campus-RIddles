import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CommunityForumService } from '../services/community-forum.service';
import { CommunityForum } from '../_models/community-forum.model';

@Component({
  selector: 'app-community-detail-page',
  templateUrl: './community-detail-page.component.html',
  styleUrls: ['./community-detail-page.component.css'],
})
export class CommunityDetailPageComponent implements OnInit {
  forumId: number;
  loadedCommunityForums: CommunityForum[] = [];

  constructor(
    private route: ActivatedRoute,
    private communityForumService: CommunityForumService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.forumId = id;
      console.log(this.forumId);

      this.communityForumService
        .getCommunityForum(this.forumId)
        .subscribe(
          (result) => (this.loadedCommunityForums = result.communityForums)
        );
    });
  }
}
