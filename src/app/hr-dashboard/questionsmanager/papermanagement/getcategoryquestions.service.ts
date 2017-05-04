import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { PapermanagementProperties } from './papermanagement.properties';

@Injectable()

export class GetcategoryquestionsService {

    constructor(private _http: Http, private paperProperties:PapermanagementProperties) { }

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
            /*return this._http.post(this.paperProperties.javaquestions, params, {headers: headers}).map(res => res.json());*/
            return this._http.get(this.paperProperties.javaquestions).map(res => res.json())
        } else if (categoryName === "QA") {
            /*return this._http.post(this.paperProperties.qaquestions, params, {headers: headers}).map(res => res.json());*/
            return this._http.get(this.paperProperties.qaquestions).map(res => res.json())
        } else if (categoryName === "JavaScript") {
            /*return this._http.post(this.paperProperties.javascript, params, {headers: headers}).map(res => res.json());*/
            return this._http.get(this.paperProperties.javascript).map(res => res.json())
        } else {
            return;
        }
    }
}