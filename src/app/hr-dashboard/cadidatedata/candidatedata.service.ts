﻿import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
// import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { CommonProperties } from '../../common.properties';

@Injectable()
export class CandidateDataService {

    constructor(private http: Http, private candidateDataPro: CommonProperties) { }

      sendCandidateData(user: any) {
        const body = JSON.stringify(user); 
        const headers = new Headers(); // we can pass javascript objet inside header like this, Headers({});

        headers.append('Content-Type', 'application/json');

        return this.http.post(this.candidateDataPro.uploadCandidateDataUrl, body, {
                headers: headers
            })
            .map((data: Response) => data.json())

            .catch(this.handleError); // For Error Handling

    }


    // getOwnData() {
    //     return this.http.get('https://amitionlinetest.firebaseio.com/candidateData.json')
    //         .map((response: Response) => response);
    //     //.map((response: Response) => response.json());
    // }

    // For Error Handling 
    private handleError(error: any) {
        console.log(error);
        return Observable.throw(error.json()); // (error.json());
    }
    addUser(userdata, files) {
        var newObject = {
            'lastModified': files.lastModified,
            'lastModifiedDate': files.lastModifiedDate,
            'name': files.name,
            'size': files.size,
            'type': files.type
        };
        var newobbj = JSON.stringify(newObject);
        var alldata = {
            'data': userdata,
            "file": newObject
        };
        console.log(alldata);
        return this.http.post(this.candidateDataPro.addcandidateurl, alldata);
    }
    getuserlist(){
        return this.http.get(this.candidateDataPro.getcandidateurl)
            .map(response => response.json());
    }
    deleteCandidate(mobile){
        console.log(mobile);
    }
}