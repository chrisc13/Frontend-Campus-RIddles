import { Component, OnInit } from '@angular/core';
import { SubscribeRiddleService } from '../services/subscribe-riddle.service';
import { Riddle } from '../_models/riddle.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-my-riddles-page',
  templateUrl: './my-riddles-page.component.html',
  styleUrls: ['./my-riddles-page.component.css'],
})
export class MyRiddlesPageComponent implements OnInit {
  loadedSubscribedRiddles: Riddle[] = [];
  searchTerm: string;
  hunter_id: number;

  constructor(
    private subscribeRiddlesService: SubscribeRiddleService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    //this.hunter_id = this.authService.getUsername()

    this.subscribeRiddlesService
      .getSubscribedRiddles(17)
      .subscribe((result) => (this.loadedSubscribedRiddles = result.riddles));
  }
}
