import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

import * as AuthActions from  './auth/store/auth.actions';
import * as fromAuth from  './auth/store/auth.reducers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  constructor(private router: Router, private store: Store<fromAuth.IState>){}

  ngOnInit() {
    //if (firebase.apps.length === 0 ){
      firebase.initializeApp({
        apiKey: "AIzaSyCpQgyyf3PVx1bXlguujQDGFeKDmnLRmb0",
        authDomain: "ng-recipe-book-88223.firebaseapp.com",
        databaseURL: "https://ng-recipe-book-88223.firebaseio.com",
        projectId: "ng-recipe-book-88223",
        storageBucket: "ng-recipe-book-88223.appspot.com",
        messagingSenderId: "935748893681"
      });
    // }else{
    //   firebase.app();
    // }

    firebase
    .auth()
    .onAuthStateChanged(user => {
      if (user) {
        user.getIdToken().then(
          (token)=>{
            this.store.dispatch(new AuthActions.SetToken(token));
            console.log('user authenticated');
        });
      } else {
        this.store.dispatch(new AuthActions.SetToken(null));
        this.router.navigate(['signin']);
      }
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
