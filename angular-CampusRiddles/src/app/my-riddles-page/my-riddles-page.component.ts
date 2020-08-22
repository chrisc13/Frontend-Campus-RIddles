import { Component, OnInit } from '@angular/core';
import { SubscribeRiddleService } from '../services/subscribe-riddle.service';
import { Riddle } from '../_models/riddle.model';

@Component({
  selector: 'app-my-riddles-page',
  templateUrl: './my-riddles-page.component.html',
  styleUrls: ['./my-riddles-page.component.css'],
})
export class MyRiddlesPageComponent implements OnInit {
  loadedSubscribedRiddles: Riddle[] = [];

  constructor(private subscribeRiddlesService: SubscribeRiddleService) {}

  ngOnInit(): void {
    this.subscribeRiddlesService
      .getSubscribedRiddles(1)
      .subscribe((result) => (this.loadedSubscribedRiddles = result.riddles));
  }
}
