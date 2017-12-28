import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { log } from '../log';
import { OnChanges, DoCheck } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { AfterContentChecked } from '@angular/core';
import { AfterViewInit, AfterViewChecked } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { ContentChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('srvElement')
  element: {type: string, name: string, content: string};

  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { log('constructor called');}
  ngOnChanges(changes: SimpleChanges){log('ngOnChanges called');} //log(changes);}
  ngOnInit() {log('ngOnInit called'); log("paragraph: "+ this.paragraph.nativeElement.textContent)}
  ngDoCheck(){log('ngDoCheck called');}
  ngAfterContentInit(){log('ngAfterContentInit called');}
  ngAfterContentChecked(){log('ngAfterContentChecked called');}
  ngAfterViewInit(){log('ngAfterViewInit called');}
  ngAfterViewChecked(){log('ngAfterViewChecked called');log("paragraph: "+ this.paragraph.nativeElement.textContent)}
  ngOnDestroy(){log('ngOnDestroy called');}
}
