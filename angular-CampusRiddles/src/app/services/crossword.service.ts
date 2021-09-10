import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Crossword } from '../_models/crossword.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CrosswordService {

  constructor(private http: HttpClient){ 
    this.CROSSWORD_URL =  '/api/crosswords/create';
  }

  readonly CROSSWORD_URL;

  postCrosswords( crossword: Crossword ): Observable<any> {
    //const params = new HttpParams().append('param', id.toString());
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    let myJson = JSON.stringify(crossword);
    console.log('will post', myJson);

    return this.http.post<Crossword>(
      `${this.CROSSWORD_URL}`, myJson, options
    );
  }

}
