import { Injectable } from '@angular/core';
import { VoteModel } from '../_models/vote.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VoteService {
  readonly COMMUNITY_VOTE_URL;
  constructor(private http: HttpClient) {
    this.COMMUNITY_VOTE_URL = 'api/community-forums/vote';
  }
  postSuccess: boolean = false;

  getVotes(id: number): Observable<VoteModel> {
    //const params = new HttpParams().append('param', id.toString());
    return this.http.get<VoteModel>(
      `${this.COMMUNITY_VOTE_URL}/${id.toString()}`
    );
  }

  // getComments(forumId: number): Observable<CommentModel> {
  //   return this.http.get<CommentModel>(`${this.COMMUNITY_COMMENT_URL}`);
  // }
  postVote(payload: Object): Observable<VoteModel> {
    console.log('IN POST COMMUNIYTY FORUM1!!!!!!!');

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    let myJson = JSON.stringify(payload);
    console.log('will post', myJson);

    return this.http.post<VoteModel>(
      `${this.COMMUNITY_VOTE_URL}`,
      myJson,
      options
    );
  }
}
