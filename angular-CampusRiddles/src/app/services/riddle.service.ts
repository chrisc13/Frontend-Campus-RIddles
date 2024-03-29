import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Riddle, RiddleModel } from '../_models/riddle.model';
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

  getRiddle(id: number): Observable<RiddleModel> {
    //const params = new HttpParams().append('param', id.toString());
    return this.http.get<RiddleModel>(`${this.RIDDLE_URL}/${id.toString()}`);
  }

  getRiddles(order: string): Observable<RiddleModel> {
    let params = new HttpParams();
    // Begin assigning parameters
    params = params.append('sort', order);
    return this.http.get<RiddleModel>(`${this.RIDDLE_URL}`, { params: params });
  }
  getByAscDiffifulty(): Observable<RiddleModel> {
    return this.http.get<RiddleModel>(`${this.RIDDLE_URL}`);
  }

  getNewestRiddles(): Observable<RiddleModel> {
    return this.http.get<RiddleModel>(`${this.RIDDLE_URL}/newest`);
  }

  postRiddle(payload: Object): Observable<RiddleModel> {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    let myJson = JSON.stringify(payload);

    return this.http.post<RiddleModel>(
      `${this.RIDDLE_URL}/submit`,
      myJson,
      options
    );
  }
}
