export class RiddleModel {
  response: string;
  message: string;
  riddles: Riddle[];
}

export class Riddle {
  title: string;
  difficulty: number;
  prize: string;
  riddlerName: string;
  levels: number;
  description: string;
  // add Riddler Class Object here

  constructor(
    title: string,
    difficulty: number,
    prize: string,
    riddlerName: string,
    levels: number,
    description: string
  ) {
    this.title = title;
    this.difficulty = difficulty;
    this.prize = prize;
    this.riddlerName = riddlerName;
    this.levels = levels;
    this.description = description;
  }
}
