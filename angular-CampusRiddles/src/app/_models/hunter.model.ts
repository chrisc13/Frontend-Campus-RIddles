export class HunterModel {
  response: string;
  message: string;
  hunter: Hunter;
}

export class Hunter {
  id: number;
  username: string;
  email: string;
  password: string;

  constructor(id: number, username: string, email: string, password: string) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
