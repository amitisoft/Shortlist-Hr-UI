import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

import { HeaderMainComponent } from './header-main/header-main.component';

@Component({
  selector: 'amiti-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'amiti works!';

    ngOnInit() {

        firebase.initializeApp({

            apiKey: "AIzaSyDZ3Hd4RA5T64NTXYqSw0XiOGV76zsQaiM",
            authDomain: "amitionlinetest.firebaseapp.com"
        });
    }

}
