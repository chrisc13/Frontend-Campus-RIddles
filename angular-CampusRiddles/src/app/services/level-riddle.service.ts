import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Riddle, RiddleModel } from '../_models/riddle.model';
import { Observable } from 'rxjs';
import { Level } from '../_models/level.model';
@Injectable({
  providedIn: 'root',
})
export class LevelRiddleService {
  readonly RIDDLE_URL;
  constructor(private http: HttpClient) {
    this.RIDDLE_URL = '/api/riddles';
  }
  postSuccess: boolean = false;

  // getRiddle(id: number): Observable<RiddleModel> {
  //   //const params = new HttpParams().append('param', id.toString());
  //   return this.http.get<RiddleModel>(`${this.RIDDLE_URL}/${id.toString()}`);
  // }

  // getSubscribedRiddles(hunter_id: number): Observable<RiddleModel> {
  //   return this.http.get<RiddleModel>(
  //     `${this.RIDDLE_URL}/subscribe/${hunter_id.toString()}`
  //   );
  // }

  addRiddleLevel(level: Level, riddle_id: number): Observable<any> {
    console.log('got to level seervice');
    // let params = new HttpParams();
    // // Begin assigning parameters
    // params = params.append('riddle_id', riddle_id.toString());
    // let options = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //   }),

    //   params: new HttpParams().set('verbose', 'true')

    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );

    let params = new HttpParams().set('riddle_id', riddle_id.toString());
    // const options = term ?
    // { params: new HttpParams().set('name', term) } : {};

    let myJson = JSON.stringify(level);
    // {riddle_id}/subscribe/{hunter_id}

    return this.http.post<any>(`${this.RIDDLE_URL}/levels`, myJson, {
      headers,
      params,
    });
    // let url = `${this.RIDDLE_URL}/${riddle_id}/${hunter_id}`;
    // return this.http.post(url);
    //if api returns any data

    //return this.http.post<RiddleModel(`${this.RIDDLE_URL}/submit/${id.toString()}/${id.toString()}`).;
  }
}
