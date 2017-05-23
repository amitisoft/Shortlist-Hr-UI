import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { CommonProperties } from '../../../common.properties';

@Injectable()

export class PapermanagementService {
  constructor(private http: Http, private paperProperties:CommonProperties) { }

  private handleError(error: any) {
      console.log(error);
      return Observable.throw(error.json()); // (error.json());
  }

  getThisCategoryQuestions(categoryName, lastQuestionId) {
    // var headers = new Headers();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    var getCategoryQuestionsUrl = 'https://f8ahuuoen7.execute-api.us-east-1.amazonaws.com/dev/api/getquestionbycategory/Category/'+categoryName+'/LastqsnId/'+lastQuestionId+'';
    return this.http.get(getCategoryQuestionsUrl).map(res => res.json());
  }
    
  createPaperService(paperCreationData){
    //const headers = new Headers();
    //headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //var paperjson = JSON.stringify({ "paperName": paperName, "paperQuestions": paperQuestions });
    //var params = 'json=' + paperjson;
    //return this.http.post(this.paperProperties.questionpaper, params, {headers: headers}).map(res => res.json());

    /*var paperjson = JSON.stringify(paperCreationData);
    var params = paperjson;
    console.log(params);*/
    
    // var paperjson = JSON.stringify(paperCreationData);
    // console.log(paperjson);
    return this.http.post(this.paperProperties.questionpaper, paperCreationData);
  }

}
