import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';
import { AuthService } from '../auth/auth.service';
import { Response } from '@angular/http';

@Component({
  selector: 'amiti-header-main',
  templateUrl: './header-main.component.html',
  providers:[NotificationService, AuthService]
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


	showNotifications(){
		var sleekElement = document.getElementsByClassName("sleekBlock");
		if(this.notiflag){
			this.notiflag = false;
		}else{
			this.notiflag = true;
		}
		console.log("Hi");
	}
}
