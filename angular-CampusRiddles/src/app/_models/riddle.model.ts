export class RiddleModel {
  response: string;
  message: string;
  riddles: Riddle[];
}

export class Riddle {
  title: string;
  difficulty: number;
  prize: string;
  riddlername: string;
  levels: number;
  riddledescription: string;
  // add Riddler Class Object here

  constructor(
    title: string,
    difficulty: number,
    prize: string,
    riddlername: string,
    levels: number,
    riddledescription: string
  ) {
    this.title = title;
    this.difficulty = difficulty;
    this.prize = prize;
    this.riddlername = riddlername;
    this.levels = levels;
    this.riddledescription = riddledescription;
  }
}
