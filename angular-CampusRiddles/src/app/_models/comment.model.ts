export class CommentModel {
  response: string;
  message: string;
  comments: Comment[];
}

export class Comment {
  id: number;
  text: string;
  hunter_username: string;
  forum_id: number;

  constructor(
    id: number,
    text: string,
    hunter_username: string,
    forum_id: number
  ) {
    this.id = id;
    this.text = text;
    this.hunter_username = hunter_username;
    this.forum_id = forum_id;
  }
}
