import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CreateTestService {

    constructor(private http: Http) { }

    saveEmail(emails) {
        return this.http.post('https://questiontable-630db.firebaseio.com/createEmailList.json', emails);
    }
    sendEmail(selectedEmailList) {
        return this.http.post('https://questiontable-630db.firebaseio.com/saveSelectedEmailList.json', selectedEmailList);
    }

    getEmail() {
        return this.http.get('https://questiontable-630db.firebaseio.com/createEmailList.json').map(response => response.json());
    }

}
