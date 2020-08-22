import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommunityForumService } from '../services/community-forum.service';
import { CommunityForum } from '../_models/community-forum.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Vote } from '../_models/vote.model';
import { VoteService } from '../services/vote.service';

@Component({
  selector: 'app-community-page',
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.css'],
})
export class CommunityPageComponent implements OnInit, OnDestroy {
  searchTerm: string;

  constructor(
    private communityForumService: CommunityForumService,
    private voteService: VoteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  myCommunitySub: Subscription;
  loadedCommunityForums: CommunityForum[] = [];
  loadedComments: Comment[] = [];
  isLiked: boolean = false;
  isDisliked: boolean = false;

  ngOnInit(): void {
    this.myCommunitySub = this.communityForumService
      .getCommunityForums()
      .subscribe(
        (result) => (this.loadedCommunityForums = result.communityForums)
      );
  }

  clickedCreateTopic() {
    console.log('going to create forum page');
    // console.log(createTopicForm.controls['topicContent'].value);
    //this.router.navigate(['submit'], { relativeTo: this.route });

    this.router.navigate(['submit'], { relativeTo: this.route });
  }
  clickDetail(forum: CommunityForum) {
    console.log(forum.title);
    this.router.navigate(['/community', forum.id]);
  }
  clickLike(forum: CommunityForum) {
    const newVote: Vote = new Vote(null, 1, 'hunterExample', forum.id);

    this.myCommunitySub = this.voteService
      .postVote(newVote)
      .subscribe((result) => (this.isLiked = true));
    window.location.reload();
  }
  clickDislike(forum: CommunityForum) {
    const newVote: Vote = new Vote(null, -1, 'hunterExample', forum.id);

    this.myCommunitySub = this.voteService
      .postVote(newVote)
      .subscribe((result) => (this.isDisliked = true));
    window.location.reload();
  }

  ngOnDestroy() {
    if (this.myCommunitySub) {
      this.myCommunitySub.unsubscribe();
    }
  }
}
