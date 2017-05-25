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
		var randomId = Math.floor(Math.random()*10)+1;
		var tempArr = ["c23","c25","c14","c30","c08","c27","c14","c05","c02","c19"];
		var randomCID = tempArr[randomId];
		//return this.http.get(this.candidateDataPro.notificationUrl+"/"+randomId).map(response => response.json());
		return this.http.get(this.candidateDataPro.notificationUrl+"?cId="+randomCID).map(response => response.json());
	}

	updateNotification(candidateId){
		var headers = new Headers();
    	headers.append('Content-Type', 'application/json');

    	var params;
		var randomCID;

		//return this.http.get(this.candidateDataPro.notificationUrl+"/"+randomId).map(response => response.json());
		return this.http.put(this.candidateDataPro.notificationUrl+"?cId="+randomCID, params, {
			headers: headers
    	});
	}
}