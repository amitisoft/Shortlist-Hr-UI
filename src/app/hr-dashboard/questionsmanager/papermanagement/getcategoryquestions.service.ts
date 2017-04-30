import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GetcategoryquestionsService {

    constructor(private _http: Http) { }

    getThisCategoryQuestions(categoryName, lastQuestionId, nextprevQuestions) {
        if (nextprevQuestions === "nextQue")
            var json = JSON.stringify({ "categoryName": categoryName, "lastQuestionId": lastQuestionId });
        else if (nextprevQuestions === "prevQue")
            var json = JSON.stringify({ "categoryName": categoryName, "firstQuestionId": lastQuestionId });
        else
            var json = JSON.stringify({ "categoryName": categoryName, "firstQuestionId": lastQuestionId });

        var params = 'json=' + json;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        if (categoryName === "Java") {
            /*return this._http.post('https://java-questions-c1c4a.firebaseio.com/questions.json',params, {headers: headers}).map(res => res.json());*/
            return this._http.get('https://java-questions-c1c4a.firebaseio.com/questions.json').map(res => res.json())
        } else if (categoryName === "QA") {
            /*return this._http.post('https://javascript-questions.firebaseio.com/questions.json', params, {headers: headers}).map(res => res.json());*/
            return this._http.get('https://qa-questions.firebaseio.com/questions.json').map(res => res.json())
        } else if (categoryName === "JavaScript") {
            /*return this._http.post('https://qa-questions.firebaseio.com/questions.json',params, {headers: headers}).map(res => res.json());*/
            return this._http.get('https://javascript-questions.firebaseio.com/questions.json').map(res => res.json())
        } else {
            return;
        }
    }
}