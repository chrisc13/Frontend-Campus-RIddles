import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { MyRiddlesPageComponent } from './my-riddles-page/my-riddles-page.component';
import { ExplorePageComponent } from './explore-page/explore-page.component';
import { CommunityPageComponent } from './community-page/community-page.component';
import { AuthComponent } from './auth/auth.component';
import { CreateRiddlePageComponent } from './create-riddle-page/create-riddle-page.component';

//This is my case 
const routes: Routes = [
  { path: '' , redirectTo:"auth", pathMatch:"full"}, 
 { path: 'home' , component:  HomePageComponent }, 
 { path: 'profile', component: ProfilePageComponent },
 { path: 'my-riddles', component: MyRiddlesPageComponent },
 { path: 'explore', component: ExplorePageComponent },
 { path: 'community', component: CommunityPageComponent },
 { path: 'auth', component: AuthComponent },
 { path: 'create-riddle-page', component: CreateRiddlePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HomePageComponent, ProfilePageComponent, MyRiddlesPageComponent,
  CommunityPageComponent, ExplorePageComponent, AuthComponent, CreateRiddlePageComponent ]