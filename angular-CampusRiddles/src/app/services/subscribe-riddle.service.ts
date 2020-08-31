import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Riddle, RiddleModel } from '../_models/riddle.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubscribeRiddleService {
  readonly RIDDLE_URL;
  constructor(private http: HttpClient) {
    this.RIDDLE_URL = '/api/riddles';
  }
  postSuccess: boolean = false;

  getRiddle(id: number): Observable<RiddleModel> {
    //const params = new HttpParams().append('param', id.toString());
    return this.http.get<RiddleModel>(`${this.RIDDLE_URL}/${id.toString()}`);
  }

  getSubscribedRiddles(hunter_id: number): Observable<RiddleModel> {
    //hunter_id = 1;
    return this.http.get<RiddleModel>(
      `${this.RIDDLE_URL}/subscribe/${hunter_id.toString()}`
    );
  }

  subscribeToRiddle(riddle_id: number, hunter_id: number): Observable<any> {
    console.log('got to subscrbie seervice');
    // {riddle_id}/subscribe/{hunter_id}
    let params = new HttpParams();
    // Begin assigning parameters
    params = params.append('riddle_id', riddle_id.toString());
    params = params.append('hunter_id', hunter_id.toString());
    return this.http.post(`${this.RIDDLE_URL}`, params);
    // let url = `${this.RIDDLE_URL}/${riddle_id}/${hunter_id}`;
    // return this.http.post(url);
    //if api returns any data

    //return this.http.post<RiddleModel(`${this.RIDDLE_URL}/submit/${id.toString()}/${id.toString()}`).;
  }
}
