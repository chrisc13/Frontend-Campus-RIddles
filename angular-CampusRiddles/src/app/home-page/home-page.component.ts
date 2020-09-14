import { Component, OnInit, OnDestroy } from '@angular/core';
import { RiddleService } from '../services/riddle.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Riddle } from '../_models/riddle.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  myRiddleSub: Subscription;
  newestThreeRiddles: Riddle[] = [];
  isLoggedIn: boolean;

  constructor(
    private riddleService: RiddleService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.getTopRiddles();
  }
  getTopRiddles() {
    this.myRiddleSub = this.riddleService
      .getNewestRiddles()
      .subscribe((result) => {
        if (result.response == 'FAILURE') {
          console.log('http errors');
        } else {
          this.newestThreeRiddles = result.riddles;
        }
      });
  }

  clickViewRiddles() {
    if (this.isLoggedIn) {
      this.router.navigateByUrl('explore');
    } else {
      this.router.navigateByUrl('auth');
    }
  }

  clickViewRiddleWithId(riddleid: number) {
    if (this.isLoggedIn) {
      this.router.navigate(['/explore', riddleid]);
    } else {
      this.router.navigateByUrl('auth');
    }
  }
  ngOnDestroy() {
    if (this.myRiddleSub) {
      this.myRiddleSub.unsubscribe();
    }
  }
}
