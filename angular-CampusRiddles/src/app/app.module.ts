import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { CommunityPageComponent } from './community-page/community-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { MyRiddlesPageComponent } from './my-riddles-page/my-riddles-page.component';
import { AuthComponent } from './auth/auth.component';
import { CreateRiddlePageComponent } from './create-riddle-page/create-riddle-page.component';
import { HeaderComponent } from './header/header.component';
import { RiddleService } from './services/riddle.service';
import { CommunitySubmitPageComponent } from './community-submit-page/community-submit-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommunityDetailPageComponent } from './community-detail-page/community-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FooterComponent,
    CommunityPageComponent,
    ProfilePageComponent,
    MyRiddlesPageComponent,
    AuthComponent,
    CreateRiddlePageComponent,
    HeaderComponent,
    CommunitySubmitPageComponent,
    PageNotFoundComponent,
    CommunityDetailPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgxWebstorageModule.forRoot(),
  ],
  // if an error occurs, its probably because i didnt add "WebRequestService" as a provider
  providers: [RiddleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
