import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, retry } from 'rxjs/operators';
//import { Injectable } from '@angular/core';


@Component({
  selector: 'app-create-riddle-page',
  templateUrl: './create-riddle-page.component.html',
  styleUrls: ['./create-riddle-page.component.css']
})
export class CreateRiddlePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
