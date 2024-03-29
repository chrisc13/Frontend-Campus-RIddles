import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  CommunityForum,
  CommunityForumModel,
} from '../_models/community-forum.model';

@Injectable({
  providedIn: 'root',
})
export class CommunityForumService {
  readonly COMMUNITY_URL;
  constructor(private http: HttpClient) {
    this.COMMUNITY_URL = 'api/community-forums';
  }
  postSuccess: boolean = false;

  getCommunityForum(id: number): Observable<CommunityForumModel> {
    //const params = new HttpParams().append('param', id.toString());
    return this.http.get<CommunityForumModel>(
      `${this.COMMUNITY_URL}/${id.toString()}`
    );
  }

  getCommunityForums(order: string): Observable<CommunityForumModel> {
    let params = new HttpParams();
    params = params.append('sort', order);

    return this.http.get<CommunityForumModel>(`${this.COMMUNITY_URL}`, {
      params: params,
    });
  }

  postCommunityForum(payload: Object): Observable<CommunityForumModel> {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    let myJson = JSON.stringify(payload);

    return this.http.post<CommunityForumModel>(
      `${this.COMMUNITY_URL}/submit`,
      myJson,
      options
    );
  }
}
