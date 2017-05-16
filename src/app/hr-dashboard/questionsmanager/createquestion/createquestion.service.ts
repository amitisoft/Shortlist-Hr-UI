import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { CommonProperties } from '../../../common.properties';


@Injectable()
export class CreateQuestionService {

    constructor(private http: Http,private questionProperties:CommonProperties) {
      
    }

    saveQuestion(question) {
        return this.http.post(this.questionProperties.saveQuestionUrl, question);
    }

}
