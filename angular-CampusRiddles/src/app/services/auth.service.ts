import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Hunter, HunterModel } from '../_models/hunter.model';
import { AuthResponse } from '../auth/authResponse';
import { LocalStorageService } from 'ngx-webstorage';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  refreshTokenPayload = {
    refreshToken: this.getRefreshToken(),
    username: this.getUsername(),
  };
  readonly AUTH_URL;
  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
  ) {
    this.AUTH_URL = 'api/auth';
  }

  signUp(payload: Object): Observable<AuthResponse> {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    let myJson = JSON.stringify(payload);

    return this.http.post<AuthResponse>(
      `${this.AUTH_URL}/signup`,
      myJson,
      options
    );
  }

  logIn(payload: Object): Observable<boolean> {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .post<AuthResponse>(
        `${this.AUTH_URL}/login`,
        JSON.stringify(payload),
        options
      )
      .pipe(
        map((data) => {
          if (data.message == 'SUCCESS') {
            this.localStorage.store(
              'authenticationToken',
              data.authenticationToken
            );
            this.localStorage.store('username', data.username);
            this.localStorage.store('refreshToken', data.refreshToken);
            this.localStorage.store('refreshToken', data.expiresAt);
            return true;
          }
          return false;
        })
      );
  }

  logout() {
    this.http
      .post(`${this.AUTH_URL}/logout`, this.refreshTokenPayload)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          throwError(error);
        }
      );
    this.localStorage.clear('authenticationToken');
    this.localStorage.clear('username');
    this.localStorage.clear('refreshToken');
    this.localStorage.clear('expiresAt');
  }

  isLoggedIn(): boolean {
    return this.getJwtToken()! + null;
  }

  getJwtToken() {
    return this.localStorage.retrieve('authenticationToken');
  }

  getUsername() {
    return this.localStorage.retrieve('username');
  }

  getRefreshToken() {
    return this.localStorage.retrieve('refreshToken');
  }

  getUserDetails(hunter_username: string): Observable<HunterModel> {
    let params = new HttpParams();
    // Begin assigning parameters
    params = params.append('hunter_username', hunter_username);
    return this.http.post<HunterModel>(`${this.AUTH_URL}/user`, params);
  }

  refreshToken() {
    return this.http
      .post<AuthResponse>(`${this.AUTH_URL}/login`, this.refreshTokenPayload)
      .pipe(
        tap((response) => {
          this.localStorage.store(
            'authenticationToken',
            response.authenticationToken
          );
          this.localStorage.store('expiresAt', response.expiresAt);
        })
      );
  }
}
