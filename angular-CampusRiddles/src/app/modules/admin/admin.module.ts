import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreeningComponent } from './views/screening/screening.component';
import { MatCardModule} from '@angular/material/card'



@NgModule({
  declarations: [ScreeningComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class AdminModule { }
