import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, Subscription } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Riddle } from '../_models/riddle.model';
import { RiddleService } from '../services/riddle.service';

import {
  Form,
  NgForm,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
//import { Injectable } from '@angular/core';

@Component({
  selector: 'app-create-riddle-page',
  templateUrl: './create-riddle-page.component.html',
  styleUrls: ['./create-riddle-page.component.css'],
})
export class CreateRiddlePageComponent implements OnInit, OnDestroy {
  //newRiddle: Riddle;
  postResponse: string;
  showPostSuccess: boolean = false;
  forumSub: Subscription;

  createRiddleForm: NgForm;

  constructor(private riddleService: RiddleService) {}

  ngOnInit(): void {}

  clickedCreateRiddle(createRiddleForm: NgForm) {
    //get this elsewhere
    var riddler_id = 2;

    const newRiddle: Riddle = new Riddle(
      null,
      createRiddleForm.controls['riddleName'].value,
      createRiddleForm.controls['difficulty'].value,
      createRiddleForm.controls['riddlePrize'].value,
      'Riddler name from angular session',
      createRiddleForm.controls['levels'].value,
      createRiddleForm.controls['riddleDescription'].value,
      createRiddleForm.controls['riddleLocation'].value,
      riddler_id
    );

    //this.riddleService.createRiddle('/Riddles', newRiddle);

    this.forumSub = this.riddleService
      .postRiddle(newRiddle)
      .subscribe(
        (result) => (
          (this.postResponse = result.response), (this.showPostSuccess = true)
        )
      );
    createRiddleForm.reset();
  }

  ngOnDestroy() {
    if (this.forumSub) {
      this.forumSub.unsubscribe();
    }
  }

  // public createRiddle() {
  //   let response = this.service.newRiddle('/Riddles', this.newRiddle);
  //   response.subscribe((data) => (this.message = data));
  // }
}
