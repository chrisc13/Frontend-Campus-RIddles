import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  authForm: FormGroup;

  isLoginMode = true;

  constructor(private router: Router) {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode; //just takes the opposite (like a on/off)
    console.log(this.isLoginMode);

    //add additonal info needed for sign up
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    form.reset();

    if (this.isLoginMode) {
      this.router.navigateByUrl('/home');
    }

    //
  }

  ngOnInit() {
    /*
        this.authForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('',Validators.required),
        })*/
  }
}
