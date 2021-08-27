import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-create-crossword',
  templateUrl: './create-crossword.component.html',
  styleUrls: ['./create-crossword.component.css']
})
export class CreateCrosswordComponent implements OnInit {

  public dropdown_numbers: Array<number> = [1,2,3,4,5];
  public createInputBoxes: any; // populated by dropdown menu with numbers then used as a # amount to print boxes
  public inputBoxes: number; // populated by the dropdown menu with numbers

  constructor() { }

  ngOnInit(): void {
  }

  updateInputBoxes(event) {
    this.inputBoxes = event.target.value;
    this.createInputBoxes = new Array(+this.inputBoxes).fill(undefined).map( (x,i) => i+1 );
  }

  onClickSubmit(data) {
    console.log("these are the words");
    // console.log(data.word_1);
    // console.log(data.word_2); 
    // this.inputBoxes = +this.inputBoxes;

    // for (let x = 1; x < +this.inputBoxes; x++){
    //   console.log(data.word_ + "x");

    console.log(data);
    //}
  }

}
