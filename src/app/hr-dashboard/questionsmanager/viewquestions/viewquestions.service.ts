import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { CommonProperties } from '../../../common.properties';


@Injectable()
export class ViewQuestionsService {

    constructor(private http: Http, private viewQuestionProperties: CommonProperties) {

    }

    ViewQuestions(catName) {
        return this.http.get(this.viewQuestionProperties.viewQuestionsUrl)
            .map(response => response.json());
    }

}
