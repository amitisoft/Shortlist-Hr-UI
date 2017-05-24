import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';
import { AuthService } from '../auth/auth.service';
import { Response } from '@angular/http';

@Component({
  selector: 'amiti-header-main',
  templateUrl: './header-main.component.html'
})
export class HeaderMainComponent implements OnInit {

	private notifBucket:any = [];
	private interval:any;
  	constructor( private authService: AuthService, private notificServ: NotificationService) { }

	ngOnInit() {
		//this.functionLoopCall();
	}

	functionLoopCall(){
		//var that = this;
		//that.interval = setInterval(that.getNotification, 2000);
		//that.interval = setInterval(() => {that.getNotification}, 2000);
		//this.getNotification();
	}

	

	getNotification(){
		this.notificServ.pullNotification().subscribe(
			(data) => {
				var tempData = data[0];
				this.notifBucket.push(tempData);
				console.log(this.notifBucket);
			},
			(error) => {},
			() => {}
		);
		//alert("Hi");
	}

/*	stopInterval(){
		clearInterval(this.interval);
	}*/

	onLogOut() {
		this.authService.logOut();
	}
}
