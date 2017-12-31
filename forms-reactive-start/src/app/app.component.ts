import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris','Anna'];

  ngOnInit(){
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail.bind(this))
      }),
      'gender' : new FormControl('male'),
      'hobbies': new FormArray([])
    });
    // this.signupForm.valueChanges.subscribe((value)=>{
    //   console.log(value);
    // });

    // this.signupForm.statusChanges.subscribe((value)=>{
    //    console.log(value);
    // });

    //for all controls
    this.signupForm.setValue({
      'userData': {
        'username': 'Max',
        'email': 'test1@test.com'
      },
      'gender': 'female',
      'hobbies': []
    });

    //Or
    //for only some controls
    // this.signupForm.patchValue({
    //   'userData': {
    //     'username': 'Max',
    //     'email': 'test1@test.com'
    //   }
    // });
  }

  onSubmit(){
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby(){
    const ctrl = new FormControl(null, Validators.required);
    (<FormArray> this.signupForm.get('hobbies')).push(ctrl);
  }

  //synch validator
  forbiddenNames(control: FormControl):{[s: string]:boolean}{
    if(this.forbiddenUsernames.indexOf(control.value) > 0){
      return {'nameIsForbidden': true};
    }
    //if is valid dont use {'nameIsForbidden': false};
    return null;
  }

  //asynch validator
  forbiddenEmail(control: FormControl): Promise<any> | Observable<any>{
   const promise = new Promise<any>((resolve, reject)=>{
    setTimeout(() => {
      if(control.value === 'test@test.com')
        resolve({'emailIsForbidden': true});
      else
        resolve(null);
    },3500);
   })
   return promise; 
  }
}
