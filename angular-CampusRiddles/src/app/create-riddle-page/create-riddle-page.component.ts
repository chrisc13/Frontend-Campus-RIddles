import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
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
export class CreateRiddlePageComponent implements OnInit {
  //newRiddle: Riddle;
  message: any;
  postSuccess: boolean = false;

  createRiddleForm: NgForm;

  constructor(private riddleService: RiddleService) {}

  ngOnInit(): void {}

  clickedCreateRiddle(createRiddleForm: NgForm) {
    //get this elsewhere
    const newRiddle: Riddle = new Riddle(
      createRiddleForm.controls['riddleName'].value,
      createRiddleForm.controls['difficulty'].value,
      createRiddleForm.controls['riddlePrize'].value,
      'Riddler name from angular session',
      createRiddleForm.controls['levels'].value,
      createRiddleForm.controls['riddleDescription'].value
    );

    //this.riddleService.createRiddle('/Riddles', newRiddle);

    this.postSuccess = this.riddleService.postRiddle(newRiddle);
    createRiddleForm.reset();
  }

  // public createRiddle() {
  //   let response = this.service.newRiddle('/Riddles', this.newRiddle);
  //   response.subscribe((data) => (this.message = data));
  // }
}
