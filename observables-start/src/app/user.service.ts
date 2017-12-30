import { Injectable } from '@angular/core';
//import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {

  userActivated = new Subject();

  constructor() { }

}
