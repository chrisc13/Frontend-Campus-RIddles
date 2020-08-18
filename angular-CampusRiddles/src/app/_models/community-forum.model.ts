export class CommunityForumModel {
  response: string;
  message: string;
  communityForums: CommunityForum[];
}

export class CommunityForum {
  id: number;
  title: string;
  content: string;
  media: string;
  hunter_username: string;
  hunter_id: number;
  constructor(
    id: number,
    title: string,
    content: string,
    media: string,
    hunter_username: string,
    hunter_id: number
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.media = media;
    this.hunter_username = hunter_username;
    this.hunter_id = hunter_id;
  }
}
