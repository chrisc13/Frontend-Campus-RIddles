import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { from, observable, throwError } from 'rxjs';
import { Riddle } from '../_models/riddle.model';
import { RiddleService } from '../services/riddle.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

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
  newestThreeRiddles: Riddle[] = [];
  loadedRiddles: Riddle[] = [];
  response: String;
  searchTerm: string;
  isLoggedIn: boolean = false;
  order: string = 'Newest';

  constructor(
    private riddleService: RiddleService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // Simple GET request with response type <any>
    //this.service.getAll();

    this.getRiddles();

    // this.riddleService
    //   .getNewestRiddles()
    //   .subscribe((result) => (this.newestThreeRiddles = result.riddles));

    this.isLoggedIn = this.authService.isLoggedIn();
  }

  test() {
    console.log('selected SELECT');
  }

  sort(newOrder: string) {
    this.order = newOrder;

    this.getRiddles();
  }

  getRiddles() {
    this.myRiddleSub = this.riddleService
      .getRiddles(this.order)
      .subscribe((result) => {
        if (result.response == 'FAILURE') {
          console.log('http errors');
        } else {
          this.loadedRiddles = result.riddles;
        }
      });
  }

  createRiddle() {
    this.router.navigateByUrl('/create-riddle-page');
  }

  clickDetail(riddle: Riddle) {
    this.router.navigate(['/explore', riddle.id]);
  }

  auth() {
    this.router.navigateByUrl('/auth');
  }

  ngOnDestroy() {
    if (this.myRiddleSub) {
      this.myRiddleSub.unsubscribe();
    }
  }
}
