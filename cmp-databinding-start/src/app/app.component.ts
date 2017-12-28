import {  Component,
          ViewEncapsulation, 
          Output, 
          EventEmitter } from '@angular/core';
import { log } from './log';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated //encapsulat css None
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  // serverElements = [{type:'server', name:'server name', content:'server content'}];
  // onServerAdded(serverData: {serverName: string, serverContent: string}) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.serverName,
  //     content: serverData.serverContent
  //   });
  // }
  // onBlueprintAdded(serverData: {serverName: string, serverContent: string}) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: serverData.serverName,
  //     content: serverData.serverContent
  //   });
  // }

  onIntervalFired(firedNumber: number){
    if(firedNumber % 2 === 0)
        this.evenNumbers.push(firedNumber);
      else
        this.oddNumbers.push(firedNumber);
  }
}
