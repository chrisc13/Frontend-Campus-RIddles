import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommunityForumService } from '../services/community-forum.service';
import { CommunityForum } from '../_models/community-forum.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Vote } from '../_models/vote.model';
import { VoteService } from '../services/vote.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-community-page',
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.css'],
})
export class CommunityPageComponent implements OnInit, OnDestroy {
  searchTerm: string;
  username: string;
  order: string = 'Newest';

  constructor(
    private communityForumService: CommunityForumService,
    private voteService: VoteService,
    private router: Router,
    private route: ActivatedRoute,
    private localStorage: LocalStorageService
  ) {}

  myCommunitySub: Subscription;
  loadedCommunityForums: CommunityForum[] = [];
  loadedComments: Comment[] = [];
  isLiked: boolean = false;
  isDisliked: boolean = false;

  ngOnInit(): void {
    this.username = this.localStorage.retrieve('username');
    this.getForums();
  }

  sort(newOrder: string) {
    this.order = newOrder;

    this.getForums();
  }

  getForums() {
    this.myCommunitySub = this.communityForumService
      .getCommunityForums(this.order)
      .subscribe(
        (result) => (this.loadedCommunityForums = result.communityForums)
      );
  }

  clickedCreateTopic() {
    this.router.navigate(['submit'], { relativeTo: this.route });
  }
  clickDetail(forum: CommunityForum) {
    console.log(forum.title);
    this.router.navigate(['/community', forum.id]);
  }
  clickLike(forum: CommunityForum) {
    const newVote: Vote = new Vote(null, 1, this.username, forum.id);

    this.myCommunitySub = this.voteService
      .postVote(newVote)
      .subscribe(
        (result) => ((this.isLiked = true), (this.isDisliked = false))
      );
    window.location.reload();
  }
  clickDislike(forum: CommunityForum) {
    const newVote: Vote = new Vote(null, 0, this.username, forum.id);

    this.myCommunitySub = this.voteService
      .postVote(newVote)
      .subscribe(
        (result) => ((this.isDisliked = true), (this.isLiked = false))
      );
    window.location.reload();
  }

  ngOnDestroy() {
    if (this.myCommunitySub) {
      this.myCommunitySub.unsubscribe();
    }
  }
}
