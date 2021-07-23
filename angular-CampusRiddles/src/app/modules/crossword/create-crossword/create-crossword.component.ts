import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-crossword',
  templateUrl: './create-crossword.component.html',
  styleUrls: ['./create-crossword.component.css']
})
export class CreateCrosswordComponent implements OnInit {

  numOfWords: Array<number> = [1,2,3,4,5,6,7,8,9,10];
  selectedCount: number;
  checked: boolean;


  constructor() { }

  ngOnInit(): void {
  }

}
