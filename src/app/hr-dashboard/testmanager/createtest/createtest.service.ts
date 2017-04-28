import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { CreatetestProperties } from './createtest.properties';

@Injectable()
export class CreateTestService {

    constructor(private http: Http,private createtestProperties:CreatetestProperties) { }

    sendEmail(selectedEmailList) {
        return this.http.post(this.createtestProperties.sendEmailUrl, selectedEmailList);
    }

    getEmail() {
        return this.http.get(this.createtestProperties.getEmailUrl).map(response => response.json());
    }

}
