import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommunityForum } from '../_models/community-forum.model';

@Injectable({
  providedIn: 'root',
})
export class CommunityForumService {
  readonly COMMUNITY_URL;
  constructor(private http: HttpClient) {
    this.COMMUNITY_URL = 'api/community-forums';
  }
  postSuccess: boolean = false;

  getCommunityForums(): Observable<CommunityForum[]> {
    return this.http.get<CommunityForum[]>(`${this.COMMUNITY_URL}`);
  }

  postCommunityForum(payload: Object): boolean {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    let myJson = JSON.stringify(payload);

    this.http
      .post(`${this.COMMUNITY_URL}`, myJson, options)
      .subscribe((data) => {
        this.postSuccess = true;
      });

    //change this to real true value within subscribe function
    return true;
  }
}
