import { Component, OnInit } from '@angular/core';
import { EventEmitter,Output } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:string, serverContent: string}>();

  @ViewChild('serverContentInput') serverContentInput: ElementRef;
 // newServerName = '';
  // newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverName: HTMLInputElement) {
    this.serverCreated.emit({serverName: serverName.value, serverContent: this.serverContentInput.nativeElement.value})
  }

  onAddBlueprint(serverName) {
    this.blueprintCreated.emit({serverName: serverName.value, serverContent: this.serverContentInput.nativeElement.value})  
  }
}

