import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { CommonProperties } from '../../../common.properties';

@Injectable()
export class CreateTestService {

    constructor(private http: Http,private createtestProperties:CommonProperties) { }

    sendEmail(selectedEmailList) {
        return this.http.post(this.createtestProperties.sendEmailUrl, selectedEmailList);
    }

    getEmail() {
        return this.http.get(this.createtestProperties.getEmailUrl).map(response => response.json());
    }

}


function getWindow (): any {
    return window;
}
export class WindowRefService {
    get nativeWindow (): any {
        return getWindow();
    }
}
