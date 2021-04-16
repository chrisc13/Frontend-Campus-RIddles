import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolveComponent } from './solve/solve.component';
import { CreateComponent } from './create/create.component';



@NgModule({
  declarations: [SolveComponent, CreateComponent],
  imports: [
    CommonModule
  ]
})
export class JigsawModule { }
