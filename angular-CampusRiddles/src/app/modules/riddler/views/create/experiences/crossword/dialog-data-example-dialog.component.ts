import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from './animalInter';

@Component({
    selector: 'dialog-data-example-dialog',
    templateUrl: 'dialogFormat.html',
  })
  export class DialogDataExampleDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  }