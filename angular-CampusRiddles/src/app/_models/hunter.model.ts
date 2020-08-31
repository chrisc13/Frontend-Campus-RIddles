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

  constructor(email: string, username: string, password: string) {
    this.email = email;
    this.username = username;
    this.password = password;
  }
}
