import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, retry } from 'rxjs/operators';
import { Riddle } from '../_models/riddle.model';
import { GetRiddlesService } from '../services/get-riddles.service';
import { PostRiddleService } from '../services/post-riddle.service';
//import { Injectable } from '@angular/core';


@Component({
  selector: 'app-create-riddle-page',
  templateUrl: './create-riddle-page.component.html',
  styleUrls: ['./create-riddle-page.component.css']
})
export class CreateRiddlePageComponent implements OnInit {

  newRiddle: Riddle = new Riddle("", -1, "", "", -1, "");
  message: any;
  constructor(private service: PostRiddleService) { }

  ngOnInit(): void {
  }

  public createRiddle(){
    let response = this.service.newRiddle('/Riddles', this.newRiddle);
    response.subscribe((data) => this.message=data);
  }

}
