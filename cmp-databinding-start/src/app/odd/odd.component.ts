import { Component, OnInit, Input } from '@angular/core';
import { log } from '../log';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  @Input() number: number;
  constructor() { }

  ngOnInit() {
  }
}
