import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    this.http
      .get<any>('https://api.npms.io/v2/search?q=scope:angular')
      .subscribe((data) => {
        this.totalAngularPackages = data.total;
        console.log(data.total);
      });
  }

  getRiddles() {
    console.log(this.totalAngularPackages);
  }
}
