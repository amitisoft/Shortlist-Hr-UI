﻿import * as firebase from 'firebase';

import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';

import { CommonProperties } from '../common.properties';

@Injectable()


export class AuthService {

    token: string;

    signupUser(email: string, password: string) {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
            error => console.log(error)
            )

    }

    constructor(private router: Router,private http: Http, private candidateDataPro: CommonProperties) { }

    /** signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
            responce => { this.router.navigate(['/hrdashboard']);
            firebase.auth().currentUser.getToken().then ( (token: string) => this.token= token )
 
 
            }
 
                //console.log(responce)
            )
 
            .catch(
            error => console.log(error)
            );
    } **/

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
            response => {

                firebase.auth().currentUser.getToken()
                    .then(
                    (token: string) => this.token = token
                    )


                this.router.navigate(['/hrdashboard']);
            }
            )
            .catch(
            error => console.log(error)
            );
    }
    getToken() {
        firebase.auth().currentUser.getToken()
            .then(
            (token: string) => this.token = token
            )
        return this.token;
    }
    isAuthenticated() {
        //console.log(this.token);
        return this.token != null;
    }

  //          this.router.navigate(['/hrdashboard/home']);
  //      }
  //    )
  //    .catch(
  //      error => console.log(error)
  //    );
  //}
  //getToken(){
  //  firebase.auth().currentUser.getToken()
  //    .then(
  //      (token: string) => this.token = token
  //    )
  //  return this.token;
  //}
  //  isAuthenticated(){
  //    //console.log(this.token);
  //    return this.token != null;
  //  } 


    logOut() {
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['/signin']);
    }
    changepassword(changevalue){
        return this.http.post(this.candidateDataPro.changepassword, changevalue);
    }
    forgotpassword(changevalue){
        return this.http.post(this.candidateDataPro.forgotpassword, changevalue);
    }
}