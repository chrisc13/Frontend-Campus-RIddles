import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { from, observable, throwError } from 'rxjs';
import { Riddle } from '../_models/riddle.model';
import { GetRiddlesService } from '../services/get-riddles.service';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.css'],
  template: ` <button (click)="onClickMe()">Click me!</button>
    {{ clickMessage }}`,
})
export class ExplorePageComponent implements OnInit {
  totalAngularPackages;

  constructor(private service: GetRiddlesService) {}

  ngOnInit() {
    // Simple GET request with response type <any>
    this.service.getAll();

    // let observable = this.http.get('api/Riddles');
    // observable.subscribe((response) => console.log(response));
  }

  getRiddles() {
    //let observable = this.http.get('api/Riddles');
    //.pipe(
    //     map((data: Riddle[]) => {
    //       return data;
    //     }), catchError( error => {
    //       return throwError( 'Something went wrong!' );
    //     })
    //  );
    //observable.subscribe((response) => console.log(response));
  }
}
