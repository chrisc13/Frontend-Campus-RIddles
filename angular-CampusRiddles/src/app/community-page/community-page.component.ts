import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommunityForumService } from '../services/community-forum.service';
import { CommunityForum } from '../_models/community-forum.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-community-page',
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.css'],
})
export class CommunityPageComponent implements OnInit, OnDestroy {
  constructor(
    private communityForumService: CommunityForumService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  myCommunitySub: Subscription;
  loadedCommunityForums: CommunityForum[] = [];

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
  ngOnDestroy() {
    if (this.myCommunitySub) {
      this.myCommunitySub.unsubscribe();
    }
  }
}
