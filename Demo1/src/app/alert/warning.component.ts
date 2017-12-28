import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alert-warning',
  template: `<div class="alert-warning">Warning</div>`,
  styleUrls: ['./alert.component.css']
})

export class WarningComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
