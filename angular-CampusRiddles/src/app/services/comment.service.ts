import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommentModel } from '../_models/comment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  readonly COMMUNITY_COMMENT_URL;
  constructor(private http: HttpClient) {
    this.COMMUNITY_COMMENT_URL = 'api/community-forums/comments';
  }
  postSuccess: boolean = false;

  getComments(id: number): Observable<CommentModel> {
    //const params = new HttpParams().append('param', id.toString());
    return this.http.get<CommentModel>(
      `${this.COMMUNITY_COMMENT_URL}/${id.toString()}`
    );
  }

  // getComments(forumId: number): Observable<CommentModel> {
  //   return this.http.get<CommentModel>(`${this.COMMUNITY_COMMENT_URL}`);
  // }
  postComment(payload: Object): Observable<CommentModel> {
    console.log('IN POST COMMUNIYTY FORUM1!!!!!!!');

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    let myJson = JSON.stringify(payload);
    console.log('will post', myJson);

    return this.http.post<CommentModel>(
      `${this.COMMUNITY_COMMENT_URL}/submit`,
      myJson,
      options
    );
  }
}
