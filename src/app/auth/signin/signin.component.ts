﻿import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MdInputModule } from '@angular/material';

import { AuthService } from '../auth.service';

@Component({
  selector: 'amiti-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

    constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {

      const email = form.value.email;
      const password = form.value.password;
      this.authService.signinUser(email, password);
  }
  sendforgotlink(){ 
    if(confirm("Are sure to send link ?")){
    alert('Link sent to your mail,Pls check !');
  }
  }
}
