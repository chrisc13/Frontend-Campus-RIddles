import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './views/create/create.component';
import { ImageComponent } from './views/create/experiences/image/image.component';
import { PdfComponent } from './views/create/experiences/pdf/pdf.component';
import { AudioComponent } from './views/create/experiences/audio/audio.component';
import { QaComponent } from './views/create/experiences/qa/qa.component';
import { TextComponent } from './views/create/experiences/text/text.component';
import { VideoComponent } from './views/create/experiences/video/video.component';
import { CrosswordComponent } from './views/create/experiences/crossword/crossword.component';



@NgModule({
  declarations: [CreateComponent, ImageComponent, PdfComponent, AudioComponent, QaComponent, TextComponent, VideoComponent, CrosswordComponent],
  imports: [
    CommonModule
  ]
})
export class RiddlerModule { }
