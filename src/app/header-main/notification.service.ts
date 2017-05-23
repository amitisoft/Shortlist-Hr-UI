import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { CommonProperties } from '../common.properties';

@Injectable()

export class NotificationService{
	constructor(private http:Http, private candidateDataPro: CommonProperties){

	}

	pullNotification(){
		return this.http.get(this.candidateDataPro.notificationUrl);
	}

}