import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCrosswordComponent } from './create-crossword/create-crossword.component';
import {BrowserModule} from '@angular/platform-browser';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { PreviewCrosswordComponent } from './preview-crossword/preview-crossword.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogDataExampleDialog } from './create-crossword/dialog-data-example-dialog.component';



@NgModule({
  declarations: [CreateCrosswordComponent, PreviewCrosswordComponent, DialogDataExampleDialog],
  exports: [CreateCrosswordComponent],
  imports: [
    CommonModule, BrowserModule, DropdownModule, FormsModule, BrowserAnimationsModule, InputSwitchModule, InputTextModule,
    MatProgressSpinnerModule, MatDialogModule
  ]
})
export class CrosswordModule { }
