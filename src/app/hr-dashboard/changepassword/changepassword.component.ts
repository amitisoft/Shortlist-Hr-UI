import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Response } from '@angular/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'amiti-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }
changepassword(form: NgForm){
	this.authService.changepassword(form.value)
            .subscribe(
            (response: Response) => {
             var res=JSON.parse(JSON.stringify(response));
             alert(res._body);
             console.log(res._body);
            }
            );
}
}
