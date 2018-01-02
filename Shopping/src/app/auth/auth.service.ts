import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../shared/local-storage.service';
import { Subscription } from 'rxjs/Subscription';
import { Unsubscribe } from 'firebase';

@Injectable()
export class AuthService {

  constructor(private router: Router, private localStorageService: LocalStorageService) {
  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.localStorageService.applyBackup({'token': token}, false, true)
            )
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.localStorageService.applyBackup({'token': ''});
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => {
          this.localStorageService.applyBackup({'token': token}, false, true);
        }
      );
    return this.localStorageService.getItem('token');
  }

  isAuthenticated() {
    const token = this.localStorageService.getItem('token');
    //this.localStorageService.consoleInfo();
    return token != null && token.length > 0;
  }
}
