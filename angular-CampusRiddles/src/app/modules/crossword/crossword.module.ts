import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCrosswordComponent } from './create-crossword/create-crossword.component';
import {BrowserModule} from '@angular/platform-browser';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InputSwitchModule } from 'primeng/inputswitch';



@NgModule({
  declarations: [CreateCrosswordComponent],
  exports: [CreateCrosswordComponent],
  imports: [
    CommonModule, BrowserModule, DropdownModule, FormsModule, BrowserAnimationsModule, InputSwitchModule
  ]
})
export class CrosswordModule { }
