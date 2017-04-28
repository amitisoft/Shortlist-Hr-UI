import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { CreateQuestionProperties } from './createquestion.properties';


@Injectable()
export class CreateQuestionService {

    constructor(private http: Http,private questionProperties:CreateQuestionProperties) {
      
    }

    saveQuestion(question) {
        return this.http.post(this.questionProperties.saveQuestionUrl, question);
    }

}
