import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  
  users: {name: string, number :number}[];

  constructor(private usersService: UsersService){}

  ngOnInit(){
    this.users = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }
}
