import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
import { Router } from '@angular/Router';

@Injectable()
export class AuthService {

  token = '';
  username = "";
  userIsAuthenticated = new Subject<boolean>();

  constructor(private router: Router) { }

  isAuthenticated(){
    return this.token != null && this.token.length > 0;
  }

  signOut(){
    firebase.auth().signOut().then(
      (response)=>{
        this.token = "";
        console.log('Logout')
      }
    );
    this.username = "";
    this.token = "";
  }

  signupUser(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
   .then((response) => {
      console.log(response);
    })
    .catch(
      (error) => {console.log(error)}
    );
  }

  signinUser(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((response) => {
      console.log(response);
      this.router.navigate(['/']);
      this.username = firebase.auth().currentUser.email;
      firebase.auth().currentUser.getIdToken()
      .then(
        (token) => {
          this.token = token;
          this.userIsAuthenticated.next(true);
        } 
      ); 
      //console.log(response);
    })
      .catch(
        (error)=>{
          this.userIsAuthenticated.next(false);
          console.log(error)
        }
      );
  }
  getToken(){
    try {
      firebase.auth().currentUser.getIdToken()
      .then(
        (token) => {
          this.token = token;
          this.userIsAuthenticated.next(true);
        }
      )
      .catch(
        (error)=>{
          this.userIsAuthenticated.next(false);
          console.log(error)
        } 
      );
      return this.token;        
    } catch (error) {
    }
  }
}
 