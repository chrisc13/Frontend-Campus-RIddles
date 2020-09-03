import { Level } from './level.model';

export class RiddleModel {
  response: string;
  message: string;
  riddles: Riddle[];
}

export class Riddle {
  id: number;
  title: string;
  difficulty: number;
  prize: string;
  riddlername: string;
  riddledescription: string;
  location: string;
  riddler_id: number;
  levels: Level[];
  created: Date;
  createdstring: string;
  // add Riddler Class Object here

  constructor(
    id: number,
    title: string,
    difficulty: number,
    prize: string,
    riddlername: string,
    riddledescription: string,
    location: string,
    riddler_id: number
  ) {
    this.id = id;
    this.title = title;
    this.difficulty = difficulty;
    this.prize = prize;
    this.riddlername = riddlername;
    this.riddledescription = riddledescription;
    this.location = location;
    this.riddler_id = riddler_id;
  }
}
