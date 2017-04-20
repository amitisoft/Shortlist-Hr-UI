import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CandidateDataService {

    constructor(private http: Http) { }



      sendCandidateData(user: any) {
        const body = JSON.stringify(user);

        const headers = new Headers(); // we can pass javascript objet inside header like this, Headers({});

        headers.append('Content-Type', 'application/json');

        return this.http.post('https://amitionlinetest.firebaseio.com/candidateData.json', body, {
            headers: headers
        })
            .map((data: Response) => data.json())
        
            .catch(this.handleError); // For Error Handling
        
    }


    getOwnData() {
        return this.http.get('https://amitionlinetest.firebaseio.com/candidateData.json')
            .map((response: Response) => response.json());
    }

    // For Error Handling 
    private handleError(error: any) {
        console.log(error);
        return Observable.throw(error.json()); // (error.json());
    }
}


