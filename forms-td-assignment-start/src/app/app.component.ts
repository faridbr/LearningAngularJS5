import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  availableSoubscriptions = ['Basic','Advanced','Pro'];
  @ViewChild('signupform') spform;
  initialSubscription = this.availableSoubscriptions[1];

  ngOnInit(){
    //this.subscription = this.availableSoubscriptions[1];
  }

  onSubmit(form: NgForm){
    console.log({
      email: form.value.formData.email,
      password: form.value.formData.password,
      subscription: form.value.formData.subscription,
    });
    //or
    console.log(form.value.formData);
    //or
    console.log(this.spform.value.formData);
  }
  
}
