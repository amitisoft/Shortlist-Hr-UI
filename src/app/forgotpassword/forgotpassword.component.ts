import { Component, OnInit} from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Response } from '@angular/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'amiti-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
   //@ViewChild('form') uForm: NgForm;
  constructor(private authService : AuthService) { }

  ngOnInit() { 
   
  }
  updatepassowrd(form: NgForm){
    this.authService.forgotpassword(form.value)
            .subscribe(
            (response: Response) => {
             var res=JSON.parse(JSON.stringify(response));
             alert(res._body);
             console.log(res._body);
            }
            );
}

}
