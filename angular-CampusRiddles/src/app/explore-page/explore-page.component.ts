import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { from, observable, throwError } from 'rxjs';
import { Riddle } from '../_models/riddle.model';
import { RiddleService } from '../services/riddle.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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
  searchTerm: string;

  constructor(private riddleService: RiddleService, private router: Router) {}

  ngOnInit() {
    // Simple GET request with response type <any>
    //this.service.getAll();
    this.myRiddleSub = this.riddleService
      .getRiddles()
      .subscribe(
        (result) => (
          (this.loadedRiddles = result.riddles),
          console.log(result.message),
          console.log(this.loadedRiddles)
        )
      );
  }

  clickDetail(riddle: Riddle) {
    this.router.navigate(['/explore', riddle.id]);
  }

  ngOnDestroy() {
    if (this.myRiddleSub) {
      this.myRiddleSub.unsubscribe();
    }
  }
}
