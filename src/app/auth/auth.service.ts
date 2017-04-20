import * as firebase from 'firebase';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
   export class AuthService {
//    signupUser(email: string, password: string) {

//        firebase.auth().createUserWithEmailAndPassword(email, password)
//            .catch(
//            error => console.log(error)
//            )

//    }

    constructor(private router: Router){}

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
            responce => { this.router.navigate(['/hrdashboard']); }

                //console.log(responce)
            )

            .catch(
            error => console.log(error)
            );
    }
}