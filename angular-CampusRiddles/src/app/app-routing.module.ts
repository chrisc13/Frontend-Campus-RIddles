import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProfilePageComponent } from './views/profile-page/profile-page.component';
import { MyriddlesComponent } from './views/myriddles/myriddles.component';
import { ExploreComponent } from './views/explore/explore.component';
import { CommunityPageComponent } from './community-page/community-page.component';
import { AuthComponent } from './auth/auth.component';
import { CreateComponent } from './views/create/create.component';
import { CommunitySubmitPageComponent } from './community-submit-page/community-submit-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommunityDetailPageComponent } from './community-detail-page/community-detail-page.component';
import { RiddleDetailPageComponent } from './riddle-detail-page/riddle-detail-page.component';
import { AttemptRiddlePageComponent } from './attempt-riddle-page/attempt-riddle-page.component';
import { CreateJigsawComponent } from './modules/jigsaw/create-jigsaw/create-jigsaw.component';
import { CreateCrosswordComponent } from './modules/crossword/create-crossword/create-crossword.component'
import { PreviewCrosswordComponent } from './modules/crossword/preview-crossword/preview-crossword.component';

//This is my case
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'my-riddles', component: MyriddlesComponent },
  {
    path: 'preview-crossword', component: PreviewCrosswordComponent
  },
  {
    path: 'explore',
    children: [
      { path: '', component: ExploreComponent },
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
  { path: 'create-riddle-page', component: CreateComponent },
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
  HomeComponent,
  ProfilePageComponent,
  MyriddlesComponent,
  CommunityPageComponent,
  ExploreComponent,
  AuthComponent,
  CommunitySubmitPageComponent,
  CreateComponent,
  CommunityDetailPageComponent,
  RiddleDetailPageComponent,
  PageNotFoundComponent,
];
