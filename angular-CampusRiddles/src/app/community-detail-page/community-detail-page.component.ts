import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  ActivatedRoute,
  ParamMap,
  Router,
  NavigationEnd,
} from '@angular/router';
import { CommunityForumService } from '../services/community-forum.service';
import { Comment } from '../_models/comment.model';
import { CommunityForum } from '../_models/community-forum.model';
import { NgForm } from '@angular/forms';
import { CommentService } from '../services/comment.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-community-detail-page',
  templateUrl: './community-detail-page.component.html',
  styleUrls: ['./community-detail-page.component.css'],
})
export class CommunityDetailPageComponent implements OnInit, OnDestroy {
  forumId: number;
  loadedCommunityForums: CommunityForum[] = [];
  loadedComments: Comment[] = [];
  postResponse: string;
  showPostSuccess: boolean = false;
  forumSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private communityForumService: CommunityForumService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.forumId = id;
      console.log(this.forumId);

      this.forumSub = this.communityForumService
        .getCommunityForum(this.forumId)
        .subscribe(
          (result) => (this.loadedCommunityForums = result.communityForums)
        );
    });

    this.getForumComments();
  }

  getForumComments() {
    this.forumSub = this.commentService
      .getComments(this.forumId)
      .subscribe((result) => (this.loadedComments = result.comments));
    console.log('again');
  }

  clickedAddComment(commentForm: NgForm) {
    const newComment: Comment = new Comment(
      null,
      commentForm.controls['text'].value,
      'hunterExample',
      this.forumId
    );

    this.forumSub = this.commentService
      .postComment(newComment)
      .subscribe(
        (result) => (
          (this.postResponse = result.response), (this.showPostSuccess = true)
        )
      );
    commentForm.resetForm();

    //remove this IF proxy gets issues
    window.location.reload();
  }

  ngOnDestroy() {
    if (this.forumSub) {
      this.forumSub.unsubscribe();
    }
  }
}
