import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { CommonProperties } from '../../../common.properties';

@Injectable()
export class ManagetestService {

    constructor(private http: Http, private manageTestPro: CommonProperties) { }

    getDataTestNotTaken() {
        // return this Observable
        return this.http.get(this.manageTestPro.getManageTestDatas)
        .map((response: Response) => response.json());
    }
    getDataTestseacrh(searchdata) {
        // return this Observable
        return this.http.post(this.manageTestPro.sendTestStartedDatassearch,searchdata)
        .map((response: Response) => response.json());
    }
    getDataTestInProgress() {
        return this.http.get(this.manageTestPro.getManageTestInProgress)
            .map((response: Response) => response.json());
    }

    //Result Manager Serach
    getResultManagerData(searchResultManager) {
        // return this Observable
        return this.http.get(this.manageTestPro.postResultManageDatas)
        //return this.http.get(this.manageTestPro.getManageTestDatas + "&post=" + searchResultManager.post + "?name=" + searchResultManager.name + "?score=" + searchResultManager.score + "&email=" + searchResultManager.email + "?phone=" + searchResultManager.phone + "&daterange=" + searchResultManager.dateRange.formatted + "&page=" + page)
            .map((response: Response) => response.json());
    }

    getResultManagerFullData() {
        // return this Observable
        return this.http.get(this.manageTestPro.getResultManagerFullListDataUrl)
           
            .map((response: Response) => response.json());
    }


    sendResultManager(user: any) {
        const body = JSON.stringify(user);

       

        return this.http.post('https://yz74ispp1i.execute-api.us-east-1.amazonaws.com/dev/api/findESResultSearch/', body, {
           
        })
            .map((data: Response) => data.json())
            .catch(this.handleError); // For Error Handling
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


    /**Select Paper**/

    sendCategoryForPaper(user: any) {
        const body = JSON.stringify(user);

        const headers = new Headers(); // we can pass javascript objet inside header like this, Headers({});

        headers.append('Content-Type', 'application/json');

        return this.http.post('https://collectpaper-182eb.firebaseio.com/sendcategory.json', body, {
            headers: headers
        })
            .map((data: Response) => data.json())
            .catch(this.handleError); // For Error Handling
    }

    getQuestionPaper(cat) {
        return this.http.get('https://vxouh67191.execute-api.us-east-1.amazonaws.com/dev/api/getquestionpapernamesbycategory/category/' + cat)
        //return this.http.get('https://collectpaper-182eb.firebaseio.com/getPaper.json')
            .map((response: Response) => response.json());
    }

    /**Select Paper**/



    getStartTestdata() {
        return this.http.get('https://questiontable-630db.firebaseio.com/startTestData.json')
            .map((response: Response) => response.json());
    }
}


