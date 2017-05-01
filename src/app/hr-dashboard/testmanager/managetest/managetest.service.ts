import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { ManageTestProperties } from './managetest.properties';


@Injectable()
export class ManagetestService {

    constructor(private http: Http, private manageTestPro: ManageTestProperties) { }



    getData() {
        // return this Observable
        return this.http.get(this.manageTestPro.getManageTestDatas)
        .map((response: Response) => response.json());
    }

    // Send Data's to Server

    sendManageTest(user: any) {
        const body = JSON.stringify(user);

        const headers = new Headers(); // we can pass javascript objet inside header like this, Headers({});

        headers.append('Content-Type', 'application/json');

        return this.http.post('https://amitionlinetest.firebaseio.com/createcategory.json', body, {
            headers: headers
        })
            .map((data: Response) => data.json())
            .catch(this.handleError); // For Error Handling
    }


    getManageTestData() {
        return this.http.get('https://amitionlinetest.firebaseio.com/createcategory.json')
            .map((response: Response) => response.json());
    }

    // For Error Handling
    private handleError(error: any) {
        console.log(error);
        return Observable.throw(error.json()); // (error.json());
    }

    sendStartTestdata(startTestData: any) {
        const ManageTestbody = JSON.stringify(startTestData);

        const headers = new Headers();
        return this.http.post(this.manageTestPro.sendTestStartedDatas, ManageTestbody, {
            headers: headers
        })
            .map((data: Response) => data.json())
            .catch(this.handleError);

    }
    getStartTestdata() {
        return this.http.get('https://questiontable-630db.firebaseio.com/startTestData.json')
            .map((response: Response) => response.json());
    }
}


