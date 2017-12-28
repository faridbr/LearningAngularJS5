import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //styles:[`h3{color:red;}`]
})

export class AppComponent {
  show: boolean= false;
  display = false;
  logs = [];
  showSecret: boolean = false;

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    //this.logs.push(this.logs.length + 1);
    this.logs.push(new Date());
  }
}
