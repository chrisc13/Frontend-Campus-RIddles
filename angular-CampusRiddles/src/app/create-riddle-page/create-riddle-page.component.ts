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
  //newRiddle: Riddle;
  message: any;

  createRiddleForm: NgForm;

  constructor(private service: PostRiddleService) {}

  ngOnInit(): void {}

  clickedCreateRiddle(createRiddleForm: NgForm) {
    let title = createRiddleForm.controls['riddleName'].value;
    let levels = createRiddleForm.controls['levels'].value;
    let difficulty = createRiddleForm.controls['difficulty'].value;
    let prize = createRiddleForm.controls['riddlePrize'].value;
    let description = createRiddleForm.controls['riddleDescription'].value;
    //get this elsewhere
    let riddlerName = 'Riddler name from angular session';
    const newRiddle: Riddle = new Riddle(
      title,
      difficulty,
      prize,
      riddlerName,
      levels,
      description
    );

    this.service.newRiddle('/Riddles', newRiddle);
    createRiddleForm.reset();
    // response.subscribe((data) => (this.message = data));
  }

  // public createRiddle() {
  //   let response = this.service.newRiddle('/Riddles', this.newRiddle);
  //   response.subscribe((data) => (this.message = data));
  // }
}
