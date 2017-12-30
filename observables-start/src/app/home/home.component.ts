import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/Rx'; //must import for observable.interval
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numberObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000)
    .map(
      (data: number)=>data * 2
    );
 
   this.numberObsSubscription = myNumbers
   .subscribe(
      (number: number)=>{console.log(number);}
    );

    const myObservable = Observable.create((observer: Observer<string>)=>{
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('third package');
      }, 6000);
    });

    this.customObsSubscription = myObservable.subscribe(
      (data: string)=>{console.log(data);},
      (error: string)=>{console.log(error);},
      ()=>{console.log('completed');}
    );

  }

  ngOnDestroy(){
    this.numberObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }

}
