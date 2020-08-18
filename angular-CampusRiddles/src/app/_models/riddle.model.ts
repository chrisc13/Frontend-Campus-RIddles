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
  levels: number;
  riddledescription: string;
  location: string;
  riddler_id: number;
  // add Riddler Class Object here

  constructor(
    id: number,
    title: string,
    difficulty: number,
    prize: string,
    riddlername: string,
    levels: number,
    riddledescription: string,
    location: string,
    riddler_id: number
  ) {
    this.id = id;
    this.title = title;
    this.difficulty = difficulty;
    this.prize = prize;
    this.riddlername = riddlername;
    this.levels = levels;
    this.riddledescription = riddledescription;
    this.location = location;
    this.riddler_id = riddler_id;
  }
}
