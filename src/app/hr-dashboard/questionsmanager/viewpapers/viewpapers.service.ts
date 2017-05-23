import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { CommonProperties } from '../../../common.properties';

@Injectable()

export class ViewpapersService {
    constructor(private http: Http, private paperProperties: CommonProperties) { }

   

    getPaperList() {
        // var headers = new Headers();
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var getPaperUrl = 'https://api.myjson.com/bins/19gqhh';
        return this.http.get(getPaperUrl)
            .map(res => res.json());
    }

    viewPaperQuestions() {
        // var headers = new Headers();
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var getPaperUrl = 'https://api.myjson.com/bins/a0l7d';
        return this.http.get(getPaperUrl)
            .map(res => res.json());
    }

 

}
