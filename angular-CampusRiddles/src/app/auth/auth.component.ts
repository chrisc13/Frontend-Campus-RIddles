import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { from, Subscription } from 'rxjs';
import { Hunter } from '../_models/hunter.model';
import { SignUpRequestPayload } from './signupRequestPayload';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit, OnDestroy {
  authForm: FormGroup;

  isLoginMode = true;

  signupSuccess = false;

  authSub: Subscription;

  constructor(private authService: AuthService, private router: Router) {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode; //just takes the opposite (like a on/off)
    console.log(this.isLoginMode);
  }

  ngOnInit(): void {}

  onLoginClick(form: NgForm) {
    form.reset();

    const returnHunter: Hunter = new Hunter(
      null,
      null,
      form.controls['email'].value,
      form.controls['password'].value
    );

    this.authSub = this.authService
      .signIn(returnHunter)
      .subscribe((result) =>
        console.log('Logged in as: ' + result.hunter.username)
      );

    //TODO: navigate home once sign in
    // if (this.isLoginMode) {
    //   this.router.navigateByUrl('/explore');
    // }
  }

  onSignUpClick(form: NgForm) {
    form.reset();
    const newHunter: Hunter = new Hunter(
      null,
      form.controls['username'].value,
      form.controls['email'].value,
      form.controls['password'].value
    );

    this.authSub = this.authService
      .signUp(newHunter)
      .subscribe((result) =>
        console.log('Sign up and logged in as: ' + result.hunter.username)
      );

    //TODO: navigate home once sign up
    // if (this.isLoginMode) {
    //   this.router.navigateByUrl('/explore');
    // }
  }

  ngOnDestroy() {
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
  }
}
