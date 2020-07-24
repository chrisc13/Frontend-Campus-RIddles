import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { from, observable, throwError } from 'rxjs';
import { Riddle } from '../_models/riddle.model';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.css'],
  template: ` <button (click)="onClickMe()">Click me!</button>
    {{ clickMessage }}`,
})
export class ExplorePageComponent implements OnInit {
  totalAngularPackages;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Simple GET request with response type <any>
  }

  getRiddles() {
    let observable = this.http.get('http://localhost:8080/Riddles');
    //.pipe(
    //     map((data: Riddle[]) => {
    //       return data;
    //     }), catchError( error => {
    //       return throwError( 'Something went wrong!' );
    //     })
    //  );

    observable.subscribe((response) => console.log(response));
  }
}
