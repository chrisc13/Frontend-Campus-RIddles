import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Hunter, HunterModel } from '../_models/hunter.model';
import { AuthResponse } from '../auth/authResponse';
//import { LocalStorageService } from 'ngx-webstorage';
import { map, tap } from 'rxjs/operators';
import { User } from '../_models/user.model';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  refreshTokenPayload = {
    refreshToken: this.getRefreshToken(),
    username: this.getUsername(),
  };
  readonly AUTH_URL;
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;


  constructor(
    private http: HttpClient,
    //private localStorage: LocalStorageService
  ) {
    this.AUTH_URL = 'api/auth';
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value
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
        'Content-Type': 'application/json'
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
            localStorage.setItem(
              'authenticationToken',
              data.authenticationToken
            );
            localStorage.setItem('username', data.username);
            localStorage.setItem('userid', data.id.toString())

            // TODO: temporary solution. replace with real refresh tokens soon
            if (data.refreshToken && data.expiresAt)
            {
              localStorage.setItem('refreshToken', data.refreshToken);
              localStorage.setItem('expiresAt', data.expiresAt.toString());
            }
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
    localStorage.removeItem('authenticationToken');
    localStorage.removeItem('username');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('expiresAt');
    localStorage.removeItem('userid');
  }

  isLoggedIn(): boolean {
    //return this.getJwtToken()! + null;
    return this.getJwtToken() == null ? false : true;
  }

  getJwtToken() {
    return localStorage.getItem('authenticationToken');
  }

  getUsername() {
    return localStorage.getItem('username');
  }

  getRefreshToken() {
    return localStorage.getItem('refreshToken');
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
          localStorage.setItem(
            'authenticationToken',
            response.authenticationToken
          );
          localStorage.setItem('expiresAt', response.expiresAt.toString());
        })
      );
  }
}
