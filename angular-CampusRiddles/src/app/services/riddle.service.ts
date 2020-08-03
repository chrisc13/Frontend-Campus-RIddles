import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Riddle } from '../_models/riddle.model';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RiddleService {
  //constructor(private webReqService: WebRequestsService, http: HttpClient) {}
  readonly RIDDLE_URL;
  constructor(private http: HttpClient) {
    this.RIDDLE_URL = '/api/riddles';
  }
  postSuccess: boolean = false;

  getRiddles(): Observable<Riddle[]> {
    return this.http.get<Riddle[]>(`${this.RIDDLE_URL}`);
  }

  postRiddle(payload: Object): boolean {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    let myJson = JSON.stringify(payload);

    this.http.post(`${this.RIDDLE_URL}`, myJson, options).subscribe((data) => {
      this.postSuccess = true;
    });

    //change this to real true value within subscribe function
    return true;
  }
}
