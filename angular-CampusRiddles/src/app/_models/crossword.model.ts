export class Crossword {
    riddlerId: number;
    //level: number;
    response: string;
    message: string;
    words: string[];

    constructor(res: string, mes: string, wordArray: string[]) 
    { 
        this.response = res;
        this.message = mes;
        this.words = wordArray;
    }
  }