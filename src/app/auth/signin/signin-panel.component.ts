import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'amiti-signin-panel',
  templateUrl: './signin-panel.component.html',
  styleUrls: ['./signin-panel.component.css']
})
export class SigninPanelComponent implements OnInit {

    constructor(private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
  }

    onSignin() {

        this.router.navigate(['forgotpassword'], { relativeTo: this.route });
  }

    onRegister() {
        this.router.navigate(['signup'], { relativeTo: this.route });
    }

}
