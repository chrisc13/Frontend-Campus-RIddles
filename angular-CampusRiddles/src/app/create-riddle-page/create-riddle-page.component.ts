import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Riddle } from '../_models/riddle.model';
import { GetRiddlesService } from '../services/get-riddles.service';
import { PostRiddleService } from '../services/post-riddle.service';
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
  newRiddle: Riddle;
  message: any;

  createRiddleForm: NgForm;

  constructor(private service: PostRiddleService) {}

  ngOnInit(): void {}

  clickedCreateRiddle(createRiddleForm: NgForm) {
    //form.reset()

    console.log('submitted new riddle with..');

    console.log(
      'Riddle Name: ' + createRiddleForm.controls['riddleName'].value
    );
    console.log('Levels: ' + createRiddleForm.controls['levels'].value);
    console.log('Campus: ' + createRiddleForm.controls['difficulty'].value);
    console.log('Prize: ' + createRiddleForm.controls['riddlePrize'].value);
    console.log(
      'Description: ' + createRiddleForm.controls['riddleDescription'].value
    );

    let title = createRiddleForm.controls['riddleName'].value;
    let levels = createRiddleForm.controls['levels'].value;
    let difficulty = createRiddleForm.controls['difficulty'].value;
    let prize = createRiddleForm.controls['riddlePrize'].value;
    let description = createRiddleForm.controls['riddleDescription'].value;
    //get this elsewhere
    let riddlerName = 'Riddler name from session';

    this.newRiddle = new Riddle(
      title,
      difficulty,
      prize,
      riddlerName,
      levels,
      description
    );

    let response = this.service.newRiddle('/Riddles', this.newRiddle);
    //console.log(response);
    // console.log(
    response.subscribe((data) => (this.message = data));
  }

  // public createRiddle() {
  //   let response = this.service.newRiddle('/Riddles', this.newRiddle);
  //   response.subscribe((data) => (this.message = data));
  // }
}
