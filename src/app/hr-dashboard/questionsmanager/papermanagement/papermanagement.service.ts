import { Injectable } from '@angular/core';
import { Http, Response, Headers, } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PapermanagementService {

    items: any[] = [];

    constructor(private http: Http) { }


  getData() {
      // return this Observable
      return this.http.get('https://amitionlinetestcategory.firebaseio.com/category.json')
          .map((response: Response) => response.json());
  }

  // Send Data's to Server

  sendData(user: any) {
      const body = JSON.stringify(user);

      const headers = new Headers(); // we can pass javascript objet inside header like this, Headers({});

      headers.append('Content-Type', 'application/json');

      return this.http.post('https://amitionlinetestcategory.firebaseio.com/category.json', body, {
          headers: headers
      })
          .map((data: Response) => data.json())
          .catch(this.handleError); // For Error Handling
  }

  sendCategory(user: any) {
      const body = JSON.stringify(user);

      const headers = new Headers(); // we can pass javascript objet inside header like this, Headers({});

      headers.append('Content-Type', 'application/json');

      return this.http.post('https://amitionlinetestcategory.firebaseio.com/categoryPermission.json', body, {
          headers: headers
      })
          .map((data: Response) => data.json())
          .catch(this.handleError); // For Error Handling
  }

  private handleError(error: any) {
      console.log(error);
      return Observable.throw(error.json()); // (error.json());
  }
}
