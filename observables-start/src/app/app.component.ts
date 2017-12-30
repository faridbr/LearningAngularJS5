import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  userActivatedSubscription: Subscription;
  user1Activated = false;
  user2Activated = false;

constructor(private userServive: UserService){}

  ngOnInit(){
    this.userActivatedSubscription = this.userServive.userActivated.subscribe((number: number)=>{
      this.user1Activated = number == 1;
      this.user2Activated = number == 2;
    })
  }

  ngOnDestroy(){
    this.userActivatedSubscription.unsubscribe();
  }
}
