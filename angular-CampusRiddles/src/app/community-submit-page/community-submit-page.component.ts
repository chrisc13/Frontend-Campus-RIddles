import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { CommunityForumService } from '../services/community-forum.service';
import { Router } from '@angular/router';
import { CommunityForum } from '../_models/community-forum.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-community-submit-page',
  templateUrl: './community-submit-page.component.html',
  styleUrls: ['./community-submit-page.component.css'],
})
export class CommunitySubmitPageComponent implements OnInit, OnDestroy {
  postResponse: string;
  showPostSuccess: boolean = false;
  forumSub: Subscription;

  constructor(
    private communityForumService: CommunityForumService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  clickedCreateForum(createForum: NgForm) {
    createForum.reset();
    const newForum: CommunityForum = new CommunityForum(
      null,
      createForum.controls['title'].value,
      createForum.controls['content'].value,
      'https://unsplash.com/photos/_TuI8tZHlk4'
    );

    this.forumSub = this.communityForumService
      .postCommunityForum(newForum)
      .subscribe(
        (result) => (
          (this.postResponse = result.response), (this.showPostSuccess = true)
        )
      );

    if (this.postResponse == 'SUCCESS') {
      this.showPostSuccess = true;
      console.log('changed to true');
    }
  }

  ngOnDestroy() {
    if (this.forumSub) {
      this.forumSub.unsubscribe();
    }
  }
}
