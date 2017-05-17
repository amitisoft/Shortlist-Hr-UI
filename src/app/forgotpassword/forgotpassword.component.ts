import { Component, OnInit} from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Response } from '@angular/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'amiti-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
   //@ViewChild('form') uForm: NgForm;
  constructor() { }

  ngOnInit() { 
   
  }
  updatepassowrd(form: NgForm){
    console.log(form.value);
  }

}
