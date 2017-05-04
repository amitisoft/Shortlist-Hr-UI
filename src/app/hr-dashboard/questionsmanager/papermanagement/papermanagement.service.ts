import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { PapermanagementProperties } from './papermanagement.properties';

@Injectable()
export class PapermanagementService {

    items: any[] = [];

    constructor(private http: Http, private paperProperties:PapermanagementProperties) { }


  getData() {
      // return this Observable
      return this.http.get(this.paperProperties.amitionlinetestcategory)
          .map((response: Response) => response.json());
  }

  // Send Data's to Server

  sendData(user: any) {
      const body = JSON.stringify(user);

      const headers = new Headers(); // we can pass javascript objet inside header like this, Headers({});

      headers.append('Content-Type', 'application/json');

      return this.http.post(this.paperProperties.amitionlinetestcategory, body, {
          headers: headers
      })
          .map((data: Response) => data.json())
          .catch(this.handleError); // For Error Handling
  }

    getCategoryList(){
        return this.http.get(this.paperProperties.viewCategories2)
            .map((response: Response) => response.json());
    }

  sendCategory(user: any) {
      const body = JSON.stringify(user);

      const headers = new Headers(); // we can pass javascript objet inside header like this, Headers({});

      headers.append('Content-Type', 'application/json');

      return this.http.post(this.paperProperties.categoryPermission, body, {
          headers: headers
      })
          .map((data: Response) => data.json())
          .catch(this.handleError); // For Error Handling
  }



  private handleError(error: any) {
      console.log(error);
      return Observable.throw(error.json()); // (error.json());
  }

  createPaperService(paperName, paperQuestions){
    const headers = new Headers();
    var paperjson = JSON.stringify({ "paperName": paperName, "paperQuestions": paperQuestions });
    var params = 'json=' + paperjson;
    return this.http.post(this.paperProperties.questionpaper, params, {headers: headers}).map(res => res.json());
  }

}
