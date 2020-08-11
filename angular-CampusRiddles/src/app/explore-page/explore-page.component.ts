import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { from, observable, throwError } from 'rxjs';
import { Riddle } from '../_models/riddle.model';
import { RiddleService } from '../services/riddle.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.css'],
  template: ` <button (click)="onClickMe()">Click me!</button>
    {{ clickMessage }}`,
})
export class ExplorePageComponent implements OnInit, OnDestroy {
  myRiddleSub: Subscription;
  totalAngularPackages;
  loadedRiddles: Riddle[] = [];
  response: String;

  constructor(private riddleService: RiddleService) {}

  ngOnInit() {
    // Simple GET request with response type <any>
    //this.service.getAll();
    this.myRiddleSub = this.riddleService
      .getRiddles()
      .subscribe(
        (result) => (
          (this.response = result.response), console.log(result.message)
        )
      );
  }

  attemptRiddle() {
    console.log('attempting riddle');
  }

  ngOnDestroy() {
    if (this.myRiddleSub) {
      this.myRiddleSub.unsubscribe();
    }
  }
}
