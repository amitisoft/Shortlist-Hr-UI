import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable, Subject } from 'rxjs/Rx';
import { CommonProperties } from '../../common.properties';

@Injectable()
export class CategorymanagerService {
    items: any[] = [];

    startedEditing = new Subject<number>();

    constructor(private http: Http,
                private categoryPro: CommonProperties) { }


    getCategoryForEdit(index: number) {
        return this.getOwnData[index];
    }

    getData() {
        // return this Observable
        return this.http.get(this.categoryPro.viewCategories)
            .map((response: Response) => response.json());
    }

    // Send Data's to Server

    sendData(categorydata: any) {
        const categorydataconst = JSON.stringify(categorydata);
        const headers = new Headers(); // we can pass javascript objet inside header like this, Headers({});
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.categoryPro.sendCategories, categorydataconst, {
            headers: headers
        }).map((data: Response) => data.json())
          .catch(this.handleError); // For Error Handling

    }

    getOwnData() {
        return this.http.get(this.categoryPro.viewCategories)
            .map((response: Response) => response.json());
    }


    getCategory(index: number) {
        return this.items[index];
    }
    // For Error Handling 
    private handleError(error: any) {
        console.log(error);
        return Observable.throw(error.json()); // (error.json());
    }
}


