import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Response } from '@angular/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'amiti-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
changepassword(form: NgForm){
	console.log(form.value);
}
}
