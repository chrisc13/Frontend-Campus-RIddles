import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';
import { from, Subscription } from 'rxjs';
import { Hunter } from '../../../_models/hunter.model';
import { LocalStorageService } from 'ngx-webstorage';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authForm: FormGroup;

  isLoginMode = true;

  showSignupSuccess = false;
  showLoginSuccess = false;
  showLoginFail = false;
  showSignupFail = false;

  authSub: Subscription;

  constructor(private authService: AuthService, private router: Router) {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode; //just takes the opposite (like a on/off)
    console.log(this.isLoginMode);
  }

  ngOnInit(): void {}

  onLoginClick(form: NgForm) {
    var loginRequest = {
      username: form.controls['username'].value,
      password: form.controls['password'].value,
    };

    this.authSub = this.authService.logIn(loginRequest).subscribe((data) => {
      if (data) {
        this.showLoginSuccess = true;
        this.router.navigateByUrl('/explore');
      } else {
        this.showLoginFail = true;
      }
    });

    //this.router.navigateByUrl('/explore');

    //TODO: navigate home once sign in
    // if (this.isLoginMode) {
    //   this.router.navigateByUrl('/explore');
    // }
    form.reset();
  }

  onSignUpClick(form: NgForm) {
    var signUpRequest = {
      email: form.controls['email'].value,
      username: form.controls['username'].value,
      password: form.controls['password'].value,
    };

    this.authSub = this.authService
      .signUp(signUpRequest)
      .subscribe(
        (result) => (
          console.log('Registration: ' + result.message),
          (this.showSignupSuccess = true),
          (this.isLoginMode = true)
        )
      );

    //TODO: navigate home once sign up
    // if (this.isLoginMode) {
    //   this.router.navigateByUrl('/explore');
    // }
    form.reset();
  }

  ngOnDestroy() {
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
  }
}
