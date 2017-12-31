import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjectValidators } from './validators/project-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  allProjectStatus = ['Stable', 'Critical', 'Finished'];
  projectForm: FormGroup;

  ngOnInit(){
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, ProjectValidators.projectNameValidator], ProjectValidators.asyncProjectNameValidator),
      'projectEmail': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('Critical'),
    }) 
  }

  onSubmit(){
    console.log(this.projectForm.value);
  }

  onChangeStatus(){
    console.log(this.projectForm.value.projectStatus);
  }
}
