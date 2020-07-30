import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { from, observable, throwError } from 'rxjs';
import { Riddle } from '../_models/riddle.model';
import { RiddleService } from '../services/riddle.service';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.css'],
  template: ` <button (click)="onClickMe()">Click me!</button>
    {{ clickMessage }}`,
})
export class ExplorePageComponent implements OnInit {
  totalAngularPackages;
  loadedRiddles: Riddle[] = [];

  constructor(private riddleService: RiddleService) {}

  ngOnInit() {
    // Simple GET request with response type <any>
    //this.service.getAll();
    this.riddleService
      .getRiddles()
      .subscribe((riddles) => (this.loadedRiddles = riddles));
  }

  attemptRiddle() {
    console.log('attempting riddle');
  }
}
