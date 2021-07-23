import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateJigsawComponent } from './create-jigsaw/create-jigsaw.component';
import {InputTextModule} from 'primeng/inputtext';



@NgModule({
  declarations: [CreateJigsawComponent],
  imports: [
    CommonModule,
    InputTextModule
  ]
})
export class JigsawModule { }
