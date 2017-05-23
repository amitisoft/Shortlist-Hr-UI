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
  constructor(private authService : AuthService,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit() { 

     this.route.params
            .subscribe(
            (params: Params) => {
                let linktime= +params['id'];
                // let next24hour=24*3600*1000;
                // let activetime=+(linktime+next24hour);
                // let curtime=new Date().getTime();
                // if(curtime<activetime){
                //   alert('Link has been expired,please try again');
                //   this.router.navigate(['../../signin'], { relativeTo: this.route });
                // }
            }
            )
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
