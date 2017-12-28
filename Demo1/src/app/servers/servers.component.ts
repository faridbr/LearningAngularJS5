import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '.app-servers',
  //selector: '[app-servers]',
    selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template:`
  //           <app-server></app-server>
  //           <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
allowNewServer: boolean = false;
serverCreationStatus: string = 'No server was created!';
serverName: string = 'testServer';
userName: string ='';
serverCreated: boolean = false;
servers: string[] = ['Testserver', 'Testserver 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;   
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = `Server ${this.serverName} was created!`;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }  

  onUpdateServerName(event: Event){
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onuserNameChanged = () => {
    this.userName = "";
  }
}
