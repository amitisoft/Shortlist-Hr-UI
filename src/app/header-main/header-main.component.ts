import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';
import { AuthService } from '../auth/auth.service';
import { Response } from '@angular/http';

@Component({
  selector: 'amiti-header-main',
  templateUrl: './header-main.component.html'
})
export class HeaderMainComponent implements OnInit {

	private notiflag:boolean = true;
  	constructor( private authService: AuthService, private notificServ: NotificationService) { }

	ngOnInit() {
		this.notificServ.pullNotification().subscribe(
			(data) => {},
			(error) => {},
			() => {}
		);
	}

	onLogOut() {
		this.authService.logOut();
	}
}
