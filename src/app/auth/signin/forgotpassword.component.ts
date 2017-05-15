import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'amiti-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

    constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onBack() {
      this.router.navigate(['../../signinpanel'], { relativeTo: this.route });
  }

}
