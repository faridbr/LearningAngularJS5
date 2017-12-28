import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';

@Injectable()
export class UsersService {

  activeUsers = [{name:'Max', number:0}, {name:'Anna', number:0}];
  inactiveUsers =[{name:'Chris', number:0}, {name:'Manu', number:0}];

  constructor() { 
  }

  setToInactive(id: number) {
    this.activeUsers[id].number += 1;
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  setToActive(id: number) {
    this.inactiveUsers[id].number += 1;
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }

}
