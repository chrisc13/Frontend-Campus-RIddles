import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hunter, HunterModel } from '../_models/hunter.model';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly AUTH_URL;
  constructor(private http: HttpClient) {
    this.AUTH_URL = 'api/auth';
  }

  signUp(payload: Object): Observable<HunterModel> {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    let myJson = JSON.stringify(payload);

    return this.http.post<HunterModel>(
      `${this.AUTH_URL}/signup`,
      myJson,
      options
    );
  }

  signIn(payload: Object): Observable<HunterModel> {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<HunterModel>(
      `${this.AUTH_URL}/signin`,
      JSON.stringify(payload),
      options
    );
  }
}
