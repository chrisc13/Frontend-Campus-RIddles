import { Component, OnInit } from '@angular/core';
import { Riddle } from '../_models/riddle.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { RiddleService } from '../services/riddle.service';
import { SubscribeRiddleService } from '../services/subscribe-riddle.service';

@Component({
  selector: 'app-riddle-detail-page',
  templateUrl: './riddle-detail-page.component.html',
  styleUrls: ['./riddle-detail-page.component.css'],
})
export class RiddleDetailPageComponent implements OnInit {
  riddleId: number;
  loadedRiddles: Riddle[] = [];
  postResponse: string;
  showPostSuccess: boolean = false;
  forumSub: Subscription;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private riddlesService: RiddleService,
    private subscribeRiddlesService: SubscribeRiddleService
  ) {}

  ngOnInit(): void {
    console.log('in riddle');
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.riddleId = id;

      this.forumSub = this.riddlesService
        .getRiddle(this.riddleId)
        .subscribe((result) => (this.loadedRiddles = result.riddles));
    });
  }

  attemptRiddle(riddleid: number) {
    console.log('got to attmept');
    this.subscribeRiddlesService
      .subscribeToRiddle(riddleid, 17)
      .subscribe(
        (result) => (
          console.log(result),
          this.router.navigate(['/attempt-riddle', riddleid])
        )
      );
  }
}
