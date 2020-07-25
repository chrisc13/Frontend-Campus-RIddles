import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WebRequestsService {
  readonly ROOT_URL;
  constructor(private http: HttpClient) {
    this.ROOT_URL = '/api';
  }

  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`).subscribe((data) => {
      console.log(data);
    });
  }

  //TODO: clean up within seperate postJSON function?
  post(uri: string, payload: Object) {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    let myJson = JSON.stringify(payload);
    console.log(`${this.ROOT_URL}/${uri}`);

    return this.http
      .post(`${this.ROOT_URL}/${uri}`, myJson, options)
      .subscribe((data) => {
        console.log(data);
      });
  }

  delete(uri: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }
}
