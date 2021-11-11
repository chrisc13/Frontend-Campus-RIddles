import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Riddle } from '../../_models/riddle.model'
import { SubscribeRiddleService } from '../../services/subscribe-riddle.service'
import {  AuthService } from '../../services/auth.service'


@Component({
  selector: 'app-myriddles',
  templateUrl: './myriddles.component.html',
  styleUrls: ['./myriddles.component.css']
})
export class MyriddlesComponent implements OnInit {

  loadedSubscribedRiddles: Riddle[] = [];
  searchTerm: string;
  hunter_id: number;

  constructor(
    private subscribeRiddlesService: SubscribeRiddleService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //this.hunter_id = this.authService.getUsername()

    this.subscribeRiddlesService
      .getSubscribedRiddles(17)
      .subscribe((result) => (this.loadedSubscribedRiddles = result.riddles));
  }

  attemptRiddle(riddleid: number) {
    this.router.navigate(['/attempt-riddle', riddleid]);
  }
}
