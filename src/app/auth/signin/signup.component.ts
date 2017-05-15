import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'amiti-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    @ViewChild('f')  signUpForm: NgForm;

    constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {

      const email = form.value.email;
      const password = form.value.password;
      this.authService.signupUser(email, password);
      alert("Registered Successfully");
      this.onClearReg();
  }

  onClearReg() {
      this.signUpForm.reset();
  }
}
