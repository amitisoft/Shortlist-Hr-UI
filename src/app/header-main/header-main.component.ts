import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'amiti-header-main',
  templateUrl: './header-main.component.html'
})
export class HeaderMainComponent implements OnInit {

  constructor( private authService: AuthService) { }

  ngOnInit() {
  }

  onLogOut() {
      this.authService.logOut();
  }
}
