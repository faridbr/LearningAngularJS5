import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Unsubscribe } from 'firebase';
import { Router } from '@angular/router';
import { LocalStorageService } from './shared/local-storage.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedFeature = 'recipe';

  authUnsubscribe: Unsubscribe;

  constructor(private router: Router, private localStorageService: LocalStorageService){}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCpQgyyf3PVx1bXlguujQDGFeKDmnLRmb0",
      authDomain: "ng-recipe-book-88223.firebaseapp.com",
      databaseURL: "https://ng-recipe-book-88223.firebaseio.com",
      projectId: "ng-recipe-book-88223",
      storageBucket: "ng-recipe-book-88223.appspot.com",
      messagingSenderId: "935748893681"
    });

    this.authUnsubscribe = firebase
    .auth()
    .onAuthStateChanged(user => {
      if (user) {
        user.getIdToken().then(
          (token)=>{
            this.localStorageService.applyBackup({'token': token}, false, true);
            console.log('user authenticated');
        });
      } else {
        this.localStorageService.applyBackup({'token': ''});
        //this.router.navigate(['signup']);
      }
    });
  }

  ngOnDestroy(){
    this.authUnsubscribe();
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
