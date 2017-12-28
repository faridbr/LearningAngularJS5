import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  constructor() { }

  logStatusChanged(status: string){
    console.log(`A server status changed, new status: ${status}`);
  }

}
