import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { MyRiddlesPageComponent } from './my-riddles-page/my-riddles-page.component';
import { ExplorePageComponent } from './explore-page/explore-page.component';
import { CommunityPageComponent } from './community-page/community-page.component';
import { AuthComponent } from './auth/auth.component';
import { CreateRiddlePageComponent } from './create-riddle-page/create-riddle-page.component';
import { CommunitySubmitPageComponent } from './community-submit-page/community-submit-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommunityDetailPageComponent } from './community-detail-page/community-detail-page.component';
import { RiddleDetailPageComponent } from './riddle-detail-page/riddle-detail-page.component';
import { AttemptRiddlePageComponent } from './attempt-riddle-page/attempt-riddle-page.component';
import { CreateJigsawComponent } from './modules/jigsaw/create-jigsaw/create-jigsaw.component';
import { CreateCrosswordComponent } from './modules/crossword/create-crossword/create-crossword.component'
//This is my case
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'my-riddles', component: MyRiddlesPageComponent },
  {
    path: 'explore',
    children: [
      { path: '', component: ExplorePageComponent },
      { path: ':id', component: RiddleDetailPageComponent },
    ],
  },
  {
    path: 'community',
    children: [
      { path: '', component: CommunityPageComponent },
      { path: 'submit', component: CommunitySubmitPageComponent },
      { path: ':id', component: CommunityDetailPageComponent },
    ],
  },
  { path: 'attempt-riddle/:id', component: AttemptRiddlePageComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'create-riddle-page', component: CreateRiddlePageComponent },
  {path: 'createJigsaw', component: CreateJigsawComponent },
  { path: 'createCrossword', component: CreateCrosswordComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  //this FOR PRODUCTION!!
  //imports: [RouterModule.forRoot(routes)],

  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  HomePageComponent,
  ProfilePageComponent,
  MyRiddlesPageComponent,
  CommunityPageComponent,
  ExplorePageComponent,
  AuthComponent,
  CommunitySubmitPageComponent,
  CreateRiddlePageComponent,
  CommunityDetailPageComponent,
  RiddleDetailPageComponent,
  PageNotFoundComponent,
];
