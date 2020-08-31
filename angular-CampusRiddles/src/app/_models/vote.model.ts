export class VoteModel {
  response: string;
  message: string;
  votes: Vote[];
}

export class Vote {
  id: number;
  vote: number;
  hunter_username: string;
  fk_vote_forum: number;

  constructor(
    id: number,
    vote: number,
    hunter_username: string,
    forum_id: number
  ) {
    this.id = id;
    this.vote = vote;
    this.hunter_username = hunter_username;
    this.fk_vote_forum = forum_id;
  }
}
