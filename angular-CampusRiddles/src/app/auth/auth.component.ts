import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  authForm: FormGroup;

  isLoginMode = true;

  constructor(private router: Router, private http: HttpClient) {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode; //just takes the opposite (like a on/off)
    console.log(this.isLoginMode);

    //add additonal info needed for sign up
  }

  onSubmit(form: NgForm) {
    //console.log('User is ...' + form.value);
    form.reset();

    let observable = this.http.get('/Riddles');

    observable.subscribe((response) => console.log(response));

    //TODO: navigate home once sign in
    // if (this.isLoginMode) {
    //   this.router.navigateByUrl('/home');
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
