import { CommentModel } from './comment.model';
import { VoteModel } from './vote.model';

export class CommunityForumModel {
  response: string;
  message: string;
  communityForums: CommunityForum[];
  commentModel: CommentModel;
  voteModel: VoteModel;
}

export class CommunityForum {
  id: number;
  title: string;
  content: string;
  media: string;
  hunter_username: string;
  hunter_id: number;
  votecount: number;
  constructor(
    id: number,
    title: string,
    content: string,
    media: string,
    hunter_username: string,
    hunter_id: number,
    votecount: number
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.media = media;
    this.hunter_username = hunter_username;
    this.hunter_id = hunter_id;
    this.votecount = votecount;
  }
}
