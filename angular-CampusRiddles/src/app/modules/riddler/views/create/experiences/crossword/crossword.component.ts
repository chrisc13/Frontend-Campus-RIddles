import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crossword',
  templateUrl: './crossword.component.html',
  styleUrls: ['./crossword.component.css']
})
export class CrosswordComponent implements OnInit {

  ngOnInit(): void {}
  /*

  public dropdown_numbers: Array<number> = [1,2,3,4,5];
  public createInputBoxes: any; // populated by dropdown menu with numbers then used as a # amount to print boxes
  public inputBoxes: any;
  public words: any[] = [];


  constructor(public dialog: MatDialog, 
              public router: Router, 
              private crosswordservice: CrosswordService) { }

  ngOnInit(): void {}

  updateInputBoxes(event) { this.createInputBoxes = new Array(+this.inputBoxes).fill(undefined).map( (x,i) => i ); }

  onClickSubmit(data) 
  {
    console.log("onclick submit data");
    console.log(this.words);

  }
  openDialog( ) {

    const dialogRef = this.dialog.open(DialogDataExampleDialog, {
      data: this.words
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`dialog result: ${result}`);
      if (result){
        console.log("result was true, about to post request");
        let crossword = new Crossword("test1", "test2", this.words);

        this.crosswordservice.postCrosswords(crossword)
        .subscribe(
          (result) => (
            console.log("received result: " + result)
          )
        );

        //this.router.navigateByUrl('/preview-crossword');
      } else {
        console.log("error in routing to preview crossword");
      }

    });
    
  }
  */
}
