import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Hunter, HunterModel } from '../../_models/hunter.model';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  username: string;
  hunterModel: HunterModel;
  constructor(private authService: AuthService, private router: Router) {}

  adjustMenu() {
    console.log('edit popover here');
  }

  ngOnInit(): void {
    this.username = this.authService.getUsername();
    // this.authService.getUserDetails(this.username).subscribe(
    //   (data) => {
    //     this.hunterModel = data;
    //   },
    //   (error) => {
    //     throwError(error);
    //   }
    // );
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth').then(() => {
      window.location.reload();
    });
  }
}
