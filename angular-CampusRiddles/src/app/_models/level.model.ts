export class Level {
  id: number;
  levelnumber: number;
  question: string;
  answer: string;

  constructor(levelnumber: number, question: string, answer: string) {
    this.levelnumber = levelnumber;
    this.question = question;
    this.answer = answer;
  }
}
