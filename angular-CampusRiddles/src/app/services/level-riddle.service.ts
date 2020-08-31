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

  addRiddleLevel(level: Level, riddle_id: number): Observable<any> {
    console.log('got to level seervice');
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );

    let params = new HttpParams().set('riddle_id', riddle_id.toString());

    let myJson = JSON.stringify(level);
    // {riddle_id}/subscribe/{hunter_id}

    return this.http.post<any>(`${this.RIDDLE_URL}/levels`, myJson, {
      headers,
      params,
    });
  }
}
