import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female']
  //gender1 = 'male';
  submitted = false;

  user  = { username:'',
            email:'',
            question:'',
            answer:'',
            gender:''};


  suggestUserName() {
    const suggestedName = 'Superuser';
    //for holl form
    // this.signForm.setValue({
    //   userData:{
    //     username: suggestedName,
    //     email:''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    //for only some fields
    this.signForm.form.patchValue({
      userData:{
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.signForm);
    this.user.username = this.signForm.value.userData.username;
    this.user.email = this.signForm.value.userData.email;
    this.user.question = this.signForm.value.secret;
    this.user.answer = this.signForm.value.questionAnswer;
    this.user.gender = this.signForm.value.gender;
    this.submitted = true;
    this.signForm.reset();
  }
}
