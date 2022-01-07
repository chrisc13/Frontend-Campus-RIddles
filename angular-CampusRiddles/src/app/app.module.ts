import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';

import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { CommunityPageComponent } from './community-page/community-page.component';
import { ProfilePageComponent } from './views/profile-page/profile-page.component';
import { AuthComponent } from './auth/auth.component';

import { HeaderComponent } from './common/header/header.component';
import { RiddleService } from './services/riddle.service';
import { CommunitySubmitPageComponent } from './community-submit-page/community-submit-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommunityDetailPageComponent } from './community-detail-page/community-detail-page.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RiddleDetailPageComponent } from './riddle-detail-page/riddle-detail-page.component';
import { AttemptRiddlePageComponent } from './attempt-riddle-page/attempt-riddle-page.component';
//import { MycompComponent } from './mycomp/mycomp.component';
import { HomeComponent } from './views/home/home.component';
import { CommunityComponent } from './views/community/community.component';
import { MyriddlesComponent } from './views/myriddles/myriddles.component';
import { ExploreComponent } from './views/explore/explore.component';
import { CreateComponent } from './views/create/create.component';
import { LoginComponent } from './views/authenticate/login/login.component';
import { SignupComponent } from './views/authenticate/signup/signup.component';
import { CrosswordModule } from './modules/crossword/crossword.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { QAComponent } from './views/create/experiences/qa/qa.component';
import { ImageComponent } from './views/create/experiences/image/image.component';
import { PdfComponent } from './views/create/experiences/pdf/pdf.component';
import { AudioComponent } from './views/create/experiences/audio/audio.component';
import { VideoComponent } from './views/create/experiences/video/video.component';
import { TextComponent } from './views/create/experiences/text/text.component';
import { ApplicationComponent } from './views/forms/application/application.component';
import { MatCardModule} from '@angular/material/card'


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FooterComponent,
    CommunityPageComponent,
    ProfilePageComponent,
    AuthComponent,
    HeaderComponent,
    CommunitySubmitPageComponent,
    PageNotFoundComponent,
    CommunityDetailPageComponent,
    RiddleDetailPageComponent,
    AttemptRiddlePageComponent,
    HomeComponent,
    CommunityComponent,
    MyriddlesComponent,
    ExploreComponent,
    CreateComponent,
    LoginComponent,
    SignupComponent,
    QAComponent,
    ImageComponent,
    PdfComponent,
    AudioComponent,
    VideoComponent,
    TextComponent,
    ApplicationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgxWebstorageModule.forRoot(),
    Ng2SearchPipeModule,
    CrosswordModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule
  ],
  // if an error occurs, its probably because i didnt add "WebRequestService" as a provider
  providers: [RiddleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
