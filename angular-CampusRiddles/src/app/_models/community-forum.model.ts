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
  constructor(id: number, title: string, content: string, media: string) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.media = media;
  }
}
