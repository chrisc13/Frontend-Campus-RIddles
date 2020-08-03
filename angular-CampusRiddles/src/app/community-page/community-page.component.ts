import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommunityForumService } from '../services/community-forum.service';
import { CommunityForum } from '../_models/community-forum.model';

@Component({
  selector: 'app-community-page',
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.css'],
})
export class CommunityPageComponent implements OnInit {
  constructor(private communityForumService: CommunityForumService) {}

  loadedCommunityForums: CommunityForum[] = [];

  ngOnInit(): void {
    this.communityForumService
      .getCommunityForums()
      .subscribe((forums) => (this.loadedCommunityForums = forums));
  }

  clickedCreateTopic(createTopicForm: NgForm) {
    console.log('with:');
    console.log(createTopicForm.controls['topicContent'].value);
  }
}
