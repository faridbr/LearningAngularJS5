import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(){}

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCpQgyyf3PVx1bXlguujQDGFeKDmnLRmb0",
      authDomain: "ng-recipe-book-88223.firebaseapp.com",
    });
  }
}
