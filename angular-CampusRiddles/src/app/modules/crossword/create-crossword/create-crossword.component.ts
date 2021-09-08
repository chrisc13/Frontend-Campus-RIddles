import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';


@Component({
  selector: 'app-create-crossword',
  templateUrl: './create-crossword.component.html',
  styleUrls: ['./create-crossword.component.css']
})
export class CreateCrosswordComponent implements OnInit {

  public dropdown_numbers: Array<number> = [1,2,3,4,5];
  public createInputBoxes: any; // populated by dropdown menu with numbers then used as a # amount to print boxes
  // public inputBoxes: any; // populated by the dropdown menu with numbers
  public inputBoxes: any;
  public words: any[] = [];
  private keys: Array<string>;
  public eventGrabber: any;


  constructor() { }

  ngOnInit(): void {
  }


  updateInputBoxes(event) {
    // this.createInputBoxes = new Array(+this.inputBoxes).fill(undefined).map( (x,i) => i+1 );
    this.createInputBoxes = new Array(+this.inputBoxes).fill(undefined).map( (x,i) => i );

  }

  onClickSubmit(data) {

    console.log("onclick submit data");
    console.log(data);
    console.log(this.words);
    
  }

}
