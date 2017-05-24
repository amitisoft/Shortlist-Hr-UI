import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { CommonProperties } from '../../../common.properties';

@Injectable()

export class ViewpapersService {
    constructor(private http: Http, private paperProperties: CommonProperties) { }

   

    getPaperList(categoryName) {
        // var headers = new Headers();
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var getPaperUrl = 'https://api.myjson.com/bins/u4qnd';
        //var getPaperUrl = 'https://9t3ee4b9hf.execute-api.us-east-1.amazonaws.com/dev/api/getquestionpapernamesbycategory/category/' + categoryName + '';
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
