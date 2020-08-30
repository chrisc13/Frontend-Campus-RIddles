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
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-community-detail-page',
  templateUrl: './community-detail-page.component.html',
  styleUrls: ['./community-detail-page.component.css'],
})
export class CommunityDetailPageComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private communityForumService: CommunityForumService,
    private commentService: CommentService,
    private localStorage: LocalStorageService
  ) {}
  username: string;
  forumId: number;
  loadedCommunityForums: CommunityForum[] = [];
  loadedComments: Comment[] = [];
  postResponse: string;
  showPostSuccess: boolean = false;
  showCommentDialog: boolean = false;
  forumSub: Subscription;
  ngOnInit(): void {
    //this.username = this.localStorage.retrieve('username');
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
  }

  clickCommentDialog() {
    this.showCommentDialog = true;
  }
  clickUpvote(forum: CommunityForum) {
    console.log('Liked ', forum.title);
  }

  clickedAddComment(commentForm: NgForm) {
    const newComment: Comment = new Comment(
      null,
      commentForm.controls['text'].value,
      'changeThis',
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
