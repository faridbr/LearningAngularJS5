import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alert-success',
  template: `<div class="alert-success">Success</div>`,
  styleUrls: ['./alert.component.css']
})

export class SuccessComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}